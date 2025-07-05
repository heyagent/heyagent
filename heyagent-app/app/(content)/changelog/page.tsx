"use client";

import ChangelogTabs from "@/components/changelog/ChangelogTabs";
import { useEffect, useRef, useState } from "react";
import { ChangelogEntryType } from "@/lib/changelog-data";

export default function ChangelogPage() {
  const dateRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [changelogData, setChangelogData] = useState<ChangelogEntryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch changelog data
  useEffect(() => {
    const fetchChangelog = async () => {
      try {
        const response = await fetch('/api/changelog');
        if (!response.ok) {
          throw new Error('Failed to fetch changelog');
        }
        const data: ChangelogEntryType[] = await response.json();
        setChangelogData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load changelog');
      } finally {
        setLoading(false);
      }
    };

    fetchChangelog();
  }, []);

  useEffect(() => {
    // Check if mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      // Only apply sticky behavior on desktop
      if (isMobile) return;

      // Responsive navbar offset
      const navbarOffset = window.innerWidth >= 768 ? 120 : 80; // Smaller offset on mobile
      const scrollPosition = window.scrollY + navbarOffset;

      dateRefs.current.forEach((dateEl, index) => {
        if (!dateEl) return;
        
        const parentSection = dateEl.closest('.changelog-section');
        if (!parentSection) return;

        const sectionTop = parentSection.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + (parentSection as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Make it sticky
          dateEl.style.position = 'fixed';
          dateEl.style.top = `${navbarOffset}px`;
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen overflow-x-hidden">
      {/* Hero Section with Centered Title */}
      <section className="relative pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-6 sm:pb-10 md:pb-14">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Changelog
            </h1>
            {/* Separator */}
            <div className="w-20 sm:w-24 h-1 bg-amber-400 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-12 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-5xl">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading changelog...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 dark:text-red-400">Error: {error}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">Please try again later.</p>
            </div>
          ) : changelogData.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">No changelog entries found.</p>
            </div>
          ) : (
            changelogData.map((entry, index) => (
            <div key={entry.version} className="changelog-section mb-12 sm:mb-14 md:mb-16 last:mb-0">
              <div className="lg:flex lg:gap-8">
                {/* Date Column */}
                <div className="lg:w-1/4 mb-4 sm:mb-6 lg:mb-0 relative">
                  <div 
                    ref={el => { dateRefs.current[index] = el; }}
                    className="text-center lg:text-left bg-white dark:bg-gray-900 z-20 pb-2 lg:pb-0"
                  >
                    <time className="text-xl sm:text-2xl font-bold text-amber-400 block mb-1">
                      {entry.date}
                    </time>
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Version {entry.version}
                    </span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:flex-1">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 shadow-sm">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-5 md:mb-6">
                      {entry.title}
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
          )))}
        </div>
      </section>
    </main>
  );
}