"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function PrivacyPolicy() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-6 sm:pb-8 md:pb-12 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
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
      <section className="relative py-6 sm:py-8 md:py-10 lg:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md border border-gray-200 dark:border-gray-800">
                <h5 className="text-xl font-semibold mb-4">1. Introduction</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  Welcome to HeyAgent ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered automation services.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  HeyAgent provides AI chatbot services that help businesses automate workflows and boost employee productivity. By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">2. Information We Collect</h5>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  We collect information that you provide directly to us and information automatically collected through your use of our services:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300">
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Account Information:</strong> Name, email address, company name, job title, and authentication credentials</span>
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Conversation Data:</strong> Messages and interactions with HeyAgent through Slack, Teams, or other integrated platforms</span>
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Workflow Data:</strong> Information about automated tasks, approvals, and business processes</span>
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Usage Analytics:</strong> Service usage patterns, feature adoption, and performance metrics</span>
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Integration Data:</strong> Information from connected third-party services (ServiceNow, Jira, Salesforce, etc.)</span>
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">3. How We Use Your Information</h5>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300">
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Providing and maintaining our AI automation services
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Processing and executing automated workflows
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Improving our AI models and service quality
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Providing customer support and responding to inquiries
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Sending service updates and important notifications
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Ensuring compliance with legal obligations
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">4. AI-Specific Data Practices</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Zero Data Retention:</strong> We use LLM providers with zero data retention policies. Your conversation data is processed in memory only and never stored by our AI providers.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  <strong>No Training on Customer Data:</strong> We do not use your data to train our base AI models. Any improvements to our services are made using aggregated, anonymized insights.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  <strong>Data Sanitization:</strong> We automatically remove personally identifiable information from any data used for analytics or service improvement.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">5. Data Security</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    End-to-end encryption for data in transit and at rest
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    SOC 2 Type II compliance
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Regular security audits and penetration testing
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Role-based access controls and authentication
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Continuous monitoring and threat detection
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">6. Data Sharing and Third Parties</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  We do not sell, trade, or rent your personal information. We may share your data only in these circumstances:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Service Providers:</strong> With trusted third parties who assist in operating our services</span>
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Integration Partners:</strong> With platforms you've authorized (Slack, Teams, etc.)</span>
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Legal Requirements:</strong> When required by law or to protect our rights</span>
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0 mt-0.5" />
                    <span><strong>Business Transfers:</strong> In connection with a merger or acquisition</span>
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">7. Your Rights and Choices</h5>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300">
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Access and receive a copy of your personal data
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Correct inaccurate or incomplete information
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Request deletion of your personal data
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Object to or restrict certain processing activities
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Data portability (receive your data in a structured format)
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Opt-out of marketing communications
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">8. Legal Compliance</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>GDPR Compliance:</strong> For European users, we comply with the General Data Protection Regulation, including lawful basis for processing, data minimization, and privacy by design.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  <strong>CCPA Compliance:</strong> For California residents, we comply with the California Consumer Privacy Act, including the right to know, delete, and opt-out of data sales.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  <strong>Other Jurisdictions:</strong> We comply with applicable data protection laws in all jurisdictions where we operate.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">9. Data Retention</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  We retain your personal data only for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Typical retention periods:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Account data: Duration of account plus 30 days
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Conversation logs: 90 days (configurable by customer)
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Analytics data: 2 years in aggregated form
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Legal compliance data: As required by law
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">10. Children's Privacy</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children under 16. If we learn we have collected such information, we will promptly delete it.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">11. Changes to This Policy</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">12. Contact Us</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 text-slate-600 dark:text-slate-300">
                  <p><strong>HeyAgent Privacy Team</strong></p>
                  <p>Email: privacy@heyagent.ai</p>
                  <p>Address: [Your Company Address]</p>
                  <p>Data Protection Officer: dpo@heyagent.ai</p>
                </div>

                <div className="mt-8">
                  <button 
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md" 
                    onClick={() => window.print()}
                  >
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}