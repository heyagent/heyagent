"use client";

import { useState, useEffect, useRef } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import WorkflowCard from "@/components/shared/WorkflowCard";
import { 
  FiGrid,
  FiShoppingCart, 
  FiCreditCard, 
  FiPackage, 
  FiTruck,
  FiTrello,
  FiGithub,
  FiCalendar,
  FiUsers,
  FiBarChart,
  FiMail,
  FiTarget,
  FiTrendingUp,
  FiCpu,
  FiHelpCircle,
  FiLayers,
  FiUser,
  FiShield,
  FiDollarSign,
  FiTag,
  FiSlack,
  FiMessageSquare,
  FiZap,
  FiCloud,
  FiServer,
  FiGlobe,
  FiActivity,
  FiPieChart,
  FiDatabase
} from "react-icons/fi";

const workflows = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: FiGrid,
    subtitle: 'Real-time analytics and monitoring dashboards',
    integrations: [FiBarChart, FiTrendingUp, FiActivity, FiPieChart, FiDatabase]
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    icon: FiShoppingCart,
    subtitle: 'Complete online store management system',
    integrations: [FiShoppingCart, FiCreditCard, FiPackage, FiTruck, FiDollarSign, FiTag]
  },
  {
    id: 'project',
    title: 'Project',
    icon: FiTrello,
    subtitle: 'Collaborative project management tools',
    integrations: [FiTrello, FiGithub, FiCalendar, FiUsers, FiSlack, FiMessageSquare, FiZap]
  },
  {
    id: 'marketing',
    title: 'Marketing',
    icon: FiTarget,
    subtitle: 'Campaign automation and analytics',
    integrations: [FiBarChart, FiMail, FiTarget, FiTrendingUp, FiGlobe]
  },
  {
    id: 'ai',
    title: 'AI',
    icon: FiCpu,
    subtitle: 'AI-powered automation workflows',
    integrations: [FiCpu, FiZap, FiCloud, FiServer, FiDatabase]
  },
  {
    id: 'help-center',
    title: 'Help Center',
    icon: FiHelpCircle,
    subtitle: 'Customer support and knowledge base',
    integrations: [FiHelpCircle, FiMessageSquare, FiMail, FiUsers]
  },
  {
    id: 'apps',
    title: 'Apps',
    icon: FiLayers,
    subtitle: 'Custom application workflows',
    integrations: [FiLayers, FiGrid, FiPackage, FiCloud, FiServer]
  },
  {
    id: 'accounts',
    title: 'Accounts',
    icon: FiUser,
    subtitle: 'User management and authentication',
    integrations: [FiUser, FiUsers, FiShield, FiMail, FiSlack]
  },
  {
    id: 'auth',
    title: 'Auth',
    icon: FiShield,
    subtitle: 'Security and access control',
    integrations: [FiShield, FiUser, FiCloud, FiServer]
  },
  {
    id: 'hr-operations',
    title: 'HR Operations',
    icon: FiUsers,
    subtitle: 'Employee onboarding and HR workflows',
    integrations: [FiUsers, FiCalendar, FiMail, FiTrello, FiSlack]
  },
  {
    id: 'finance',
    title: 'Finance',
    icon: FiDollarSign,
    subtitle: 'Expense approvals and financial workflows',
    integrations: [FiDollarSign, FiCreditCard, FiPieChart, FiTrendingUp, FiDatabase]
  }
];

export default function WorkflowsSection() {
  const [selectedWorkflow, setSelectedWorkflow] = useState('ecommerce');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Get the 4 workflows to display in the grid based on selection
  const getDisplayedWorkflows = () => {
    const selected = workflows.find(w => w.id === selectedWorkflow);
    const others = workflows.filter(w => w.id !== selectedWorkflow);
    return selected ? [selected, ...others.slice(0, 3)] : others.slice(0, 4);
  };

  return (
    <section className="relative py-6 sm:py-8 md:py-12 lg:py-24">
      <div className="container relative mx-auto px-4 sm:px-6 max-w-7xl">
        <SectionHeader 
          title={<><span className="bg-gradient-to-r from-amber-400 to-fuchsia-600 text-transparent bg-clip-text">Automate Any Workflow</span>, Simple or Complex</>}
          description="From HR requests to IT tickets, from expense approvals to customer onboarding - HeyAgent adapts to your unique business processes"
        />
        
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 lg:mt-12">
          {/* Mobile Dropdown */}
          <div className="md:hidden w-full">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg transition-all duration-200 hover:border-amber-400 dark:hover:border-amber-400"
              >
                <div className="flex items-center gap-3">
                  {workflows.find(w => w.id === selectedWorkflow)?.icon && (
                    <div className="text-amber-600 dark:text-amber-400">
                      {(() => {
                        const SelectedIcon = workflows.find(w => w.id === selectedWorkflow)?.icon;
                        return SelectedIcon ? <SelectedIcon className="w-5 h-5" /> : null;
                      })()}
                    </div>
                  )}
                  <span className="font-medium text-gray-900 dark:text-white">
                    {workflows.find(w => w.id === selectedWorkflow)?.title}
                  </span>
                </div>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-2 bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
                  {workflows.map((workflow) => (
                    <button
                      key={workflow.id}
                      onClick={() => {
                        setSelectedWorkflow(workflow.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                        selectedWorkflow === workflow.id
                          ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <workflow.icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{workflow.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop/Tablet Sidebar */}
          <div className="hidden md:block md:w-48 lg:w-64">
            <div className="bg-white dark:bg-slate-900 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
              {workflows.map((workflow) => (
                <button
                  key={workflow.id}
                  onClick={() => setSelectedWorkflow(workflow.id)}
                  className={`w-full flex items-center gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg transition-all duration-200 ${
                    selectedWorkflow === workflow.id
                      ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <workflow.icon className="w-4 lg:w-5 h-4 lg:h-5" />
                  <span className="text-sm font-medium">{workflow.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Grid Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {getDisplayedWorkflows().map((workflow) => (
                <WorkflowCard
                  key={workflow.id}
                  title={workflow.title}
                  subtitle={workflow.subtitle}
                  integrations={workflow.integrations}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}