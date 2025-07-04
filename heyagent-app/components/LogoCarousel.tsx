"use client";

import Link from "next/link";
import { 
  FiGithub, 
  FiGitlab, 
  FiSlack, 
  FiTrello, 
  FiFigma,
  FiDroplet,
  FiZap,
  FiBox,
  FiDatabase,
  FiCloud,
  FiCpu,
  FiLayers,
  FiMail,
  FiMessageSquare,
  FiCalendar,
  FiShoppingCart,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiChrome,
  FiCodepen,
  FiAperture,
  FiAnchor,
  FiArchive,
  FiBell,
  FiBookmark,
  FiCamera,
  FiCast,
  FiCompass,
  FiCreditCard,
  FiDollarSign,
  FiFeather,
  FiGlobe,
  FiHeadphones,
  FiKey,
  FiMap,
  FiMusic,
  FiPackage,
  FiPieChart,
  FiRadio,
  FiServer,
  FiShield,
  FiSpeaker,
  FiStar,
  FiTag,
  FiThermometer,
  FiTool,
  FiTrendingUp,
  FiTv,
  FiUmbrella,
  FiUsers,
  FiVideo,
  FiWifi,
  FiZapOff
} from "react-icons/fi";

export default function LogoCarousel() {
  // First row icons moving left
  const topRowIcons = [
    FiGithub,
    FiGitlab,
    FiSlack,
    FiTrello,
    FiFigma,
    FiDroplet,
    FiMail,
    FiMessageSquare,
    FiCalendar,
    FiShoppingCart,
    FiYoutube,
    FiLinkedin,
    FiTwitter,
    FiInstagram,
    FiChrome,
    FiCodepen,
    // Duplicate for seamless loop
    FiGithub,
    FiGitlab,
    FiSlack,
    FiTrello,
    FiFigma,
    FiDroplet,
    FiMail,
    FiMessageSquare,
    FiCalendar,
    FiShoppingCart,
    FiYoutube,
    FiLinkedin,
    FiTwitter,
    FiInstagram,
    FiChrome,
    FiCodepen,
  ];

  // Second row icons moving right
  const bottomRowIcons = [
    FiZap,
    FiBox,
    FiDatabase,
    FiCloud,
    FiCpu,
    FiLayers,
    FiServer,
    FiShield,
    FiGlobe,
    FiKey,
    FiPieChart,
    FiTrendingUp,
    FiUsers,
    FiVideo,
    FiWifi,
    FiTool,
    // Duplicate for seamless loop
    FiZap,
    FiBox,
    FiDatabase,
    FiCloud,
    FiCpu,
    FiLayers,
    FiServer,
    FiShield,
    FiGlobe,
    FiKey,
    FiPieChart,
    FiTrendingUp,
    FiUsers,
    FiVideo,
    FiWifi,
    FiTool,
  ];

  return (
    <div className="relative w-full">
      {/* Header and CTA */}
      <div className="text-center mb-12">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Connect with <span className="bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">400+ integrations</span>
        </h3>
        <p className="text-slate-400 dark:text-white/60 max-w-2xl mx-auto mb-8">
          Seamlessly integrate with your favorite tools and services to create powerful automation workflows
        </p>
        <Link 
          href="/integrations" 
          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md"
        >
          View All Integrations
        </Link>
      </div>

      {/* Carousel Container with Gradient Background */}
      <div className="relative overflow-hidden py-12 px-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700">
        {/* Left mist/fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 z-10" />
        
        {/* Right mist/fade effect */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent dark:from-slate-900 dark:via-slate-900/80 z-10" />

        {/* Top row - moving left */}
        <div className="flex items-center mb-8">
          <div className="animate-scroll-left flex items-center gap-6">
            {topRowIcons.map((Icon, index) => (
              <div 
                key={`top-${index}`}
                className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl shadow-sm hover:shadow-md hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300"
              >
                <Icon className="text-2xl text-slate-600 dark:text-slate-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row - moving right */}
        <div className="flex items-center">
          <div className="animate-scroll-right flex items-center gap-6">
            {bottomRowIcons.map((Icon, index) => (
              <div 
                key={`bottom-${index}`}
                className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl shadow-sm hover:shadow-md hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300"
              >
                <Icon className="text-2xl text-slate-600 dark:text-slate-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}