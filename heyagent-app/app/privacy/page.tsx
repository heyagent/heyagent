"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function PrivacyPolicy() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-6 sm:pb-8 md:pb-12 bg-gradient-to-b from-orange-400/25 via-red-300/18 dark:from-orange-400/35 dark:via-red-300/25 to-transparent">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="text-2xl sm:text-3xl md:text-4xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">
                Privacy Policy
              </h5>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mt-5">
              Last updated: January 4, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <h5 className="text-xl font-semibold mb-4">Overview:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.
                </p>
                
                <h5 className="text-xl font-semibold mb-4 mt-8">We use your information to:</h5>
                <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Create your own skin to match your brand
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Create your own skin to match your brand
                  </li>
                </ul>
                
                <h5 className="text-xl font-semibold mb-4 mt-8">Information Provided Voluntarily:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  In the 1960s, the text suddenly became known beyond the professional circle of typesetters and layout designers when it was used for Letraset sheets (adhesive letters on transparent film, popular until the 1980s) Versions of the text were subsequently included in DTP programmes such as PageMaker etc.
                </p>
                
                <div className="mt-8">
                  <a 
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md" 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      window.print();
                    }}
                  >
                    Print
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}