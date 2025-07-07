import { FiMenu, FiX } from "react-icons/fi";

interface MobileMenuButtonProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  isScrolled: boolean;
}

export default function MobileMenuButton({ mobileMenuOpen, setMobileMenuOpen, isScrolled }: MobileMenuButtonProps) {
  return (
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className={`lg:hidden p-2.5 rounded-lg transition-colors ${
        isScrolled 
          ? 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-white' 
          : 'hover:bg-white/20 dark:hover:bg-white/10 text-slate-700 dark:text-white'
      }`}
      aria-label="Toggle navigation menu"
    >
      {mobileMenuOpen ? (
        <FiX className="w-6 h-6" />
      ) : (
        <FiMenu className="w-6 h-6" />
      )}
    </button>
  );
}