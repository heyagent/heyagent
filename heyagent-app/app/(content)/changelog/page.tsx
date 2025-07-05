"use client";

import { changelogData } from "@/lib/changelog-data";
import ChangelogTabs from "@/components/changelog/ChangelogTabs";
import { useEffect, useRef } from "react";

export default function ChangelogPage() {
  const dateRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for navbar

      dateRefs.current.forEach((dateEl, index) => {
        if (!dateEl) return;
        
        const parentSection = dateEl.closest('.changelog-section');
        if (!parentSection) return;

        const sectionTop = parentSection.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + parentSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Make it sticky
          dateEl.style.position = 'fixed';
          dateEl.style.top = '120px';
          dateEl.style.width = dateEl.parentElement?.offsetWidth + 'px';
        } else {
          // Reset to normal position
          dateEl.style.position = 'relative';
          dateEl.style.top = 'auto';
          dateEl.style.width = 'auto';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section with Centered Title */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-12 md:pb-16">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Changelog
            </h1>
            {/* Separator */}
            <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-16 sm:pb-20 md:pb-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-5xl">
          {changelogData.map((entry, index) => (
            <div key={entry.version} className="changelog-section mb-16 last:mb-0">
              <div className="md:flex md:gap-8">
                {/* Date Column */}
                <div className="md:w-1/4 mb-6 md:mb-0 relative">
                  <div 
                    ref={el => dateRefs.current[index] = el}
                    className="text-center md:text-left bg-white dark:bg-gray-900 z-20"
                  >
                    <time className="text-2xl font-bold text-amber-400 block mb-1">
                      {entry.date}
                    </time>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Version {entry.version}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                      Version {entry.version} Release
                    </h3>
                    
                    <ChangelogTabs
                      summary={entry.summary}
                      improvements={entry.improvements}
                      fixes={entry.fixes}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}