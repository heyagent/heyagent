import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin') || 
      request.nextUrl.pathname.startsWith('/api/admin')) {
    
    // Check for Cloudflare Access JWT cookie
    const cfAuth = request.cookies.get('CF_Authorization');
    
    if (!cfAuth) {
      // No auth cookie, Cloudflare Access will handle the redirect
      // But we need to ensure the request goes through CF Access
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*']
};