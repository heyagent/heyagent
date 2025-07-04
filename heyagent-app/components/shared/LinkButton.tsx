import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkButton({ href, children, className = "" }: LinkButtonProps) {
  return (
    <Link 
      href={href} 
      className={`hover:text-amber-400 font-medium duration-500 inline-flex items-center ${className}`}
    >
      {children}
      <svg className="w-5 h-5 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}