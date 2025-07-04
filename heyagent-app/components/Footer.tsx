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
    <footer className="relative bg-gray-900 overflow-hidden">
      {/* Gradient ridge/line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-fuchsia-600"></div>
      
      {/* Gradient blob */}
      <span className="absolute blur-[200px] w-[300px] h-[300px] rounded-full top-0 -start-[0] bg-gradient-to-tl to-amber-400 from-fuchsia-600 z-0"></span>
      
      {/* CTA Section */}
      <div className="container-fluid relative md:py-24 py-16">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 text-center">
            <div>
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl text-white tracking-normal mb-4">
                Start Your Free Trial.
              </h4>
              <p className="text-white/70 text-lg max-w-xl mx-auto">
                Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!
              </p>
              <div className="mt-6">
                <Link 
                  href="/signup" 
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md"
                >
                  Join Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container relative mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 border-t border-gray-800 dark:border-slate-800">
          <div className="py-[30px] px-0">
            <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
              {/* Logo and Description */}
              <div className="lg:col-span-3">
                <Link href="/" className="text-[22px] focus:outline-none flex items-center space-x-2">
                  <span className="text-3xl bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">
                    ✳
                  </span>
                  <span className="text-2xl font-bold text-white">
                    HEYAGENT
                  </span>
                </Link>
                <p className="mt-4 text-gray-400 text-sm">
                  Create amazing AI-powered automation workflows with our intuitive platform. Transform your business with intelligent agents.
                </p>
              </div>

              {/* Company Links */}
              <div className="lg:col-span-2 lg:ms-8">
                <h5 className="text-white font-semibold mb-4">Company</h5>
                <ul className="list-none space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">About Us</Link></li>
                  <li><Link href="/features" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Features</Link></li>
                  <li><Link href="/pricing" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Pricing</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Blog</Link></li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="lg:col-span-2">
                <h5 className="text-white font-semibold mb-4">Support</h5>
                <ul className="list-none space-y-2">
                  <li><Link href="/help" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Help Center</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Contact Us</Link></li>
                  <li><Link href="/faq" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">FAQ</Link></li>
                  <li><Link href="/status" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Status</Link></li>
                </ul>
              </div>

              {/* Legal Links */}
              <div className="lg:col-span-2">
                <h5 className="text-white font-semibold mb-4">Legal</h5>
                <ul className="list-none space-y-2">
                  <li><Link href="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/cookies" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Cookie Policy</Link></li>
                  <li><Link href="/license" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">License</Link></li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-3">
                <h5 className="text-white font-semibold mb-4">Newsletter</h5>
                <p className="text-gray-400 text-sm mb-4">
                  Sign up and receive the latest tips via email.
                </p>
                <form className="relative">
                  <input
                    type="email"
                    className="w-full py-3 px-4 pe-12 bg-gray-800 border border-gray-700 text-gray-100 rounded-md focus:border-amber-400 focus:outline-none placeholder:text-gray-500"
                    placeholder="Your email:"
                  />
                  <button
                    type="submit"
                    className="absolute top-[2px] end-[3px] h-[46px] px-4 bg-amber-400 hover:bg-amber-500 text-white rounded-md transition-colors"
                  >
                    <FiMail className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-[30px] px-0 border-t border-gray-800 dark:border-slate-800">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center">
            {/* Copyright Text - Left */}
            <div className="md:text-start text-center">
              <p className="text-gray-400 text-sm">
                © 2025 HeyAgent.AI. Design with{" "}
                <FiHeart className="text-orange-700 inline-block" />{" "}
                by{" "}
                <a 
                  className="text-gray-400 hover:text-amber-400 transition-colors" 
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
            <div className="md:text-end text-center mt-6 md:mt-0">
              <ul className="list-none space-x-1">
                <li className="inline">
                  <a 
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white" 
                    href="https://facebook.com/heyagent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiFacebook className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a 
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white" 
                    href="https://instagram.com/heyagent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiInstagram className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a 
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white" 
                    href="https://twitter.com/heyagent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiTwitter className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a 
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white" 
                    href="https://linkedin.com/heyagent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin className="h-4 w-4" />
                  </a>
                </li>
                <li className="inline">
                  <a 
                    className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 dark:border-slate-800 rounded-md hover:border-amber-400 dark:hover:border-amber-400 hover:bg-amber-400 dark:hover:bg-amber-400 text-slate-300 hover:text-white" 
                    href="mailto:support@heyagent.ai"
                  >
                    <FiMail className="h-4 w-4" />
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