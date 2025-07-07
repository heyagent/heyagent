"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "@/components/shared/Logo";
import NavLink from "@/components/navbar/NavLink";
import ThemeToggle from "@/components/navbar/ThemeToggle";
import MobileMenuButton from "@/components/navbar/MobileMenuButton";

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
    <nav className={`fixed top-2 sm:top-4 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className={`rounded-2xl transition-all duration-300 border ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-800/95 shadow-md dark:shadow-amber-400/10 backdrop-blur-sm border-gray-200 dark:border-amber-400/30' 
            : 'bg-black/10 dark:bg-white/10 backdrop-blur-md border-transparent'
        }`}>
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-14 md:h-16">
              {/* Logo */}
              <Logo isScrolled={isScrolled} />

              {/* Desktop Navigation - Centered */}
              <div className="hidden lg:flex items-center lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                <ul className="flex items-center space-x-4 xl:space-x-8">
                  <li><NavLink href="/pricing" isScrolled={isScrolled}>Pricing</NavLink></li>
                  <li><NavLink href="/platform" isScrolled={isScrolled}>Platform</NavLink></li>
                  <li><NavLink href="/integrations" isScrolled={isScrolled}>Integrations</NavLink></li>
                  <li><NavLink href="/workflows" isScrolled={isScrolled}>Workflows</NavLink></li>
                  <li><NavLink href="/blog" isScrolled={isScrolled}>Blog</NavLink></li>
                </ul>
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3">
                <Link href="/signin" className="hidden lg:inline-flex">
                  <span className={`py-2 px-4 text-sm font-medium transition-colors ${
                    isScrolled ? 'text-slate-700 dark:text-white hover:text-amber-400' : 'text-slate-700 dark:text-white hover:text-amber-400'
                  }`}>
                    Sign in
                  </span>
                </Link>
                
                {/* Theme Switcher */}
                <ThemeToggle 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                  isScrolled={isScrolled} 
                />

                {/* Mobile menu button */}
                <MobileMenuButton 
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                  isScrolled={isScrolled}
                />
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
            <ul className="py-4 space-y-1 px-4">
              <li><NavLink href="/pricing" isScrolled={isScrolled} mobile>Pricing</NavLink></li>
              <li><NavLink href="/platform" isScrolled={isScrolled} mobile>Platform</NavLink></li>
              <li><NavLink href="/integrations" isScrolled={isScrolled} mobile>Integrations</NavLink></li>
              <li><NavLink href="/workflows" isScrolled={isScrolled} mobile>Workflows</NavLink></li>
              <li><NavLink href="/blog" isScrolled={isScrolled} mobile>Blog</NavLink></li>
              <li className={`pt-4 mt-2 space-y-1 border-t ${
                isScrolled ? 'border-slate-200 dark:border-slate-600' : 'border-white/20'
              }`}>
                <NavLink href="/signin" isScrolled={isScrolled} mobile>Sign in</NavLink>
                <ThemeToggle 
                  darkMode={darkMode} 
                  toggleDarkMode={toggleDarkMode} 
                  isScrolled={isScrolled} 
                  mobile
                />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}