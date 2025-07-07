"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface ChangelogTabsProps {
  summary: string;
  improvements: string[];
  fixes: string[];
}

export default function ChangelogTabs({ summary, improvements, fixes }: ChangelogTabsProps) {
  const [openTab, setOpenTab] = useState<string>("summary");

  const tabs = [
    {
      id: "summary",
      label: "Summary",
      content: <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{summary}</p>
    },
    {
      id: "improvements",
      label: "Improvements",
      content: (
        <ul className="space-y-3 sm:space-y-2">
          {improvements.map((improvement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
              <span className="text-gray-600 dark:text-gray-300 leading-relaxed break-words">{improvement}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: "fixes",
      label: "Fixes",
      content: (
        <ul className="space-y-3 sm:space-y-2">
          {fixes.map((fix, index) => (
            <li key={index} className="flex items-start">
              <span className="text-amber-400 mr-2 mt-0.5 flex-shrink-0">🔧</span>
              <span className="text-gray-600 dark:text-gray-300 leading-relaxed break-words">{fix}</span>
            </li>
          ))}
        </ul>
      )
    }
  ];

  const toggleTab = (tabId: string) => {
    setOpenTab(openTab === tabId ? "" : tabId);
  };

  return (
    <div className="space-y-2 sm:space-y-3">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
        >
          <button
            type="button"
            onClick={() => toggleTab(tab.id)}
            className={`${
              openTab === tab.id
                ? "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
                : "bg-white dark:bg-gray-800"
            } flex justify-between items-center p-4 sm:p-5 w-full font-medium text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors min-h-[56px] sm:min-h-[auto]`}
            aria-expanded={openTab === tab.id}
          >
            <span className="text-sm sm:text-base">{tab.label}</span>
            <FiChevronDown
              className={`${
                openTab === tab.id ? "rotate-180" : ""
              } w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-transform duration-300 ml-2`}
            />
          </button>
          <div
            className={`${
              openTab === tab.id ? "block" : "hidden"
            } p-4 sm:p-5 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700`}
          >
            <div className="text-sm sm:text-base">
              {tab.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}