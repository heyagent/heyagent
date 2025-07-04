import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({ href, children, className = "" }: PrimaryButtonProps) {
  const baseClasses = "py-3 px-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm sm:text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md";
  
  return (
    <Link 
      href={href}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </Link>
  );
}