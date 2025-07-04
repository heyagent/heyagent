"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does it generate responses?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    },
    {
      question: "Is AI copywriting more cost-effective than hiring human writers?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    },
    {
      question: "Can AI copywriting be customized to my brand and audience?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    },
    {
      question: "What kind of support is available for AI copywriting tools?",
      answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="container relative mx-auto px-6 max-w-7xl">
      <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center md:gap-[30px]">
        <div className="lg:col-span-4 md:mb-0 mb-8">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Have a question?
          </h3>
          <p className="text-slate-400 dark:text-white/60 max-w-xl mx-auto mb-6">
            Artificial intelligence makes it fast easy to create content for your blog, social media, website, and more!
          </p>
          <a 
            className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 text-slate-900 dark:text-white hover:text-white rounded-md" 
            href="/contact"
          >
            Contact Us
          </a>
        </div>

        <div className="lg:col-span-8 md:mt-0 mt-8">
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
                >
                  <span>{faq.question}</span>
                  <FiChevronDown 
                    className={`${
                      openIndex === index ? 'rotate-180' : ''
                    } w-4 h-4 shrink-0 transition-transform duration-300`}
                  />
                </button>
              </h2>
              <div className={`${openIndex === index ? '' : 'hidden'}`}>
                <div className="p-5">
                  <p className="text-slate-400 dark:text-gray-400">
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