"use client";

import { useState } from "react";

interface Tab {
  id: string;
  title: string;
  description: string;
}

export default function WorkflowBuilderSection() {
  const [activeTab, setActiveTab] = useState("drag-drop");

  const tabs: Tab[] = [
    {
      id: "drag-drop",
      title: "Drag and drop",
      description: "Build powerful workflows visually with our intuitive drag-and-drop interface.",
    },
    {
      id: "ai-optimize",
      title: "AI Optimization",
      description: "Let AI suggest improvements and optimize your workflows for maximum efficiency.",
    },
    {
      id: "deploy-monitor",
      title: "Deploy & Monitor",
      description: "Deploy workflows instantly and monitor performance with real-time analytics.",
    },
  ];

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-24 bg-white dark:bg-slate-900">
      <div className="container relative md:mt-12 mt-8 mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="lg:flex justify-center">
          <div className="lg:w-4/5">
            {/* Tab Navigation */}
            <ul className="md:flex inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  role="presentation"
                  className="inline-block md:w-1/3 w-full p-2"
                >
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 text-start rounded-md w-full duration-500 ${
                      activeTab === tab.id
                        ? "text-white bg-amber-400"
                        : "hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
                    }`}
                  >
                    <h5 className="text-base font-semibold">{tab.title}</h5>
                    <p className="text-sm mt-1">{tab.description}</p>
                  </button>
                </li>
              ))}
            </ul>

            {/* Tab Content */}
            <div className="mt-6">
              <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-t-lg h-[500px] flex items-center justify-center">
                  <span className="text-slate-600 dark:text-slate-500">
                    {activeTab === "drag-drop" && "Workflow Builder Interface"}
                    {activeTab === "ai-optimize" && "AI Optimization Dashboard"}
                    {activeTab === "deploy-monitor" && "Deployment & Monitoring Dashboard"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}