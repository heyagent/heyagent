"use client";

import PlatformHero from "@/components/PlatformHero";
import HowItWorksSection from "@/components/HowItWorksSection";
import IntegrationShowcase from "@/components/IntegrationShowcase";
import WorkflowBuilderSection from "@/components/WorkflowBuilderSection";
import FeatureSection from "@/components/shared/FeatureSection";

export default function Platform() {
  return (
    <main>
      <PlatformHero />
      <HowItWorksSection />
      <IntegrationShowcase />
      <WorkflowBuilderSection />
      
      {/* Intelligent Workflow Orchestration */}
      <FeatureSection
        title={<>Intelligent Workflow <br className="hidden sm:block" /> Orchestration</>}
        description="Orchestrate complex multi-step workflows with conditional logic, parallel processing, and intelligent routing based on real-time data."
        features={[
          "Smart routing based on workload and availability",
          "Parallel processing for faster execution",
          "Conditional logic and decision trees"
        ]}
        imagePlaceholder={
          <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 pe-6 pt-6 lg:ms-8">
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-tr-lg h-80 flex items-center justify-center">
              <span className="text-slate-600 dark:text-slate-500">Workflow Orchestration Dashboard</span>
            </div>
          </div>
        }
      />
      
      {/* Enterprise Integration Hub */}
      <FeatureSection
        title={<>Enterprise Integration <br className="hidden sm:block" /> Hub</>}
        description="Connect all your enterprise systems through our unified integration platform with pre-built connectors and custom API support."
        features={[
          "500+ pre-built enterprise connectors",
          "Custom API integration framework",
          "Real-time data synchronization"
        ]}
        imagePosition="left"
        imagePlaceholder={
          <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 ps-6 pt-6 lg:me-8">
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-tl-lg h-80 flex items-center justify-center">
              <span className="text-slate-600 dark:text-slate-500">Integration Hub Interface</span>
            </div>
          </div>
        }
      />
      
      {/* Advanced Agent Analytics */}
      <FeatureSection
        title={<>Advanced Agent <br className="hidden sm:block" /> Analytics</>}
        description="Deep dive into agent performance with advanced analytics, custom dashboards, and predictive insights powered by machine learning."
        features={[
          "Custom dashboard builder",
          "Predictive performance analytics",
          "Automated insight generation"
        ]}
        imagePlaceholder={
          <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6 lg:ms-8">
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-t-lg h-80 flex items-center justify-center">
              <span className="text-slate-600 dark:text-slate-500">Advanced Analytics Platform</span>
            </div>
          </div>
        }
      />
    </main>
  );
}