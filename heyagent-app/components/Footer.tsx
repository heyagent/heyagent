import Link from "next/link";
import { 
  FiShoppingCart, 
  FiDribbble, 
  FiLinkedin, 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiMail, 
  FiFileText,
  FiHeart
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Gradient ridge/line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-fuchsia-600"></div>
      
      {/* Gradient blob */}
      <span className="absolute blur-[200px] w-[300px] h-[300px] rounded-full top-0 -start-[0] bg-gradient-to-tl to-amber-400 from-fuchsia-600 z-0"></span>
      
      {/* CTA Section */}
      <div className="container-fluid relative md:py-24 py-12">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 text-center">
            <div>
              <h4 className="font-bold lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-normal mb-4">
                Start Your Free Trial.
              </h4>
              <p className="text-slate-600 dark:text-white/80 text-base sm:text-lg max-w-xl mx-auto px-4 sm:px-0">
                Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!
              </p>
              <div className="mt-6">
                <Link 
                  href="/signup" 
                  className="py-3 px-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md"
                >
                  Join Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 border-t border-gray-200 dark:border-gray-800">
          <div className="py-8 sm:py-[30px] px-0">
            <div className="grid lg:grid-cols-12 md:grid-cols-6 grid-cols-1 gap-6 sm:gap-8">
              {/* Logo and Description */}
              <div className="lg:col-span-3 md:col-span-6">
                <Link href="/" className="text-[22px] focus:outline-none flex items-center space-x-1 sm:space-x-2">
                  <span className="text-2xl sm:text-3xl bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
                    ✳
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    HEYAGENT
                  </span>
                </Link>
                <p className="mt-4 text-slate-600 dark:text-gray-400 text-sm pr-0 sm:pr-8">
                  Create amazing AI-powered automation workflows with our intuitive platform. Transform your business with intelligent agents.
                </p>
              </div>

              {/* Company Links */}
              <div className="lg:col-span-2 md:col-span-2 lg:ms-8">
                <h5 className="text-slate-900 dark:text-white font-semibold mb-3 sm:mb-4">Company</h5>
                <ul className="list-none space-y-2">
                  <li><Link href="/about" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">About Us</Link></li>
                  <li><Link href="/features" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">Features</Link></li>
                  <li><Link href="/pricing" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">Pricing</Link></li>
                  <li><Link href="/blog" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">Blog</Link></li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="lg:col-span-2 md:col-span-2">
                <h5 className="text-slate-900 dark:text-white font-semibold mb-3 sm:mb-4">Support</h5>
                <ul className="list-none space-y-2">
                  <li><Link href="/help" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">Help Center</Link></li>
                  <li><Link href="/contact" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">Contact Us</Link></li>
                  <li><Link href="/faq" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">FAQ</Link></li>
                  <li><Link href="/status" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">Status</Link></li>
                </ul>
              </div>

              {/* Legal Links */}
              <div className="lg:col-span-2 md:col-span-2">
                <h5 className="text-slate-900 dark:text-white font-semibold mb-3 sm:mb-4">Legal</h5>
                <ul className="list-none space-y-2">
                  <li><Link href="/terms" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/cookies" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">Cookie Policy</Link></li>
                  <li><Link href="/license" className="text-slate-600 dark:text-gray-400 hover:text-amber-400 text-sm transition-colors">License</Link></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-3 md:col-span-6">
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
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-6 sm:py-[30px] px-0 border-t border-gray-200 dark:border-gray-800">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4 md:gap-0">
            {/* Copyright Text - Left */}
            <div className="md:text-start text-center">
              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm">
                © 2025 HeyAgent.AI. Design with{" "}
                <FiHeart className="text-orange-700 inline-block" />{" "}
                by{" "}
                <a 
                  className="text-slate-600 dark:text-gray-400 hover:text-amber-400 transition-colors" 
                  href="https://heyagent.ai/" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HeyAgent Team
                </a>
                .
              </p>
            </div>

            {/* Social Links - Right */}
            <div className="md:text-end text-center">
              <ul className="list-none flex justify-center md:justify-end gap-2">
                <li className="inline">
                  <a 
                    className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-300 dark:border-gray-800 rounded-md hover:border-amber-400 hover:bg-amber-400 text-slate-600 dark:text-slate-300 hover:text-white" 
                    href="https://facebook.com/heyagent"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <FiFacebook className="h-5 w-5" />
                  </a>
                </li>
                <li className="inline">
                  <a 
                    className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-300 dark:border-gray-800 rounded-md hover:border-amber-400 hover:bg-amber-400 text-slate-600 dark:text-slate-300 hover:text-white" 
                    href="https://instagram.com/heyagent"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="h-5 w-5" />
                  </a>
                </li>
                <li className="inline">
                  <a 
                    className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-300 dark:border-gray-800 rounded-md hover:border-amber-400 hover:bg-amber-400 text-slate-600 dark:text-slate-300 hover:text-white" 
                    href="https://twitter.com/heyagent"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="h-5 w-5" />
                  </a>
                </li>
                <li className="inline">
                  <a 
                    className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-300 dark:border-gray-800 rounded-md hover:border-amber-400 hover:bg-amber-400 text-slate-600 dark:text-slate-300 hover:text-white" 
                    href="https://linkedin.com/heyagent"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="h-5 w-5" />
                  </a>
                </li>
                <li className="inline">
                  <a 
                    className="h-11 w-11 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-300 dark:border-gray-800 rounded-md hover:border-amber-400 hover:bg-amber-400 text-slate-600 dark:text-slate-300 hover:text-white" 
                    href="mailto:support@heyagent.ai"
                    aria-label="Email"
                  >
                    <FiMail className="h-5 w-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}