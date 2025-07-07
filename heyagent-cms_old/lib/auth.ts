import jwt from '@tsndr/cloudflare-worker-jwt';
import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

interface AccessJWT {
  aud: string[];
  email: string;
  sub: string;
  iat: number;
  exp: number;
}

export async function validateRequest(request: NextRequest): Promise<{ user: AccessJWT | null; error?: string }> {
  try {
    // In development, bypass auth
    const { env } = getCloudflareContext();
    if (env.NEXTJS_ENV === 'development') {
      return {
        user: {
          aud: ['dev'],
          email: 'dev@localhost',
          sub: 'dev-user',
          iat: Date.now() / 1000,
          exp: Date.now() / 1000 + 3600
        }
      };
    }

    // Get the CF_Authorization cookie
    const token = request.cookies.get('CF_Authorization')?.value;
    
    if (!token) {
      return { user: null, error: 'No authorization token found' };
    }

    // For now, we'll trust that Cloudflare Access has validated the token
    // In production, you might want to validate the JWT signature
    const decoded = jwt.decode(token) as unknown as AccessJWT;
    
    if (!decoded) {
      return { user: null, error: 'Invalid token' };
    }

    // Check if token is expired
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      return { user: null, error: 'Token expired' };
    }

    return { user: decoded };
  } catch (error) {
    console.error('Auth validation error:', error);
    return { user: null, error: 'Authentication failed' };
  }
}

export function createAuthMiddleware() {
  return async function authMiddleware(request: NextRequest) {
    // Skip auth for API routes that don't need protection
    if (!request.nextUrl.pathname.startsWith('/admin') && 
        !request.nextUrl.pathname.startsWith('/api/admin')) {
      return NextResponse.next();
    }

    const { user, error } = await validateRequest(request);

    if (!user) {
      // Redirect to Cloudflare Access login
      if (request.nextUrl.pathname.startsWith('/admin')) {
        const loginUrl = new URL(request.url);
        return NextResponse.redirect(loginUrl);
      }
      
      // For API routes, return 401
      return NextResponse.json({ error: error || 'Unauthorized' }, { status: 401 });
    }

    // Add user info to headers for downstream use
    const response = NextResponse.next();
    response.headers.set('X-User-Email', user.email);
    response.headers.set('X-User-Sub', user.sub);
    
    return response;
  };
}