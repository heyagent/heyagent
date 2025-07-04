interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isScrolled: boolean;
  mobile?: boolean;
}

export default function ThemeToggle({ darkMode, toggleDarkMode, isScrolled, mobile = false }: ThemeToggleProps) {
  if (mobile) {
    return (
      <button
        onClick={toggleDarkMode}
        className={`flex items-center space-x-3 py-3 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-amber-400 text-base font-medium w-full transition-colors ${
          isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
        }`}
      >
        {darkMode ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            <span>Dark Mode</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`hidden lg:flex p-2.5 rounded-lg transition-colors ${
        isScrolled 
          ? 'hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-white' 
          : 'hover:bg-white/20 dark:hover:bg-white/10 text-slate-700 dark:text-white'
      }`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}