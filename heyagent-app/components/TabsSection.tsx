"use client";

import { useState } from "react";

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Drag and drop",
      description: "Build powerful workflows by simply dragging and dropping components into place."
    },
    {
      title: "Improve your Talent",
      description: "Enhance your team's capabilities with AI-powered automation and intelligent suggestions."
    },
    {
      title: "Go for Live",
      description: "Deploy your automation workflows instantly and see real-time results in production."
    }
  ];

  return (
    <>
      <ul className="md:flex inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
        {tabs.map((tab, index) => (
          <li key={index} role="presentation" className="inline-block md:w-1/3 w-full p-2">
            <button
              onClick={() => setActiveTab(index)}
              className={`${
                activeTab === index
                  ? "text-white bg-amber-400"
                  : "hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"
              } px-5 py-3 text-start rounded-md w-full duration-500`}
            >
              <h5 className="text-base font-semibold">{tab.title}</h5>
              <p className="text-sm mt-1">{tab.description}</p>
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-12 pt-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-lg h-96 flex items-center justify-center">
              <span className="text-slate-500">
                {activeTab === 0 && "Drag & Drop Interface"}
                {activeTab === 1 && "Talent Enhancement Dashboard"}
                {activeTab === 2 && "Live Deployment Console"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}