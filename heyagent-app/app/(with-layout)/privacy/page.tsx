"use client";

import Link from "next/link";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalSection from "@/components/legal/LegalSection";
import LegalListItem from "@/components/legal/LegalListItem";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="January 4, 2025">
                <LegalSection title="1. Introduction">
                <p className="text-slate-600 dark:text-slate-300">
                  Welcome to HeyAgent ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered automation services.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  HeyAgent provides AI chatbot services that help businesses automate workflows and boost employee productivity. By using our services, you agree to the collection and use of information in accordance with this policy.
                </p>
                </LegalSection>

                <LegalSection title="2. Information We Collect" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  We collect information that you provide directly to us and information automatically collected through your use of our services:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300">
                  <LegalListItem>
                    <strong>Account Information:</strong> Name, email address, company name, job title, and authentication credentials
                  </LegalListItem>
                  <LegalListItem>
                    <strong>Conversation Data:</strong> Messages and interactions with HeyAgent through Slack, Teams, or other integrated platforms
                  </LegalListItem>
                  <LegalListItem>
                    <strong>Workflow Data:</strong> Information about automated tasks, approvals, and business processes
                  </LegalListItem>
                  <LegalListItem>
                    <strong>Usage Analytics:</strong> Service usage patterns, feature adoption, and performance metrics
                  </LegalListItem>
                  <LegalListItem>
                    <strong>Integration Data:</strong> Information from connected third-party services (ServiceNow, Jira, Salesforce, etc.)
                  </LegalListItem>
                </ul>
                </LegalSection>

                <LegalSection title="3. How We Use Your Information" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300">
                  <LegalListItem>
                    Providing and maintaining our AI automation services
                  </LegalListItem>
                  <LegalListItem>
                    Processing and executing automated workflows
                  </LegalListItem>
                  <LegalListItem>
                    Improving our AI models and service quality
                  </LegalListItem>
                  <LegalListItem>
                    Providing customer support and responding to inquiries
                  </LegalListItem>
                  <LegalListItem>
                    Sending service updates and important notifications
                  </LegalListItem>
                  <LegalListItem>
                    Ensuring compliance with legal obligations
                  </LegalListItem>
                </ul>
                </LegalSection>

                <LegalSection title="4. AI-Specific Data Practices" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>Zero Data Retention:</strong> We use LLM providers with zero data retention policies. Your conversation data is processed in memory only and never stored by our AI providers.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  <strong>No Training on Customer Data:</strong> We do not use your data to train our base AI models. Any improvements to our services are made using aggregated, anonymized insights.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  <strong>Data Sanitization:</strong> We automatically remove personally identifiable information from any data used for analytics or service improvement.
                </p>
                </LegalSection>

                <LegalSection title="5. Data Security" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300">
                  We implement industry-standard security measures to protect your data:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                  <LegalListItem>
                    End-to-end encryption for data in transit and at rest
                  </LegalListItem>
                  <LegalListItem>
                    SOC 2 Type II compliance
                  </LegalListItem>
                  <LegalListItem>
                    Regular security audits and penetration testing
                  </LegalListItem>
                  <LegalListItem>
                    Role-based access controls and authentication
                  </LegalListItem>
                  <LegalListItem>
                    Continuous monitoring and threat detection
                  </LegalListItem>
                </ul>
                </LegalSection>

                <LegalSection title="6. Data Sharing and Third Parties" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300">
                  We do not sell, trade, or rent your personal information. We may share your data only in these circumstances:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                  <LegalListItem>
                    <strong>Service Providers:</strong> With trusted third parties who assist in operating our services
                  </LegalListItem>
                  <LegalListItem>
                    <strong>Integration Partners:</strong> With platforms you've authorized (Slack, Teams, etc.)
                  </LegalListItem>
                  <LegalListItem>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights
                  </LegalListItem>
                  <LegalListItem>
                    <strong>Business Transfers:</strong> In connection with a merger or acquisition
                  </LegalListItem>
                </ul>
                </LegalSection>

                <LegalSection title="7. Your Rights and Choices" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300">
                  <LegalListItem>
                    Access and receive a copy of your personal data
                  </LegalListItem>
                  <LegalListItem>
                    Correct inaccurate or incomplete information
                  </LegalListItem>
                  <LegalListItem>
                    Request deletion of your personal data
                  </LegalListItem>
                  <LegalListItem>
                    Object to or restrict certain processing activities
                  </LegalListItem>
                  <LegalListItem>
                    Data portability (receive your data in a structured format)
                  </LegalListItem>
                  <LegalListItem>
                    Opt-out of marketing communications
                  </LegalListItem>
                </ul>
                </LegalSection>

                <LegalSection title="8. Legal Compliance" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300">
                  <strong>GDPR Compliance:</strong> For European users, we comply with the General Data Protection Regulation, including lawful basis for processing, data minimization, and privacy by design.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  <strong>CCPA Compliance:</strong> For California residents, we comply with the California Consumer Privacy Act, including the right to know, delete, and opt-out of data sales.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-4">
                  <strong>Other Jurisdictions:</strong> We comply with applicable data protection laws in all jurisdictions where we operate.
                </p>
                </LegalSection>

                <LegalSection title="9. Data Retention" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300">
                  We retain your personal data only for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Typical retention periods:
                </p>
                <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                  <LegalListItem>
                    Account data: Duration of account plus 30 days
                  </LegalListItem>
                  <LegalListItem>
                    Conversation logs: 90 days (configurable by customer)
                  </LegalListItem>
                  <LegalListItem>
                    Analytics data: 2 years in aggregated form
                  </LegalListItem>
                  <LegalListItem>
                    Legal compliance data: As required by law
                  </LegalListItem>
                </ul>
                </LegalSection>

                <LegalSection title="10. Children's Privacy" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300">
                  Our services are not intended for individuals under 16 years of age. We do not knowingly collect personal information from children under 16. If we learn we have collected such information, we will promptly delete it.
                </p>
                </LegalSection>

                <LegalSection title="11. Changes to This Policy" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
                </LegalSection>

                <LegalSection title="12. Contact Us" className="mt-8">
                <p className="text-slate-600 dark:text-slate-300">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 text-slate-600 dark:text-slate-300">
                  <p><strong>HeyAgent Privacy Team</strong></p>
                  <p>Email: privacy@heyagent.ai</p>
                  <p>Address: [Your Company Address]</p>
                  <p>Data Protection Officer: dpo@heyagent.ai</p>
                </div>
                </LegalSection>

                <div className="mt-8">
                  <button 
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md" 
                    onClick={() => window.print()}
                  >
                    Print
                  </button>
                </div>
    </LegalPageLayout>
  );
}