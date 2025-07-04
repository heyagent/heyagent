"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to 'light' mode
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center bg-amber-400/5 dark:bg-amber-400/10">
      {/* Dark mode toggle */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2.5 rounded-lg transition-colors hover:bg-amber-100 dark:hover:bg-amber-900/20 text-amber-600 dark:text-amber-400"
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
      
      <div className="container relative mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-1/2 text-center">
            <Link href="/" className="inline-flex items-center space-x-3 mb-8">
              <span className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
                ✳
              </span>
              <span className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white">
                HEYAGENT
              </span>
            </Link>
            <div className="mt-8">
              <img 
                src="/404.svg" 
                className="max-w-md mx-auto w-full" 
                alt="404 Error"
              />
              <div className="text-center mt-8">
                <h5 className="mb-4 md:text-5xl text-3xl md:leading-normal leading-normal tracking-wider font-bold text-slate-900 dark:text-white">
                  Page Not Found
                </h5>
                <p className="text-slate-400 dark:text-white/70 max-w-xl mx-auto">
                  Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                </p>
                <div className="mt-6">
                  <Link 
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md" 
                    href="/"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}