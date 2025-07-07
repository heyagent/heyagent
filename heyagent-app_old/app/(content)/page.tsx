"use client";

import Image from "next/image";
import { useState } from "react";
import TypewriterEffect from "@/components/TypewriterEffect";
import PricingSection from "@/components/PricingSection";
import LogoCarousel from "@/components/LogoCarousel";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import WorkflowsSection from "@/components/WorkflowsSection";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureCard from "@/components/shared/FeatureCard";
import FeatureListItem from "@/components/shared/FeatureListItem";
import IntegrationTag from "@/components/shared/IntegrationTag";
import LinkButton from "@/components/shared/LinkButton";
import VideoPlayer from "@/components/shared/VideoPlayer";
import GradientText from "@/components/shared/GradientText";
import BillingToggle from "@/components/shared/BillingToggle";
import FeatureSection from "@/components/shared/FeatureSection";

export default function Home() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <main>
      <section className="relative overflow-hidden pt-24 sm:pt-32 md:pt-40 lg:pt-48 pb-8 sm:pb-12 md:pb-16 after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-[56rem] after:h-[56rem] after:bg-gradient-to-tl after:to-amber-400/30 after:from-fuchsia-600/30 dark:after:to-amber-400/50 dark:after:from-fuchsia-600/50 after:blur-[200px] after:rounded-full after:-z-1">
        <div className="container relative z-2 mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 text-center">
            <div>
              <h4 className="font-bold lg:leading-normal leading-normal text-3xl sm:text-4xl lg:text-6xl mb-5">
                {/* Mobile: Static text */}
                <span className="sm:hidden">
                  The AI Assistant <br /> That Gets <GradientText>Things</GradientText> Done
                </span>
                {/* Desktop: Typewriter effect */}
                <span className="hidden sm:block">
                  The AI Assistant <br /> That Gets
                  <TypewriterEffect 
                    words={["Tasks", "Workflows", "Approvals", "Requests", "Operations"]}
                    className="typewrite bg-gradient-to-br from-amber-400 to-fuchsia-600 text-transparent bg-clip-text ms-2 sm:ms-4"
                  />
                  Done
                </span>
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto px-4 sm:px-0">
                Empower your employees with an AI chatbot that automates workflows, streamlines operations, and boosts productivity across your entire organization
              </p>
              <div className="mt-6">
                <PrimaryButton href="/">
                  Try For Free
                </PrimaryButton>
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
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
        <div className="container relative mt-4 sm:mt-6 md:mt-8 lg:mt-12 mx-auto px-4 sm:px-6 max-w-7xl">
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
                <IntegrationTag>Slack</IntegrationTag>
                <IntegrationTag>Microsoft Teams</IntegrationTag>
                <IntegrationTag>ServiceNow</IntegrationTag>
                <IntegrationTag>Jira</IntegrationTag>
                <IntegrationTag>Salesforce</IntegrationTag>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
                Transform employee productivity with <br /> <GradientText>intelligent automation</GradientText>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-xl">
                "HeyAgent reduced our ticket resolution time by 75% and saved our team 40 hours per week. Employees love how easy it is to get things done through a simple chat."
              </p>
              
              <ul className="list-none text-slate-600 dark:text-slate-300 mt-4">
                <FeatureListItem>Instant task execution through conversational AI</FeatureListItem>
                <FeatureListItem>Pre-built workflows for common business processes</FeatureListItem>
                <FeatureListItem>Custom automation tailored to your needs</FeatureListItem>
              </ul>
              
              <div className="mt-4">
                <LinkButton href="/">Find Out More</LinkButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <SectionHeader 
            title={<>How <GradientText>HeyAgent</GradientText> works</>}
            description="Three simple steps to transform your employee operations with AI-powered automation"
          />

          <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
            <FeatureCard 
              number={1}
              title="Connect & Integrate"
              description="Connect HeyAgent to your existing tools and systems like Slack, Teams, ServiceNow, and more in minutes."
            />

            <FeatureCard 
              number={2}
              title="Choose Workflows"
              description="Select from our library of pre-built workflows or create custom ones tailored to your business processes."
            />

            <FeatureCard 
              number={3}
              title="Automate Tasks"
              description="Employees chat with HeyAgent to execute tasks instantly - from IT requests to HR queries and approvals."
            />
          </div>
        </div>
      </section>

      {/* Content Writing Section */}
      <FeatureSection
        title={<>Build Custom Workflows <br className="hidden sm:block" /> Without Code</>}
        description="Create powerful automation workflows with our drag-and-drop builder. No coding required - just connect your tools and define the steps."
        features={[
          "Instant task execution through conversational AI",
          "Pre-built workflows for common business processes",
          "Custom automation tailored to your needs"
        ]}
        imagePlaceholder={
          <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 pe-6 pt-6 lg:ms-8">
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-tr-lg h-80 flex items-center justify-center">
              <span className="text-slate-600 dark:text-slate-500">Workflow Builder Interface</span>
            </div>
          </div>
        }
      />

      {/* Analytics Dashboard Section */}
      <FeatureSection
        title={<>Deploy AI Agents Across <br className="hidden sm:block" /> Your Organization</>}
        description="Roll out HeyAgent to teams company-wide with enterprise-grade security, role-based access controls, and seamless SSO integration."
        features={[
          "Deploy to unlimited employees with one setup",
          "Enterprise-grade security and compliance",
          "Role-based permissions and access controls"
        ]}
        imagePosition="left"
        imagePlaceholder={
          <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 ps-6 pt-6 lg:me-8">
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-tl-lg h-80 flex items-center justify-center">
              <span className="text-slate-600 dark:text-slate-500">Agent Deployment Interface</span>
            </div>
          </div>
        }
      />

      {/* Analytics Dashboard Section Copy */}
      <FeatureSection
        title={<>Real-Time Analytics & <br className="hidden sm:block" /> Performance Insights</>}
        description="Monitor agent performance, track ROI, and gain insights into automation efficiency. See exactly how much time and money HeyAgent saves your organization."
        features={[
          "Track time saved and tasks automated",
          "Measure ROI and efficiency gains",
          "Export reports for stakeholders"
        ]}
        imagePlaceholder={
          <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6 lg:ms-8">
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-t-lg h-80 flex items-center justify-center">
              <span className="text-slate-600 dark:text-slate-500">Real-Time Analytics Dashboard</span>
            </div>
          </div>
        }
      />

      {/* Workflows Section */}
      <WorkflowsSection />

      {/* Logo Carousel Section */}
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <LogoCarousel />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
        <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
          <SectionHeader 
            title="You don't have to choose between cost, time and quality"
            description="Artificial intelligence makes it fast and easy to automate your workflows, integrate with your tools, and scale your operations!"
            className="pb-12"
          />

          {/* Billing Toggle */}
          <BillingToggle isAnnual={isAnnual} onChange={setIsAnnual} />

          <PricingSection isAnnual={isAnnual} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
        <FAQSection />
      </section>

      {/* Blog Section */}
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
        <BlogSection />
      </section>
    </main>
  );
}