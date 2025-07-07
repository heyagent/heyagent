import Link from "next/link";

interface LogoProps {
  isScrolled?: boolean;
}

export default function Logo({ isScrolled }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-1 sm:space-x-2">
      <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
        ✳
      </span>
      <span className={`text-xl sm:text-2xl font-bold ${
        isScrolled !== undefined 
          ? isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'
          : 'text-slate-900 dark:text-white'
      }`}>
        HEYAGENT
      </span>
    </Link>
  );
}