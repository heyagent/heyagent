import Link from "next/link";
import { 
  FiLinkedin, 
  FiFacebook, 
  FiInstagram, 
  FiTwitter, 
  FiMail, 
  FiHeart
} from "react-icons/fi";
import Logo from "@/components/shared/Logo";
import FooterLinkSection from "@/components/footer/FooterLinkSection";
import SocialLink from "@/components/footer/SocialLink";
import NewsletterForm from "@/components/footer/NewsletterForm";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Gradient ridge/line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-fuchsia-600"></div>
      
      {/* Gradient blob */}
      <span className="absolute blur-[200px] w-[300px] h-[300px] rounded-full top-0 -start-[0] bg-gradient-to-tl to-amber-400 from-fuchsia-600 z-0"></span>
      
      {/* CTA Section */}
      <div className="container-fluid relative py-6 sm:py-8 md:py-12 lg:py-24">
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
                <Logo />
                <p className="mt-4 text-slate-600 dark:text-gray-400 text-sm pr-0 sm:pr-8">
                  Create amazing AI-powered automation workflows with our intuitive platform. Transform your business with intelligent agents.
                </p>
              </div>

              {/* Product Links */}
              <div className="lg:col-span-2 md:col-span-2 lg:ms-8">
                <FooterLinkSection 
                  title="Product"
                  links={[
                    { href: "/", label: "Home" },
                    { href: "/pricing", label: "Pricing" },
                    { href: "/platform", label: "Platform" },
                    { href: "#", label: "Workflows" },
                    { href: "#", label: "Integrations" },
                    { href: "#", label: "Schedule Demo" }
                  ]}
                />
              </div>

              {/* Resources Links */}
              <div className="lg:col-span-2 md:col-span-2">
                <FooterLinkSection 
                  title="Resources"
                  links={[
                    { href: "#", label: "About" },
                    { href: "#", label: "ROI Calculator" },
                    { href: "#", label: "Case Studies" },
                    { href: "/changelog", label: "Changelog" },
                    { href: "/faq", label: "FAQ" },
                    { href: "/blog", label: "Blog" }
                  ]}
                />
              </div>

              {/* Company Links */}
              <div className="lg:col-span-2 md:col-span-2">
                <FooterLinkSection 
                  title="Company"
                  links={[
                    { href: "#", label: "Contact" },
                    { href: "/account", label: "Account" },
                    { href: "/status", label: "Status" },
                    { href: "/terms", label: "Terms of Service" },
                    { href: "/privacy", label: "Privacy Policy" },
                    { href: "/cookies", label: "Cookie Policy" }
                  ]}
                />
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-3 md:col-span-6">
                <NewsletterForm />
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
                <SocialLink 
                  href="https://facebook.com/heyagent"
                  icon={<FiFacebook className="h-5 w-5" />}
                  ariaLabel="Facebook"
                />
                <SocialLink 
                  href="https://instagram.com/heyagent"
                  icon={<FiInstagram className="h-5 w-5" />}
                  ariaLabel="Instagram"
                />
                <SocialLink 
                  href="https://twitter.com/heyagent"
                  icon={<FiTwitter className="h-5 w-5" />}
                  ariaLabel="Twitter"
                />
                <SocialLink 
                  href="https://linkedin.com/heyagent"
                  icon={<FiLinkedin className="h-5 w-5" />}
                  ariaLabel="LinkedIn"
                />
                <SocialLink 
                  href="mailto:support@heyagent.ai"
                  icon={<FiMail className="h-5 w-5" />}
                  ariaLabel="Email"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}