"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  GraduationCap,
  Code2,
  Calendar,
  Layers,
  Bot,
  Sparkles,
  CheckCircle2,
  ArrowDown,
  Terminal,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryNode {
  step: string;
  title: string;
  period: string;
  organization: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  badgeBg: string;
  description: string;
  takeaways: string[];
  techPills: string[];
}

const NARRATIVE_STEPS: StoryNode[] = [
  {
    step: "01",
    title: "Computer Science Diploma Foundation",
    period: "2023 – 2026",
    organization: "East West Polytechnic, Bangalore",
    category: "Academic Foundation",
    icon: GraduationCap,
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    badgeBg: "bg-cyan-950/50 text-cyan-300 border-cyan-500/30",
    description:
      "Established rigorous fundamentals in data structures, algorithms, relational database design, operating systems, and core computer science theory. Graduated with a strong 8.0/10 CGPA (72.53%).",
    takeaways: [
      "Rigorous grounding in software engineering principles",
      "Relational schema modeling and normal forms",
      "Achieved 8.0/10 CGPA academic track record",
    ],
    techPills: ["Data Structures", "Algorithms", "C/C++", "DBMS", "OS"],
  },
  {
    step: "02",
    title: "Software Engineering Practicum",
    period: "2025 – 2026",
    organization: "Syslog Technologies, Bangalore",
    category: "Industry Practicum",
    icon: Terminal,
    accentColor: "text-sky-400",
    borderColor: "border-sky-500/40",
    badgeBg: "bg-sky-950/50 text-sky-300 border-sky-500/30",
    description:
      "Completed 400 hours of structured Python software engineering across two sequential terms. Transitioned textbook theory into production programming paradigms, error handling, and clean code architectures.",
    takeaways: [
      "400 total hours of structured Python engineering across 2 terms",
      "Project-based application architecture and algorithmic problem solving",
      "Modular design patterns and programmatic test discipline",
    ],
    techPills: ["Python", "Object-Oriented Design", "Modular Architecture", "CLI Systems"],
  },
  {
    step: "03",
    title: "Full Stack Systems Engineering",
    period: "2025",
    organization: "VR Institute of Skill Development Centre",
    category: "Web Application Engineering",
    icon: Calendar,
    accentColor: "text-indigo-400",
    borderColor: "border-indigo-500/40",
    badgeBg: "bg-indigo-950/50 text-indigo-300 border-indigo-500/30",
    description:
      "Engineered the Master Timetable Portal, coordinating complex academic faculty assignments, batch schedules, and classroom resources through a relational PostgreSQL backend and React frontend.",
    takeaways: [
      "Engineered full-stack scheduling engine with PostgreSQL relational constraints",
      "Built responsive, accessible React interfaces for faculty and administration",
      "Handled database integration, query optimization, and frontend state synchronization",
    ],
    techPills: ["React.js", "Node.js", "PostgreSQL", "REST APIs", "JavaScript"],
  },
  {
    step: "04",
    title: "Production Multi-Tenant SaaS Flagship",
    period: "2025 – Present",
    organization: "SmartERP (Deployed at prozync.in)",
    category: "Enterprise Software Architecture",
    icon: Layers,
    accentColor: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    badgeBg: "bg-cyan-950/50 text-cyan-300 border-cyan-500/30",
    description:
      "Conceived, architected, and deployed SmartERP—a full-scale multi-tenant SaaS ERP platform supporting Owner, HR, Employee, Customer, and Super Admin portals with PostgreSQL Row-Level Security (RLS), AsyncLocalStorage, and BullMQ queues.",
    takeaways: [
      "Enforced mathematical tenant isolation via PostgreSQL RLS & Node.js AsyncLocalStorage",
      "Built 5 dedicated organizational RBAC portals across jobs, payroll, and CRM",
      "Decoupled asynchronous background processing using Redis and BullMQ queues",
    ],
    techPills: ["Next.js 14", "Node.js", "PostgreSQL RLS", "BullMQ", "Docker", "Render"],
  },
  {
    step: "05",
    title: "Autonomous AI & Cloud Integrations",
    period: "2026",
    organization: "SmartERP AI Subsystem",
    category: "AI & Autonomous Systems",
    icon: Bot,
    accentColor: "text-purple-400",
    borderColor: "border-purple-500/40",
    badgeBg: "bg-purple-950/50 text-purple-300 border-purple-500/30",
    description:
      "Equipped SmartERP with an autonomous Google Gemini AI agent operating in a ReAct loop with domain plugins and prompt-injection defense, integrated with Razorpay subscription billing and Firebase real-time notifications.",
    takeaways: [
      "Implemented iterative ReAct reasoning loop with structured JSON schema tools",
      "Hardened prompt-injection defenses preventing cross-tenant data leakage",
      "Integrated automated Razorpay recurring SaaS billing webhooks",
    ],
    techPills: ["Google Gemini API", "ReAct Loop", "Prompt Defense", "Razorpay", "Firebase FCM"],
  },
  {
    step: "06",
    title: "Advanced Horizon: AI/ML Engineering",
    period: "2026 – 2029",
    organization: "East West Institute of Engineering, Bangalore",
    category: "Advanced Degree & Product Building",
    icon: Sparkles,
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/40",
    badgeBg: "bg-emerald-950/50 text-emerald-300 border-emerald-500/30",
    description:
      "Pursuing B.Tech in Artificial Intelligence & Machine Learning. Combining deep systems engineering with modern generative models and agentic computing to build the next generation of intelligent software products.",
    takeaways: [
      "Currently pursuing B.Tech in Artificial Intelligence & Machine Learning",
      "Bridging systems architecture with production AI engineering",
      "Positioned as an independent software engineer and technical founder",
    ],
    techPills: ["AI/ML", "Agentic Systems", "Cloud Architecture", "Product Engineering"],
  },
];

