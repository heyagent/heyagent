"use client";

import PlatformHero from "@/components/PlatformHero";
import HowItWorksSection from "@/components/HowItWorksSection";
import IntegrationShowcase from "@/components/IntegrationShowcase";

export default function Platform() {
  return (
    <main>
      <PlatformHero />
      <HowItWorksSection />
      <IntegrationShowcase />
    </main>
  );
}