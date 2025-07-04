import Link from "next/link";
import StandaloneDarkModeToggle from "@/components/shared/StandaloneDarkModeToggle";
import PrimaryButton from "@/components/shared/PrimaryButton";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden h-screen flex items-center justify-center">
      {/* Dark mode toggle */}
      <StandaloneDarkModeToggle className="absolute top-3 right-3 sm:top-4 sm:right-4" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-8">
          <Link href="/" className="inline-flex items-center space-x-2 sm:space-x-3 mb-8 sm:mb-10 lg:mb-10">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
              ✳
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              HEYAGENT
            </span>
          </Link>
          
          <img 
            src="/404.svg" 
            className="max-w-xs sm:max-w-sm lg:max-w-sm mx-auto w-full mb-8 sm:mb-10 lg:mb-10 px-4 sm:px-0" 
            alt="404 Error"
          />
          
          <h5 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl leading-normal tracking-wide sm:tracking-wider font-bold text-slate-900 dark:text-white text-center">
            Page Not Found
          </h5>
          
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 dark:text-white/70 max-w-xs sm:max-w-md lg:max-w-xl mx-auto text-center mb-6 sm:mb-8 px-4 sm:px-0">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <PrimaryButton href="/">
            Back to Home
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}