"use client";

import { RESUME_DATA } from "@/lib/resume-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function EducationDeck() {
  return (
    <section
      id="education"
      aria-label="Academic Education & Qualifications"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16"
    >
      <SectionHeading
        kicker="Academic Foundations"
        title="Higher Education & Computer Science Credentials"
        subtitle="Formal academic grounding bridging foundational computer science theory with modern Artificial Intelligence and Machine Learning engineering."
        watermark="05 // ACADEMICS"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {RESUME_DATA.education.map((edu, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor="rgba(34, 211, 238, 0.12)"
            borderColor="rgba(34, 211, 238, 0.4)"
            className="p-8 bg-linear-to-b from-cyan-500/5 via-white dark:via-[#0c101a] to-white dark:to-transparent border border-slate-200 dark:border-white/10 shadow-xl shadow-cyan-950/5 dark:shadow-none flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-100 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30">
                  {edu.degree} DEGREE
                </span>

                <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  {edu.period}
                </span>
              </div>

              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {edu.field}
                </h4>
                <p className="text-base font-medium text-slate-700 dark:text-slate-200 mt-1">
                  {edu.institution}
                </p>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  {edu.location}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/5 space-y-2">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Curriculum Competencies
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {idx === 0
                    ? "Deep neural networks, computational mathematics, machine learning theory, natural language processing, and scalable AI infrastructure."
                    : "Data structures, algorithms, relational database administration, computer networks, object-oriented design, and operating systems."}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
              {edu.status && (
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {edu.status}
                </span>
              )}
              {edu.performance && (
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-100/70 dark:bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-500/30 font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>{edu.performance}</span>
                </div>
              )}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
