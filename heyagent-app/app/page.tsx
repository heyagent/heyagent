import Image from "next/image";
import Link from "next/link";
import TypewriterEffect from "@/components/TypewriterEffect";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden pt-48 pb-16 after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-[56rem] after:h-[56rem] after:bg-gradient-to-tl after:to-amber-400/30 after:from-fuchsia-600/30 dark:after:to-amber-400/50 dark:after:from-fuchsia-600/50 after:blur-[200px] after:rounded-full after:-z-1">
        <div className="container relative z-2 mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 text-center">
            <div>
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">
                The AI Content <br /> Platform for
                <TypewriterEffect 
                  words={["Videos", "Images", "Music", "Code", "Content"]}
                  className="typewrite bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text ms-4"
                />
              </h4>
              <p className="text-slate-400 dark:text-white/60 text-lg max-w-xl mx-auto">
                Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!
              </p>
              <div className="mt-6">
                <a 
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md" 
                  href="/"
                >
                  Try For Free
                </a>
                <p className="text-slate-400 dark:text-white/60 text-sm mt-3">
                  No credit card required. Free 14-days trial
                </p>
              </div>
            </div>
            <div className="relative mt-8 z-3">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="relative p-[2px] bg-gradient-to-br from-amber-400 to-fuchsia-600 rounded-xl">
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg shadow-2xl flex items-center justify-center">
                    <span className="text-slate-500">Hero Image Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute lg:after:-bottom-40 after:-bottom-28 after:end-0 after:start-0 after:mx-auto xl:after:w-[56rem] lg:after:w-[48rem] md:after:w-[32rem] after:w-[22rem] xl:after:h-[56rem] lg:after:h-[48rem] md:after:h-[32rem] after:h-[22rem] after:border-2 after:border-dashed after:border-slate-700/10 dark:after:border-slate-200/10 after:rounded-full after:-z-1 before:content-[''] before:absolute lg:before:-bottom-72 before:-bottom-56 before:end-0 before:start-0 before:mx-auto xl:before:w-[72rem] lg:before:w-[64rem] md:before:w-[48rem] before:w-[24rem] xl:before:h-[72rem] lg:before:h-[64rem] md:before:h-[48rem] before:h-[24rem] before:border-2 before:border-dashed before:border-slate-700/10 dark:before:border-slate-200/10 before:rounded-full before:-z-1"></div>
      </section>

      {/* Video Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative md:mt-12 mt-8 mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-slate-800">
              <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800 z-1">
                <div className="relative">
                  {/* Video placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-lg"></div>
                </div>
                
                {/* Play button overlay */}
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <button className="lg:h-16 h-14 lg:w-16 w-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-400 text-amber-400 hover:text-white duration-500 ease-in-out mx-auto">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Language tags */}
              <div className="mt-6 flex flex-wrap">
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  🇮🇹 Italian
                </span>
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  🇮🇳 Hindi
                </span>
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  🇷🇺 Russian
                </span>
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  🇪🇸 Spanish
                </span>
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  🇬🇧 English
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Turn agents into high-quality <br /> automation with one click
              </h3>
              <p className="text-slate-400 dark:text-white/60 max-w-xl">
                "Usually, our colleagues don't jump in the air when they hear about automation, but the AI agents created with HeyAgent have sparked productivity that we haven't seen before."
              </p>
              
              <ul className="list-none text-slate-400 dark:text-white/60 mt-4">
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Digital Automation Solutions for Tomorrow
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Our Talented & Experienced Engineering Team
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Create your own workflows to match your needs
                </li>
              </ul>
              
              <div className="mt-4">
                <Link href="/" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                  Find Out More 
                  <svg className="w-5 h-5 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Writing Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="relative order-1 md:order-2">
              <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 pe-6 pt-6 lg:ms-8">
                {/* Placeholder for content writing dashboard */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-tr-lg h-80 flex items-center justify-center">
                  <span className="text-slate-500">Content Writing Dashboard</span>
                </div>
              </div>
            </div>
            
            <div className="order-2 md:order-1">
              <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Build Workflows, <br /> Integrations, & Even APIs
              </h4>
              <p className="text-slate-400 dark:text-white/60">
                "Usually, our colleagues don't jump in the air when they hear about automation, but the AI agents created with HeyAgent have sparked productivity that we haven't seen before."
              </p>
              
              <ul className="list-none text-slate-400 dark:text-white/60 mt-4">
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Digital Automation Solutions for Tomorrow
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Our Talented & Experienced Engineering Team
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Create your own workflows to match your needs
                </li>
              </ul>
              
              <div className="mt-4">
                <Link href="/" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                  Find Out More 
                  <svg className="w-5 h-5 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 ps-6 pt-6 lg:me-8">
              {/* Dashboard placeholder */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-tl-lg h-80 flex items-center justify-center">
                <span className="text-slate-500">Analytics Dashboard</span>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Create Agents In Single <br /> Click With AI Power
              </h3>
              <p className="text-slate-400 dark:text-white/60 max-w-xl">
                "Usually, our colleagues don't jump in the air when they hear about automation, but the AI agents created with HeyAgent have sparked productivity that we haven't seen before."
              </p>
              
              <ul className="list-none text-slate-400 dark:text-white/60 mt-4">
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Digital Automation Solutions for Tomorrow
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Our Talented & Experienced Engineering Team
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Create your own workflows to match your needs
                </li>
              </ul>
              
              <div className="mt-4">
                <Link href="/" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                  Find Out More 
                  <svg className="w-5 h-5 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}