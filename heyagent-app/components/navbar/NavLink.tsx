import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
  mobile?: boolean;
}

export default function NavLink({ href, children, isScrolled, mobile = false }: NavLinkProps) {
  if (mobile) {
    return (
      <Link 
        href={href} 
        className={`block py-3 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-amber-400 text-base font-medium transition-colors ${
          isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
        }`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link 
      href={href} 
      className={`hover:text-amber-400 transition-colors text-sm font-medium ${
        isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
      }`}
    >
      {children}
    </Link>
  );
}