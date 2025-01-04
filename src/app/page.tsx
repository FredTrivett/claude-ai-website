"use client"

import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ClaudeModelFamilySection from "@/components/ClaudeModelFamilySection";
import WhyClaudeSection from "@/components/WhyClaudeSection";
import Footer from "@/components/Footer";
import CompanyNews from "@/components/CompanyNews";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <ClaudeModelFamilySection />
      <WhyClaudeSection />
      <CompanyNews />
      <Footer />
    </>
  );
}
