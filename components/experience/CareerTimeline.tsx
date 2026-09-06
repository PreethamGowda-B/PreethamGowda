"use client";

import { RESUME_DATA } from "@/lib/resume-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, CheckCircle2, Clock, Layers } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function CareerTimeline() {
  return (
    <section
      id="experience"
      aria-label="Professional & Internship Trajectory"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16"
    >
      <SectionHeading
        kicker="Professional Trajectory"
        title="Software Development Internships"
        subtitle="Practical industry engineering experience spanning 400 hours of structured Python programming and full-stack academic management systems."
        watermark="04 // TRAJECTORY"
      />

      {/* Editorial Timeline Layout */}
      <div className="space-y-12">
        {RESUME_DATA.experiences.map((exp, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor="rgba(34, 211, 238, 0.12)"
            borderColor="rgba(34, 211, 238, 0.35)"
            className="p-6 sm:p-10 bg-linear-to-r from-cyan-500/5 via-white dark:via-[#0c101a] to-white dark:to-transparent border border-slate-200 dark:border-white/10 shadow-xl shadow-cyan-950/5 dark:shadow-none"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left: Huge Editorial Date & Company Header */}
              <div className="lg:col-span-4 space-y-3">
                <div className="text-4xl sm:text-5xl font-black font-mono text-slate-400 dark:text-slate-500 tracking-tighter">
                  {exp.period}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 block">
                    INTERNSHIP {idx === 0 ? "01 // CORE" : "02 // FULL STACK"}
                  </span>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {exp.company}
                  </h4>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {exp.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    {exp.location}
                  </span>
                  {idx === 0 ? (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/70 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30">
                      <Clock className="w-3.5 h-3.5" />
                      400 Hours Total
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/70 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-500/30">
                      <Layers className="w-3.5 h-3.5" />
                      Full Stack Focus
                    </span>
                  )}
                </div>
              </div>

              {/* Right: Verified Highlights & Engineering Details */}
              <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/5 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block">
                  Verified Deliverables & Engineering Practice
                </span>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <span>VERIFIED INDUSTRY PRACTICUM</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">BANGALORE, IN</span>
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
