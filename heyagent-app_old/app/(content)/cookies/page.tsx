"use client";

import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalSection from "@/components/legal/LegalSection";
import LegalListItem from "@/components/legal/LegalListItem";

export default function CookiePolicy() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="January 4, 2025">
      <LegalSection title="1. Introduction">
      <p className="text-slate-600 dark:text-slate-300">
        This Cookie Policy explains how HeyAgent ("we," "us," or "our") uses cookies and similar tracking technologies when you use our AI-powered automation services and visit our website. This policy provides you with clear and comprehensive information about the cookies we use, their purpose, and your choices regarding their use.
      </p>
      <p className="text-slate-600 dark:text-slate-300 mt-4">
        <strong>What are cookies?</strong> Cookies are small text files that are placed on your device when you visit a website. They help websites remember information about your visit, making your online experience easier and more personalized.
      </p>
      </LegalSection>

      <LegalSection title="2. Types of Cookies We Use" className="mt-8">
      <p className="text-slate-600 dark:text-slate-300 mb-4">
        We use the following categories of cookies on our website and in our services:
      </p>

      <div className="space-y-6">
        <div>
          <h6 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Essential Cookies</h6>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            These cookies are necessary for our website and services to function properly. They enable core functionality such as security, authentication, and session management. You cannot opt out of these cookies as they are strictly necessary for providing our services.
          </p>
        </div>

        <div>
          <h6 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Analytics Cookies</h6>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            We use analytics cookies to understand how visitors interact with our website and services. These cookies help us analyze usage patterns, measure performance, and improve user experience. The information collected is aggregated and anonymous.
          </p>
        </div>

        <div>
          <h6 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Functional Cookies</h6>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Functional cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and chat history. Disabling these cookies may impact your user experience.
          </p>
        </div>

        <div>
          <h6 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">Marketing Cookies</h6>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            These cookies track your online activity to help us deliver more relevant advertising and measure the effectiveness of our marketing campaigns. They may be set by us or by third-party advertising partners.
          </p>
        </div>
      </div>
      </LegalSection>

      <LegalSection title="3. Detailed Cookie Information" className="mt-8">
      <p className="text-slate-600 dark:text-slate-300 mb-4">
        Below is a detailed list of the specific cookies we use:
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Cookie Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Provider</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Purpose</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Type</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Duration</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">ha_session</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">HeyAgent</td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Authentication and session management</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Essential</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Session</td>
            </tr>
            <tr>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">ha_auth_token</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">HeyAgent</td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Secure authentication token</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Essential</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">7 days</td>
            </tr>
            <tr>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">ha_preferences</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">HeyAgent</td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">User preferences and settings</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Functional</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">1 year</td>
            </tr>
            <tr>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">_ga</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Google Analytics</td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Distinguishes unique users</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Analytics</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">2 years</td>
            </tr>
            <tr>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">_gid</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Google Analytics</td>
              <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Distinguishes unique users</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Analytics</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">24 hours</td>
            </tr>
          </tbody>
        </table>
      </div>
      </LegalSection>

      <LegalSection title="4. How We Use Cookies" className="mt-8">
      <p className="text-slate-600 dark:text-slate-300 mb-4">
        We use cookies for the following purposes:
      </p>
      <ul className="list-none text-slate-600 dark:text-slate-300">
        <LegalListItem>
          <strong>AI Chatbot Functionality:</strong> To maintain conversation context and user state across sessions
        </LegalListItem>
        <LegalListItem>
          <strong>Authentication and Security:</strong> To keep you logged in and protect your account
        </LegalListItem>
        <LegalListItem>
          <strong>Performance Monitoring:</strong> To understand how our services are used and identify areas for improvement
        </LegalListItem>
        <LegalListItem>
          <strong>Integration Support:</strong> To facilitate seamless integration with third-party platforms
        </LegalListItem>
        <LegalListItem>
          <strong>User Experience:</strong> To remember your preferences and provide a personalized experience
        </LegalListItem>
      </ul>
      </LegalSection>

      <LegalSection title="5. Third-Party Cookies" className="mt-8">
      <p className="text-slate-600 dark:text-slate-300">
        Some cookies are placed by third-party services that appear on our pages. We do not control these cookies, and you should refer to the third parties' privacy policies for more information:
      </p>
      <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
        <LegalListItem>
          <strong>Google Analytics:</strong> For website analytics and performance monitoring
        </LegalListItem>
        <LegalListItem>
          <strong>Cloudflare:</strong> For security and performance optimization
        </LegalListItem>
        <LegalListItem>
          <strong>Integration Partners:</strong> When you connect HeyAgent to services like Slack or Microsoft Teams
        </LegalListItem>
      </ul>
      </LegalSection>

      <LegalSection title="6. Your Cookie Choices" className="mt-8">
      <p className="text-slate-600 dark:text-slate-300">
        You have several options for managing cookies:
      </p>
      
      <div className="mt-4 space-y-4">
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h6 className="font-semibold text-slate-800 dark:text-white mb-2">Browser Settings</h6>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our service may not function properly without cookies.
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h6 className="font-semibold text-slate-800 dark:text-white mb-2">Cookie Consent</h6>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            When you first visit our website, you'll see a cookie consent banner that allows you to accept or reject non-essential cookies. You can change your preferences at any time through our cookie settings.
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h6 className="font-semibold text-slate-800 dark:text-white mb-2">Opt-Out Links</h6>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-amber-400 hover:text-amber-500" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>
          </p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
        <p className="text-sm text-amber-800 dark:text-amber-300">
          <strong>Note:</strong> Disabling cookies may impact your ability to use certain features of HeyAgent, including staying logged in, maintaining chat context, and accessing personalized settings.
        </p>
      </div>
      </LegalSection>

      <LegalSection title="7. Legal Basis for Cookie Use" className="mt-8">
      <p className="text-slate-600 dark:text-slate-300">
        We use cookies based on the following legal grounds:
      </p>
      <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
        <LegalListItem>
          <strong>Consent:</strong> For analytics and marketing cookies, we obtain your explicit consent
        </LegalListItem>
        <LegalListItem>
          <strong>Legitimate Interests:</strong> For essential cookies necessary to provide our services securely
        </LegalListItem>
        <LegalListItem>
          <strong>Contract Performance:</strong> For cookies required to deliver the services you've requested
        </LegalListItem>
      </ul>
      </LegalSection>

      <LegalSection title="8. Compliance with Privacy Laws" className="mt-8">
      <p className="text-slate-600 dark:text-slate-300">
        Our use of cookies complies with applicable privacy laws:
      </p>
      <div className="mt-4 space-y-3">
        <p className="text-slate-600 dark:text-slate-300">
          <strong>GDPR (European Union):</strong> We obtain explicit consent before setting non-essential cookies and provide clear information about cookie usage.
        </p>
        <p className="text-slate-600 dark:text-slate-300">
          <strong>CCPA/CPRA (California):</strong> We respect your right to opt out of the sale or sharing of personal information collected through cookies.
        </p>
        <p className="text-slate-600 dark:text-slate-300">
          <strong>ePrivacy Directive:</strong> We comply with requirements for cookie consent and provide mechanisms for users to manage their preferences.
        </p>
      </div>
      </LegalSection>

      <LegalSection title="9. Updates to This Policy" className="mt-8">
      <p className="text-slate-600 dark:text-slate-300">
        We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make material changes:
      </p>
      <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
        <LegalListItem>
          We'll update the "Last updated" date at the top of this policy
        </LegalListItem>
        <LegalListItem>
          We'll notify you through our website or via email for significant changes
        </LegalListItem>
        <LegalListItem>
          We may request renewed consent for certain cookie uses if required
        </LegalListItem>
      </ul>
      </LegalSection>

      <LegalSection title="10. Contact Us" className="mt-8">
      <p className="text-slate-600 dark:text-slate-300">
        If you have any questions about our use of cookies or this Cookie Policy, please contact us:
      </p>
      <div className="mt-4 text-slate-600 dark:text-slate-300">
        <p><strong>HeyAgent Privacy Team</strong></p>
        <p>Email: privacy@heyagent.ai</p>
        <p>Cookie Inquiries: cookies@heyagent.ai</p>
        <p>Data Protection Officer: dpo@heyagent.ai</p>
      </div>

      <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          For more information about how we handle your personal data, please see our <Link href="/privacy" className="text-amber-400 hover:text-amber-500">Privacy Policy</Link>.
        </p>
      </div>
      </LegalSection>
    </LegalPageLayout>
  );
}