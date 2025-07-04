"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className={`rounded-2xl transition-all duration-300 border ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-800/95 shadow-md dark:shadow-amber-400/10 backdrop-blur-sm border-gray-200 dark:border-amber-400/30' 
            : 'bg-black/10 dark:bg-white/10 backdrop-blur-md border-transparent'
        }`}>
          <div className="px-6">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-3xl bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
                  ✳
                </span>
                <span className={`text-2xl font-bold ${
                  isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-900 dark:text-white'
                }`}>
                  HEYAGENT
                </span>
              </Link>

              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                <ul className="flex items-center space-x-8">
                  <li>
                    <Link href="/pricing" className={`hover:text-amber-400 transition-colors text-sm font-medium ${
                      isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                    }`}>
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/platform" className={`hover:text-amber-400 transition-colors text-sm font-medium ${
                      isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                    }`}>
                      Platform
                    </Link>
                  </li>
                  <li>
                    <Link href="/integrations" className={`hover:text-amber-400 transition-colors text-sm font-medium ${
                      isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                    }`}>
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="/workflows" className={`hover:text-amber-400 transition-colors text-sm font-medium ${
                      isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                    }`}>
                      Workflows
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className={`hover:text-amber-400 transition-colors text-sm font-medium ${
                      isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                    }`}>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3">
                <Link href="/signin" className="hidden md:inline-flex">
                  <span className={`py-2 px-4 text-sm font-medium transition-colors ${
                    isScrolled ? 'text-slate-700 dark:text-white hover:text-amber-400' : 'text-slate-700 dark:text-white hover:text-amber-400'
                  }`}>
                    Sign in
                  </span>
                </Link>
                
                {/* Theme Switcher */}
                <button
                  onClick={toggleDarkMode}
                  className={`hidden md:flex p-2 rounded-lg transition-colors ${
                    isScrolled 
                      ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-white' 
                      : 'hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-white'
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

                {/* Mobile menu button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 ${
                    isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                  }`}
                >
                  {mobileMenuOpen ? (
                    <FiX className="w-5 h-5" />
                  ) : (
                    <FiMenu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu - Outside of navbar container */}
        {mobileMenuOpen && (
          <div className={`lg:hidden mt-2 rounded-2xl transition-all duration-300 border ${
            isScrolled 
              ? 'bg-white/95 dark:bg-slate-800/95 shadow-md backdrop-blur-sm border-gray-200 dark:border-slate-600' 
              : 'bg-black/10 dark:bg-white/10 backdrop-blur-md border-white/20'
          }`}>
            <ul className="py-4 space-y-2 px-6">
              <li>
                <Link href="/pricing" className={`block py-2 hover:text-amber-400 text-sm font-medium ${
                  isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                }`}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/platform" className={`block py-2 hover:text-amber-400 text-sm font-medium ${
                  isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                }`}>
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/integrations" className={`block py-2 hover:text-amber-400 text-sm font-medium ${
                  isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                }`}>
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/workflows" className={`block py-2 hover:text-amber-400 text-sm font-medium ${
                  isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                }`}>
                  Workflows
                </Link>
              </li>
              <li>
                <Link href="/blog" className={`block py-2 hover:text-amber-400 text-sm font-medium ${
                  isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                }`}>
                  Blog
                </Link>
              </li>
              <li className={`pt-4 space-y-2 border-t ${
                isScrolled ? 'border-slate-200 dark:border-slate-600' : 'border-white/20'
              }`}>
                <Link href="/signin" className={`block py-2 hover:text-amber-400 text-sm font-medium ${
                  isScrolled ? 'text-slate-700 dark:text-white' : 'text-slate-700 dark:text-white'
                }`}>
                  Sign in
                </Link>
                <button
                  onClick={toggleDarkMode}
                  className={`flex items-center space-x-2 py-2 hover:text-amber-400 text-sm font-medium w-full ${
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
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}