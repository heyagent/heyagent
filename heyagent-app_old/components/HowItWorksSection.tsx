"use client";

import { FiSearch, FiCpu, FiZap } from "react-icons/fi";

export default function HowItWorksSection() {
  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-24 bg-white dark:bg-slate-900">
      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl md:mt-12 mt-8">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 text-xl sm:text-2xl md:text-3xl md:leading-normal leading-normal font-semibold text-slate-900 dark:text-white">
            So, how does it work?
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Deploy enterprise AI agents in three simple steps to automate workflows and empower your workforce
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
          <div className="relative p-6">
            <FiSearch className="text-[45px] text-amber-400" />
            <h5 className="text-xl font-semibold my-5 text-slate-900 dark:text-white">
              Connect & Configure
            </h5>
            <p className="text-slate-600 dark:text-slate-400">
              Seamlessly integrate HeyAgent with your existing enterprise tools and configure role-based access controls
            </p>
          </div>

          <div className="relative p-6">
            <FiCpu className="text-[45px] text-amber-400" />
            <h5 className="text-xl font-semibold my-5 text-slate-900 dark:text-white">
              Deploy AI Agents
            </h5>
            <p className="text-slate-600 dark:text-slate-400">
              Launch intelligent agents across departments to handle requests, automate tasks, and provide instant support
            </p>
          </div>

          <div className="relative p-6">
            <FiZap className="text-[45px] text-amber-400" />
            <h5 className="text-xl font-semibold my-5 text-slate-900 dark:text-white">
              Automate Workflows
            </h5>
            <p className="text-slate-600 dark:text-slate-400">
              Watch as AI agents execute complex workflows, reducing resolution time by 75% and saving hours of manual work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}