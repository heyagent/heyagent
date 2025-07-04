"use client";

import { FiMail } from "react-icons/fi";

export default function NewsletterForm() {
  return (
    <div>
      <h5 className="text-slate-900 dark:text-white font-semibold mb-3 sm:mb-4 mt-6 md:mt-0">Newsletter</h5>
      <p className="text-slate-600 dark:text-gray-400 text-sm mb-4">
        Sign up and receive the latest tips via email.
      </p>
      <form className="relative">
        <input
          type="email"
          className="w-full py-3 px-4 pe-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-slate-900 dark:text-gray-100 rounded-md focus:border-amber-400 focus:outline-none placeholder:text-slate-400 dark:placeholder:text-gray-500"
          placeholder="Your email:"
        />
        <button
          type="submit"
          className="absolute top-[2px] end-[3px] h-[46px] px-4 bg-amber-400 hover:bg-amber-500 text-white rounded-md transition-colors"
          aria-label="Subscribe to newsletter"
        >
          <FiMail className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}