"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does HeyAgent integrate with our existing tools?",
      answer: "HeyAgent seamlessly integrates with popular platforms like Slack, Microsoft Teams, ServiceNow, Jira, and Salesforce through secure APIs. Setup takes just minutes, and our team provides hands-on support for enterprise deployments."
    },
    {
      question: "Is employee data secure when using HeyAgent?",
      answer: "Absolutely. HeyAgent uses enterprise-grade encryption, SOC 2 compliance, and role-based access controls. All data is processed within your security perimeter, and we never store sensitive information. We also support SSO and comply with GDPR requirements."
    },
    {
      question: "Can we create custom workflows for our specific processes?",
      answer: "Yes! While we offer a library of pre-built workflows for common tasks, you can easily create custom workflows using our no-code builder. Define your steps, connect your tools, and deploy to your team - all without writing a single line of code."
    },
    {
      question: "What kind of tasks can HeyAgent automate?",
      answer: "HeyAgent excels at repetitive tasks like IT ticket creation, employee onboarding, PTO requests, expense approvals, password resets, report generation, and data entry. Essentially, any multi-step process that follows a pattern can be automated."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="grid lg:grid-cols-12 grid-cols-1 items-start gap-6 lg:gap-[30px]">
        <div className="lg:col-span-4 mb-8 lg:mb-0 text-center lg:text-left">
          <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl md:leading-normal leading-normal font-semibold">
            Have a question?
          </h3>
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 mb-6 text-sm sm:text-base">
            Got questions about automating your employee workflows? We've got answers.
          </p>
          <a 
            className="py-2.5 px-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-sm sm:text-base text-center bg-transparent hover:bg-amber-400 border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 text-slate-900 dark:text-white hover:text-white rounded-md" 
            href="/contact"
          >
            Contact Us
          </a>
        </div>

        <div className="lg:col-span-8 md:mt-0">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="relative shadow dark:shadow-gray-800 rounded-lg overflow-hidden mt-3 sm:mt-4"
            >
              <h2 className="text-base font-semibold">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`${
                    openIndex === index 
                      ? 'bg-gray-50 dark:bg-slate-800 text-amber-400' 
                      : ''
                  } flex justify-between items-center p-4 sm:p-5 w-full font-medium text-start hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-sm sm:text-base pr-2">{faq.question}</span>
                  <FiChevronDown 
                    className={`${
                      openIndex === index ? 'rotate-180' : ''
                    } w-5 h-5 shrink-0 transition-transform duration-300`}
                  />
                </button>
              </h2>
              <div 
                id={`faq-answer-${index}`}
                className={`${openIndex === index ? '' : 'hidden'}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="p-4 sm:p-5 pt-0 sm:pt-0">
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}