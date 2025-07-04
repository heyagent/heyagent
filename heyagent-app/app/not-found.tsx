"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    // Add a class to body when 404 page is mounted
    document.body.classList.add("no-layout");
    return () => {
      document.body.classList.remove("no-layout");
    };
  }, []);

  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center bg-amber-400/5 dark:bg-amber-400/10">
      <div className="container relative mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-1/2 text-center">
            <Link href="/" className="inline-flex items-center space-x-2 mb-8">
              <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
                ✳
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
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
                  Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!
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