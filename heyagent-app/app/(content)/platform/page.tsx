"use client";

import PlatformHero from "@/components/PlatformHero";
import HowItWorksSection from "@/components/HowItWorksSection";
import IntegrationShowcase from "@/components/IntegrationShowcase";
import WorkflowBuilderSection from "@/components/WorkflowBuilderSection";

export default function Platform() {
  return (
    <main>
      <PlatformHero />
      <HowItWorksSection />
      <IntegrationShowcase />
      <WorkflowBuilderSection />
    </main>
  );
}