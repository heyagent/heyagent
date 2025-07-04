"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TypewriterEffect from "@/components/TypewriterEffect";
import PricingSection from "@/components/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <main>
      <section className="relative overflow-hidden pt-48 pb-16 after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-[56rem] after:h-[56rem] after:bg-gradient-to-tl after:to-amber-400/30 after:from-fuchsia-600/30 dark:after:to-amber-400/50 dark:after:from-fuchsia-600/50 after:blur-[200px] after:rounded-full after:-z-1">
        <div className="container relative z-2 mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 text-center">
            <div>
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5">
                The AI Assistant <br /> That Gets
                <TypewriterEffect 
                  words={["Tasks", "Workflows", "Approvals", "Requests", "Operations"]}
                  className="typewrite bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text ms-4"
                />
                Done
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-lg max-w-xl mx-auto">
                Empower your employees with an AI chatbot that automates workflows, streamlines operations, and boosts productivity across your entire organization
              </p>
              <div className="mt-6">
                <a 
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md" 
                  href="/"
                >
                  Try For Free
                </a>
                <p className="text-slate-600 dark:text-slate-300 text-sm mt-3">
                  No credit card required. Free 14-days trial
                </p>
              </div>
            </div>
            <div className="relative mt-8 z-3">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="relative p-[2px] bg-gradient-to-br from-amber-400 to-fuchsia-600 rounded-xl">
                  <div className="aspect-[16/10] bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-lg shadow-2xl flex items-center justify-center">
                    <span className="text-slate-600 dark:text-slate-500">Hero Image Placeholder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative after:content-[''] after:absolute lg:after:-bottom-40 after:-bottom-28 after:end-0 after:start-0 after:mx-auto xl:after:w-[56rem] lg:after:w-[48rem] md:after:w-[32rem] after:w-[22rem] xl:after:h-[56rem] lg:after:h-[48rem] md:after:h-[32rem] after:h-[22rem] after:border-2 after:border-dashed after:border-slate-700/10 dark:after:border-slate-600/30 after:rounded-full after:-z-1 before:content-[''] before:absolute lg:before:-bottom-72 before:-bottom-56 before:end-0 before:start-0 before:mx-auto xl:before:w-[72rem] lg:before:w-[64rem] md:before:w-[48rem] before:w-[24rem] xl:before:h-[72rem] lg:before:h-[64rem] md:before:h-[48rem] before:h-[24rem] before:border-2 before:border-dashed before:border-slate-700/10 dark:before:border-slate-600/30 before:rounded-full before:-z-1"></div>
      </section>

      {/* Video Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative md:mt-12 mt-8 mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-slate-800">
              <div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800 z-1">
                <div className="relative">
                  {/* Video placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-lg"></div>
                </div>
                
                {/* Play button overlay */}
                <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                  <button className="lg:h-16 h-14 lg:w-16 w-14 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-400 text-amber-400 hover:text-white duration-500 ease-in-out mx-auto">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Integration platforms */}
              <div className="mt-6 flex flex-wrap">
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  Slack
                </span>
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  Microsoft Teams
                </span>
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  ServiceNow
                </span>
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  Jira
                </span>
                <span className="py-[6px] px-2 inline-flex items-center tracking-wider align-middle duration-500 text-sm text-center rounded bg-amber-400/5 hover:bg-amber-400 border border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white font-semibold m-0.5">
                  Salesforce
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Transform employee productivity with <br /> <span className="bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">intelligent automation</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-xl">
                "HeyAgent reduced our ticket resolution time by 75% and saved our team 40 hours per week. Employees love how easy it is to get things done through a simple chat."
              </p>
              
              <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Instant task execution through conversational AI
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Pre-built workflows for common business processes
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Custom automation tailored to your needs
                </li>
              </ul>
              
              <div className="mt-4">
                <Link href="/" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                  Find Out More 
                  <svg className="w-5 h-5 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              How <span className="bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">HeyAgent</span> works
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              Three simple steps to transform your employee operations with AI-powered automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
            <div className="relative p-6 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800 border border-gray-50 dark:border-gray-600">
              <div className="w-[45px] h-[45px] bg-gradient-to-tl to-amber-400 from-fuchsia-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h5 className="text-xl font-semibold my-5">Connect & Integrate</h5>
              <p className="text-slate-600 dark:text-slate-300">
                Connect HeyAgent to your existing tools and systems like Slack, Teams, ServiceNow, and more in minutes.
              </p>
            </div>

            <div className="relative p-6 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800 border border-gray-50 dark:border-gray-600">
              <div className="w-[45px] h-[45px] bg-gradient-to-tl to-amber-400 from-fuchsia-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h5 className="text-xl font-semibold my-5">Choose Workflows</h5>
              <p className="text-slate-600 dark:text-slate-300">
                Select from our library of pre-built workflows or create custom ones tailored to your business processes.
              </p>
            </div>

            <div className="relative p-6 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800 border border-gray-50 dark:border-gray-600">
              <div className="w-[45px] h-[45px] bg-gradient-to-tl to-amber-400 from-fuchsia-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h5 className="text-xl font-semibold my-5">Automate Tasks</h5>
              <p className="text-slate-600 dark:text-slate-300">
                Employees chat with HeyAgent to execute tasks instantly - from IT requests to HR queries and approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Writing Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="relative order-1 md:order-2">
              <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 pe-6 pt-6 lg:ms-8">
                {/* Placeholder for workflow builder interface */}
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-tr-lg h-80 flex items-center justify-center">
                  <span className="text-slate-600 dark:text-slate-500">Workflow Builder Interface</span>
                </div>
              </div>
            </div>
            
            <div className="order-2 md:order-1">
              <h4 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Build Custom Workflows <br /> Without Code
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                Create powerful automation workflows with our drag-and-drop builder. No coding required - just connect your tools and define the steps.
              </p>
              
              <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Instant task execution through conversational AI
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Pre-built workflows for common business processes
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Custom automation tailored to your needs
                </li>
              </ul>
              
              <div className="mt-4">
                <Link href="/" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                  Find Out More 
                  <svg className="w-5 h-5 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 ps-6 pt-6 lg:me-8">
              {/* AI Agent deployment interface */}
              <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-tl-lg h-80 flex items-center justify-center">
                <span className="text-slate-600 dark:text-slate-500">Agent Deployment Interface</span>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Deploy AI Agents Across <br /> Your Organization
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-xl">
                Roll out HeyAgent to teams company-wide with enterprise-grade security, role-based access controls, and seamless SSO integration.
              </p>
              
              <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Deploy to unlimited employees with one setup
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Enterprise-grade security and compliance
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Role-based permissions and access controls
                </li>
              </ul>
              
              <div className="mt-4">
                <Link href="/" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                  Find Out More 
                  <svg className="w-5 h-5 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard Section Copy */}
      <section className="relative md:py-24 py-16">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
            <div className="relative order-1 md:order-2">
              <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 pe-6 pt-6 lg:ms-8">
                {/* Real-time analytics interface */}
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-tr-lg h-80 flex items-center justify-center">
                  <span className="text-slate-600 dark:text-slate-500">Real-Time Analytics Dashboard</span>
                </div>
              </div>
            </div>
            
            <div className="order-2 md:order-1">
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Real-Time Analytics & <br /> Performance Insights
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-xl">
                Monitor agent performance, track ROI, and gain insights into automation efficiency. See exactly how much time and money HeyAgent saves your organization.
              </p>
              
              <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Track time saved and tasks automated
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Measure ROI and efficiency gains
                </li>
                <li className="mb-2 flex items-center">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400 h-5 w-5 me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Export reports for stakeholders
                </li>
              </ul>
              
              <div className="mt-4">
                <Link href="/" className="hover:text-amber-400 font-medium duration-500 inline-flex items-center">
                  Find Out More 
                  <svg className="w-5 h-5 ms-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <LogoCarousel />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative md:py-24 py-16">
        <div className="container relative mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 pb-12 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              You don't have to choose between cost, time and quality
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              Artificial intelligence makes it fast and easy to automate your workflows, integrate with your tools, and scale your operations!
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center mb-12">
            <span className={`text-sm font-medium mr-3 ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-600 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ml-3 ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'}`}>
              Annual
              <span className="ml-1 inline-block px-2 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full">
                Save 20%
              </span>
            </span>
          </div>

          <PricingSection isAnnual={isAnnual} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative md:py-6 py-4">
        <FAQSection />
      </section>

      {/* Blog Section */}
      <section className="relative md:py-16 py-12">
        <BlogSection />
      </section>
    </main>
  );
}