export default function AboutSection() {
  const [activeStep, setActiveStep] = useState<number>(3); // Default to SmartERP milestone

  return (
    <section
      id="about"
      aria-label="Career Journey & Visual Narrative"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16"
    >
      <SectionHeading
        kicker="Visual Narrative"
        title="From Computer Science Theory to Production SaaS"
        subtitle="A progressive trajectory demonstrating how rigorous academic fundamentals, 400 hours of structured engineering practicum, and real-world software development culminated in an enterprise multi-tenant ERP platform."
        watermark="01 // JOURNEY"
      />

      {/* Narrative Pipeline Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Vertical Stepper */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block px-2">
            Chronological Progression Pipeline
          </span>

          <div className="space-y-2 relative">
            {/* Vertical connector line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-linear-to-b from-cyan-500 via-indigo-500 to-emerald-500 opacity-20 hidden sm:block" />

            {NARRATIVE_STEPS.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = activeStep === idx;

              return (
                <button
                  key={node.step}
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 relative z-10 group",
                    isSelected
                      ? "bg-white/6 border-cyan-400 shadow-xl shadow-cyan-950/40 text-white"
                      : "bg-white/2 border-white/5 hover:bg-white/4 hover:border-white/10 text-slate-400 hover:text-slate-200"
                  )}
                  data-cursor="TRAJECTORY"
                >
                  <div
                    className={cn(
                      "p-2 rounded-xl shrink-0 transition-colors",
                      isSelected
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-white/5 text-slate-400 group-hover:text-slate-200"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                        NODE {node.step} // {node.period}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 truncate">
                        {node.category}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-white block mt-0.5 truncate">
                      {node.title}
                    </span>
                    <span className="text-xs text-slate-400 block truncate">
                      {node.organization}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Detailed Milestone Deep-Dive */}
        <div className="lg:col-span-7 sticky top-28 p-6 sm:p-8 rounded-3xl bg-black/70 border border-cyan-500/30 shadow-2xl shadow-cyan-950/30 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border bg-cyan-950/50 text-cyan-300 border-cyan-500/30">
                  NODE {NARRATIVE_STEPS[activeStep].step}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {NARRATIVE_STEPS[activeStep].period}
                </span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {NARRATIVE_STEPS[activeStep].title}
              </h4>
              <p className="text-xs sm:text-sm font-mono text-cyan-300">
                {NARRATIVE_STEPS[activeStep].organization}
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
              {(() => {
                const ActiveIcon = NARRATIVE_STEPS[activeStep].icon;
                return <ActiveIcon className="w-6 h-6" />;
              })()}
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {NARRATIVE_STEPS[activeStep].description}
          </p>

          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
              Verified Key Engineering Outcomes
            </span>
            <ul className="space-y-2.5">
              {NARRATIVE_STEPS[activeStep].takeaways.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
              Associated Technologies & Domains
            </span>
            <div className="flex flex-wrap gap-2">
              {NARRATIVE_STEPS[activeStep].techPills.map((pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/4 text-slate-200 border border-white/10"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
