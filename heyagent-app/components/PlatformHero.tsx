"use client";

import { FiMail } from "react-icons/fi";
import { useEffect, useRef } from "react";

export default function PlatformHero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculatePosition = () => {
      if (!imageRef.current || !containerRef.current) return;

      // Get container dimensions and position
      const container = containerRef.current.getBoundingClientRect();
      const containerLeft = container.left;
      
      // Get viewport width
      const viewportWidth = window.innerWidth;
      
      // Calculate how much width we need from the image's left edge to viewport right edge
      const availableWidth = viewportWidth - containerLeft - (container.width * 7/12); // 7/12 is the left column width
      
      // Set the width to extend to viewport edge
      if (window.innerWidth >= 1024) { // lg breakpoint
        imageRef.current.style.width = `${availableWidth}px`;
        imageRef.current.style.maxWidth = 'none';
        // Fade in after positioning
        setTimeout(() => {
          if (imageRef.current) {
            imageRef.current.style.opacity = '1';
          }
        }, 10);
      } else {
        imageRef.current.style.width = '';
        imageRef.current.style.maxWidth = '';
        imageRef.current.style.opacity = '1';
      }
    };

    // Calculate on mount and resize
    calculatePosition();
    window.addEventListener('resize', calculatePosition);

    return () => window.removeEventListener('resize', calculatePosition);
  }, []);

  return (
    <section className="relative table w-full lg:py-48 md:py-40 pt-36 pb-28 overflow-hidden bg-white dark:bg-slate-900">
      <div className="container relative z-1 mx-auto px-4 sm:px-6 max-w-7xl" ref={containerRef}>
        <div className="relative grid lg:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="lg:me-6 lg:text-start text-center">
              <h1 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">
                Enterprise AI Platform <br /> <span className="bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">Built for Scale.</span>
              </h1>
              <p className="text-lg max-w-xl lg:ms-0 mx-auto">
                Deploy intelligent agents across your organization to automate workflows, streamline operations, and empower employees to focus on what matters most.
              </p>
              
              {/* Email Form */}
              <div className="subcribe-form mt-6 mb-3">
                <form className="relative max-w-md mx-auto lg:ms-0">
                  <div className="relative">
                    <FiMail className="text-xl absolute top-3 start-5" />
                    <input 
                      type="email" 
                      id="aiemail" 
                      name="email" 
                      className="py-4 pe-40 ps-12 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-md bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800" 
                      placeholder="your@company.com"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white rounded-md"
                  >
                    Book Demo
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5">
            <div className="relative after:content-[''] after:absolute lg:after:-top-0 after:-top-10 after:-right-32 after:w-[36rem] after:h-[36rem] after:border-2 after:border-dashed after:border-slate-700/10 dark:after:border-slate-200/10 after:rounded-full after:animate-[spin_120s_linear_infinite] after:-z-1 before:content-[''] before:absolute lg:before:-top-24 before:-top-36 before:-right-56 before:w-[48rem] before:h-[48rem] before:border-2 before:border-dashed before:border-slate-700/10 dark:before:border-slate-200/10 before:rounded-full before:animate-[spin_240s_linear_infinite] before:-z-1">
              <div className="relative after:content-[''] after:absolute lg:after:-top-24 after:-top-10 after:-right-0 after:w-[42rem] after:h-[42rem] after:bg-gradient-to-tl after:to-amber-400/30 after:from-fuchsia-600/30 dark:after:to-amber-400/50 dark:after:from-fuchsia-600/50 after:blur-[200px] after:rounded-full after:-z-1">
                <div ref={imageRef} className="relative p-[2px] bg-gradient-to-br from-amber-400 to-fuchsia-600 rounded-xl lg:max-w-none lg:ms-14 transition-all duration-300 lg:opacity-0">
                  <div className="h-[500px] lg:h-[550px] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-lg shadow-2xl flex items-center justify-center">
                    <span className="text-slate-600 dark:text-slate-500">Platform Dashboard Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}