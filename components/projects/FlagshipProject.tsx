"use client";

import { useState } from "react";
import { RESUME_DATA } from "@/lib/resume-data";
import {
  ExternalLink,
  Shield,
  Layers,
  Bot,
  Zap,
  CheckCircle2,
  Lock,
  ChevronRight,
  Database,
  Server,
  Cloud,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ArchitectureFlowSimulator from "./ArchitectureFlowSimulator";

export default function FlagshipProject() {
  const project = RESUME_DATA.projects[0]; // SmartERP
  const [activeTab, setActiveTab] = useState<number>(0);

  const architectureTabs = [
    {
      title: "Tenant Isolation (RLS)",
      icon: Shield,
      subtitle: "Database-Level Security Boundary",
      details:
        "SmartERP implements rigorous multi-tenant data isolation using PostgreSQL Row-Level Security (RLS) combined with Node.js AsyncLocalStorage. Each database query automatically executes within the authenticated company tenant scope, eliminating cross-tenant data leakage risks.",
      technologies: ["PostgreSQL RLS", "AsyncLocalStorage", "JWT", "RBAC"],
    },
    {
      title: "5 Distinct RBAC Portals",
      icon: Layers,
      subtitle: "Full Organizational Coverage",
      details:
        "Role-Based Access Control powers five dedicated portals: Owner Portal (strategic company control & analytics), HR Portal (employee onboarding & records), Employee Portal (attendance & leave tracking), Customer Portal (service requests & communication), and Super Admin (platform administration).",
      technologies: ["Next.js 14", "React.js", "Radix UI", "Tailwind CSS"],
    },
    {
      title: "Gemini AI ReAct Agent",
      icon: Bot,
      subtitle: "Autonomous Tool-Calling with Safeguards",
      details:
        "Engineered an autonomous Google Gemini AI agent operating in a ReAct (Reasoning + Acting) loop. Integrated with domain-specific plugins for ERP tasks, contextual tools, and structured prompt-injection defenses to ensure enterprise data safety.",
      technologies: ["Google Gemini API", "ReAct Loop", "Prompt Defense", "Custom Plugins"],
    },
    {
      title: "Async Queues & Real-Time",
      icon: Zap,
      subtitle: "Scalable Background Pipeline",
      details:
        "Asynchronous jobs, payroll calculation pipelines, and high-frequency real-time messaging/notifications are decoupled using Redis and BullMQ, paired with Firebase FCM push notifications.",
      technologies: ["Redis", "BullMQ", "Firebase FCM", "WebSockets / REST"],
    },
  ];

  return (
    <div
      id="smarterp"
      className="relative rounded-3xl p-6 sm:p-8 lg:p-12 bg-linear-to-b from-[#0e131d] to-[#080a0f] border border-cyan-500/25 shadow-2xl shadow-cyan-950/20 overflow-hidden mb-16"
    >
      {/* Decorative Glow */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <div className="flex flex-wrap items-center gap-2.5 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Role: <span className="text-slate-200">{project.role}</span>
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-center gap-3">
            {project.name}
            {project.domain && (
              <span className="text-sm sm:text-base font-normal text-slate-400 font-mono">
                ({project.domain})
              </span>
            )}
          </h3>
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-cyan-500 hover:text-black text-white transition-all duration-200 border border-white/10 self-start md:self-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Visit Live Platform</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      {/* Narrative & Capabilities */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Verified Production Capabilities
            </h4>
            <ul className="space-y-2.5">
              {project.bulletPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-black/40 border border-white/5 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <Lock className="h-3.5 w-3.5" />
            Production Modules
          </h4>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              "Owner Management",
              "Employee Portal",
              "HR Operations",
              "Customer Portal",
              "Super Admin",
              "Jobs Dispatch",
              "Attendance & Tracking",
              "Payroll Engine",
              "Inventory Control",
              "CRM Workflows",
              "Subscriptions",
              "Razorpay Checkout",
            ].map((moduleName) => (
              <div
                key={moduleName}
                className="px-2.5 py-1.5 rounded-lg bg-white/2 border border-white/5 text-slate-300 flex items-center gap-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span>{moduleName}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Deployment Target</span>
            <span className="text-slate-200 font-mono">Render • Vercel • Docker</span>
          </div>
        </div>
      </div>

      {/* Interactive Architecture Breakdown Tabs */}
      <div className="relative z-10 pt-6 border-t border-white/10">
        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
          Architectural Deep-Dive
        </h4>

        {/* Tab Headers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
          {architectureTabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === idx;
            return (
              <button
                key={tab.title}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "p-3 rounded-xl text-left transition-all duration-200 border flex flex-col gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400",
                  isCurrent
                    ? "bg-cyan-950/60 border-cyan-500/50 shadow-md text-white"
                    : "bg-white/2 border-white/5 hover:bg-white/5 text-slate-400 hover:text-slate-200"
                )}
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className={cn(
                      "h-4 w-4",
                      isCurrent ? "text-cyan-400" : "text-slate-500"
                    )}
                  />
                  <ChevronRight
                    className={cn(
                      "h-3 w-3 transition-transform",
                      isCurrent ? "rotate-90 text-cyan-400" : "text-slate-600"
                    )}
                  />
                </div>
                <span className="text-xs font-semibold block tracking-tight">
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panel */}
        <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h5 className="text-base font-semibold text-white">
                {architectureTabs[activeTab].title}
              </h5>
              <p className="text-xs font-mono text-cyan-400">
                {architectureTabs[activeTab].subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {architectureTabs[activeTab].technologies.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {architectureTabs[activeTab].details}
          </p>
        </div>

        {/* Live Architecture Flow Simulator */}
        <div className="mt-8">
          <ArchitectureFlowSimulator />
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
        <span className="text-xs font-mono text-slate-400 block mb-3">
          Technologies Employed in SmartERP
        </span>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/4 hover:bg-white/8 text-slate-200 border border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
