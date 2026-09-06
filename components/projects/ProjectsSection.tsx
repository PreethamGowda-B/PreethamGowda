"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import ProjectExperienceCounter from "./ProjectExperienceCounter";
import SmartERPCaseStudy from "./SmartERPFlagship/SmartERPCaseStudy";
import ProzyncAIShowcase from "./ProzyncAIShowcase";
import KamadhenuShowcase from "./KamadhenuShowcase";
import TimetableShowcase from "./TimetableShowcase";
import GitHubProofHub from "./GitHubProofHub";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Engineered Systems & Production Projects"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20"
    >
      <SectionHeading
        kicker="Production Portfolio"
        title="8+ Real-World Projects Built & Deployed"
        subtitle="Hands-on experience architecting and shipping production software across multi-tenant SaaS, AI systems, commercial e-commerce, and academic scheduling—with ongoing real-world implementations continuously underway."
        watermark="02 // SYSTEMS"
      />

      {/* Prominent 08+ Real-World Projects Indicator */}
      <ProjectExperienceCounter />

      {/* Flagship Case Study: SmartERP (Stages 01 - 08) */}
      <SmartERPCaseStudy />

      {/* Additional Dedicated Product Presentations */}
      <div className="space-y-16 pt-8">
        <div className="border-b border-white/10 pb-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Selected Work & Specialized Engineering
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Distinct Product & Systems Presentations
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Every project has a unique architecture. From AI cybersecurity workflows and direct-to-consumer e-commerce to relational academic scheduling.
          </p>
        </div>

        {/* Project 2: Prozync AI (Cybersecurity Platform - Currently Building) */}
        <ProzyncAIShowcase />

        {/* Project 3: Kamadhenu Honey Farms (Commerce Presentation) */}
        <KamadhenuShowcase />

        {/* Project 4: Master Timetable Portal (Academic Systems Presentation) */}
        <TimetableShowcase />
      </div>

      {/* GitHub as the Proof Layer */}
      <GitHubProofHub />
    </section>
  );
}
