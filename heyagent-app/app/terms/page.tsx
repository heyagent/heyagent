"use client";

import Link from "next/link";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function TermsOfService() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does HeyAgent protect my data?",
      answer: "HeyAgent employs enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, role-based access controls, and regular security audits. We use zero-retention policies with our AI providers and never train our models on your data."
    },
    {
      question: "Can I customize workflows for my organization?",
      answer: "Yes! HeyAgent offers extensive customization options. You can create custom workflows using our no-code builder, integrate with your existing tools, and configure AI responses to match your business processes and brand voice."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Upon cancellation, you have 30 days to export all your data. We provide tools for bulk data export in standard formats. After the 30-day grace period, we securely delete all your data from our systems in accordance with our data retention policy."
    },
    {
      question: "What kind of support is available?",
      answer: "We offer tiered support based on your subscription plan. All plans include email support and comprehensive documentation. Business and Enterprise plans include priority support, dedicated account managers, and 24/7 phone support for critical issues."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-6 sm:pb-8 md:pb-12 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="text-2xl sm:text-3xl md:text-4xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">
                Terms of Service
              </h5>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mt-5">
              Last updated: January 4, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md border border-gray-200 dark:border-gray-800">
                <h5 className="text-xl font-semibold mb-4">Introduction:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  Welcome to HeyAgent. These Terms of Service ("Terms") govern your use of our AI-powered automation platform and services ("Services") provided by HeyAgent, Inc. ("HeyAgent," "we," "us," or "our"). By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access our Services.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">User Agreements:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  HeyAgent provides an <b className="text-amber-600">AI-powered chatbot platform</b> that enables businesses to automate workflows, streamline operations, and boost employee productivity. By creating an account, you represent that you are <b className="text-amber-600">at least 18 years of age</b> and have the legal capacity to enter into these Terms. If you are using our Services on behalf of an organization, you represent that you have the <b className="text-amber-600">authority to bind</b> that organization to these Terms.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  You are responsible for maintaining the <b className="text-amber-600">confidentiality</b> of your account credentials and for all activities that occur under your account. You must immediately notify us of any <b className="text-amber-600">unauthorized use</b> of your account or any other breach of security. We reserve the right to <b className="text-amber-600">suspend or terminate</b> accounts that violate these Terms or engage in harmful activities.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  For enterprise customers, we recognize the distinction between the <b className="text-amber-600">organization</b> (the "Customer") and individual users. The Customer is responsible for ensuring all users comply with these Terms and for any <b className="text-amber-600">actions taken</b> by users under the Customer's account.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">License Grant and Access:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  Subject to your compliance with these Terms, HeyAgent grants you a <b className="text-amber-600">non-exclusive</b>, non-transferable, revocable license to access and use our Services for your internal business purposes. This license is limited to the number of users and usage levels specified in your <b className="text-amber-600">subscription plan</b>.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  You may not sublicense, resell, or redistribute our Services without our express written consent. The license granted herein does not include any right to <b className="text-amber-600">modify</b>, reverse engineer, or create derivative works based on our Services.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Restrictions:</h5>
                <p className="text-slate-600 dark:text-slate-300">You are specifically restricted from all of the following:</p>
                <ul className="list-none text-slate-600 dark:text-slate-300 mt-3">
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Using our Services for any illegal or unauthorized purpose
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Attempting to probe, scan, or test the vulnerability of our systems
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Interfering with or disrupting our Services or servers
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Using our Services to transmit viruses, malware, or harmful code
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Circumventing any usage limits or security measures
                  </li>
                  <li className="flex mt-2">
                    <FiArrowRight className="text-amber-400 text-lg align-middle me-2 flex-shrink-0" />
                    Using our AI to generate harmful, misleading, or illegal content
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">AI-Specific Terms and Disclaimers:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  You acknowledge that HeyAgent uses <b className="text-amber-600">artificial intelligence</b> and machine learning technologies that may produce results that are not always accurate, complete, or appropriate for your specific use case. While we strive to provide high-quality AI services, we <b className="text-amber-600">cannot guarantee</b> the accuracy, reliability, or suitability of AI-generated content or actions.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  Our AI may occasionally produce <b className="text-amber-600">unexpected results</b> or "hallucinations" - outputs that may seem plausible but are factually incorrect or nonsensical. You are responsible for <b className="text-amber-600">reviewing and verifying</b> all AI-generated content and actions before relying on them for business decisions.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  You agree not to use our Services for any <b className="text-amber-600">high-risk activities</b> where AI errors could result in death, personal injury, or significant property or environmental damage. This includes, but is not limited to, medical diagnosis, legal advice, or critical infrastructure control.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Data Ownership and Privacy:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  You retain all rights, title, and interest in and to your data ("Customer Data"). HeyAgent does not claim ownership of Customer Data. You grant us a limited license to use Customer Data solely to provide and improve our Services in accordance with these Terms and our Privacy Policy.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  We implement industry-standard security measures to protect Customer Data. However, you acknowledge that no method of electronic storage is 100% secure. Our detailed data handling practices are described in our <Link href="/privacy" className="text-amber-400 hover:text-amber-500">Privacy Policy</Link>.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Payment Terms:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  Fees for our Services are based on your selected subscription plan and are billed in advance on a monthly or annual basis. All fees are <b className="text-amber-600">non-refundable</b> except as required by law or as explicitly stated in these Terms.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  We reserve the right to modify our pricing with <b className="text-amber-600">30 days' notice</b>. Price changes will take effect at the start of your next billing cycle. If you disagree with price changes, you may cancel your subscription before the new pricing takes effect.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Service Level Agreement:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  HeyAgent commits to maintaining <b className="text-amber-600">99.9% uptime</b> for our Services, excluding scheduled maintenance. We will provide advance notice of planned maintenance when possible. In the event of unplanned downtime exceeding our SLA commitments, eligible customers may receive service credits as specified in their subscription agreement.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Intellectual Property:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  HeyAgent and its licensors retain all rights, title, and interest in and to our Services, including all software, algorithms, user interfaces, and documentation. These Terms do not grant you any rights to our trademarks, service marks, or other brand features.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  Any feedback, suggestions, or ideas you provide about our Services may be used by HeyAgent without any obligation to compensate you or maintain confidentiality.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Limitation of Liability:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, HEYAGENT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  IN NO EVENT SHALL HEYAGENT'S AGGREGATE LIABILITY EXCEED THE AMOUNTS ACTUALLY PAID BY YOU TO HEYAGENT IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">Termination:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  Either party may terminate these Terms at any time with <b className="text-amber-600">30 days' written notice</b>. We may suspend or terminate your access immediately if you violate these Terms or engage in conduct that we believe may harm HeyAgent or other users.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  Upon termination, you will have <b className="text-amber-600">30 days</b> to export your Customer Data. After this period, we may delete your data in accordance with our data retention policies. Sections of these Terms that by their nature should survive termination will continue to apply.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">General Provisions:</h5>
                <p className="text-slate-600 dark:text-slate-300">
                  These Terms are governed by the laws of Delaware, United States, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved through <b className="text-amber-600">binding arbitration</b> in accordance with the rules of the American Arbitration Association.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mt-3">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in effect. These Terms constitute the entire agreement between you and HeyAgent regarding our Services and supersede any prior agreements.
                </p>

                <h5 className="text-xl font-semibold mt-8">Users Questions & Answers:</h5>
                <div className="mt-6">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
                    >
                      <h2 className="text-base font-semibold">
                        <button
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          className={`${
                            openIndex === index 
                              ? 'bg-gray-50 dark:bg-slate-800 text-amber-400' 
                              : ''
                          } flex justify-between items-center p-5 w-full font-medium text-start hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors`}
                          aria-expanded={openIndex === index}
                        >
                          <span>{faq.question}</span>
                          <FiChevronDown 
                            className={`${
                              openIndex === index ? 'rotate-180' : ''
                            } w-4 h-4 shrink-0 transition-transform duration-300`}
                          />
                        </button>
                      </h2>
                      <div 
                        className={`${openIndex === index ? '' : 'hidden'}`}
                      >
                        <div className="p-5">
                          <p className="text-slate-600 dark:text-slate-300">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link 
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md" 
                    href="/"
                  >
                    Accept
                  </Link>
                  <Link 
                    className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-amber-400 text-amber-400 hover:text-white rounded-md" 
                    href="/"
                  >
                    Decline
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}