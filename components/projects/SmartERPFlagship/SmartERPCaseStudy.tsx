"use client";

import { RESUME_DATA } from "@/lib/resume-data";
import {
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Server,
  Cloud,
  CheckCircle2,
  Lock,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import BorderBeam from "@/components/ui/BorderBeam";
import InteractiveDiagram from "./InteractiveDiagram";
import PortalsShowcase from "./PortalsShowcase";
import EngineeringDeepDive from "./EngineeringDeepDive";
import ArchitectureFlowSimulator from "../ArchitectureFlowSimulator";

export default function SmartERPCaseStudy() {
  const project = RESUME_DATA.projects[0]; // SmartERP

  return (
    <div
      id="smarterp"
      className="relative rounded-3xl p-6 sm:p-10 lg:p-14 bg-linear-to-b from-cyan-500/5 via-white dark:via-[#080b12] to-white dark:to-[#05070b] border border-cyan-500/30 shadow-2xl shadow-cyan-950/10 dark:shadow-cyan-950/30 overflow-hidden space-y-16"
    >
      {/* Traveling Laser Border Beam */}
      <BorderBeam size={320} duration={14} colorFrom="#22d3ee" colorTo="#6366f1" />
      {/* Subtle Ambient Radial Lighting */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 w-120 h-120 bg-cyan-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-40 w-120 h-120 bg-indigo-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* 1-Crore Telemetry & Architectural HUD Strip */}
      <div className="relative z-10 p-3 sm:p-4 rounded-2xl bg-cyan-950/10 dark:bg-cyan-950/40 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-slate-700 dark:text-slate-300">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">LIVE TELEMETRY</span>
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
          <span className="text-cyan-700 dark:text-cyan-300">
            RLS ISOLATION: <strong className="font-semibold text-slate-900 dark:text-white">ENFORCED</strong>
          </span>
          <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
          <span className="hidden md:inline text-cyan-700 dark:text-cyan-300">
            QUEUE: <strong className="font-semibold text-slate-900 dark:text-white">BULLMQ + REDIS</strong>
          </span>
          <span className="hidden lg:inline text-slate-300 dark:text-slate-700">|</span>
          <span className="hidden lg:inline text-cyan-700 dark:text-cyan-300">
            AI AGENT: <strong className="font-semibold text-slate-900 dark:text-white">GEMINI 2.5 REACT</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full text-[11px] bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 font-bold">
            PROZYNC INNOVATIONS
          </span>
        </div>
      </div>

      {/* ========================================================
          STAGE 01 & 02: CINEMATIC INTRODUCTION & PRODUCT IDENTITY
          ======================================================== */}
      <div className="relative z-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-100 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/40 shadow-xs">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Architect & Lead Developer:{" "}
                <span className="text-slate-900 dark:text-slate-200 font-medium">{RESUME_DATA.personal.name}</span>
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-3">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
                {project.name}
              </h3>
              {project.domain && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-xl font-mono text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>{project.domain}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-base sm:text-xl font-semibold text-slate-700 dark:text-slate-200">
              {project.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5"
                data-cursor="LAUNCH"
              >
                <span>Launch Production SaaS</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <a
              href={RESUME_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white transition-all hover:-translate-y-0.5 cursor-pointer"
              data-cursor="GITHUB"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {project.description}
            </p>
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block">
                Verified Production Capabilities
              </span>
              <ul className="space-y-2.5">
                {project.bulletPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 p-5 rounded-2xl bg-black/40 border border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />
              Active Functional Modules
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                "Owner Governance",
                "HR Operations",
                "Employee Self-Service",
                "Customer Portal",
                "Super Admin",
                "Jobs & Dispatch",
                "Attendance & Tracking",
                "Payroll Engine",
                "Inventory Control",
                "CRM Workflows",
                "SaaS Subscriptions",
                "Razorpay Checkout",
              ].map((m) => (
                <div
                  key={m}
                  className="px-2.5 py-1.5 rounded-lg bg-white/3 border border-white/5 text-slate-300 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="truncate">{m}</span>
                </div>
              ))}
            </div>
            <div className="pt-3 border-t border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
              <span>Cloud Infrastructure:</span>
              <span className="text-slate-200">Neon • Render • Docker</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          STAGE 03: 7-LAYER INTERACTIVE ARCHITECTURE INSPECTOR
          ======================================================== */}
      <div className="relative z-10 border-t border-white/10 pt-10">
        <InteractiveDiagram />
      </div>

      {/* ========================================================
          STAGE 04: LIVE FLOW SIMULATOR (REQUEST TRACER)
          ======================================================== */}
      <div id="flow-simulator" className="relative z-10 border-t border-white/10 pt-10">
        <div className="space-y-4 mb-4">
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block">
            Stage 04 // Dynamic Execution
          </span>
          <h4 className="text-2xl font-bold text-white tracking-tight">
            Live Request Flow Simulator
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Simulate real production request pipelines through SmartERP&apos;s security and
            asynchronous layers. Watch how data traverses the tenant isolation boundary in real time.
          </p>
        </div>
        <ArchitectureFlowSimulator />
      </div>

      {/* ========================================================
          STAGE 05: 5 RBAC ORGANIZATIONAL PORTALS SHOWCASE
          ======================================================== */}
      <div className="relative z-10 border-t border-white/10 pt-10">
        <PortalsShowcase />
      </div>

      {/* ========================================================
          STAGE 06: ENGINEERING CHALLENGES & HARDENED SOLUTIONS
          ======================================================== */}
      <div className="relative z-10 border-t border-white/10 pt-10">
        <EngineeringDeepDive />
      </div>

      {/* ========================================================
          STAGE 07: VERIFIED PRODUCTION STACK MATRIX
          ======================================================== */}
      <div className="relative z-10 border-t border-white/10 pt-10 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
              Stage 07 // Production Ecosystem
            </span>
            <h4 className="text-2xl font-bold text-white tracking-tight">
              Verified Production Stack Matrix
            </h4>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            100% Resume-Verified
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
          {project.techStack.map((tech) => (
            <div
              key={tech}
              className="p-3 rounded-xl bg-white/3 border border-white/5 hover:border-cyan-500/40 transition-colors flex flex-col justify-between gap-1 group"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
              <span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          STAGE 08: DIRECT ACTION & GITHUB ACTIONS HUB
          ======================================================== */}
      <div className="relative z-10 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/2 p-6 rounded-2xl border border-white/10">
        <div className="space-y-1">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
            Stage 08 // Direct Verification Hub
          </span>
          <h5 className="text-lg font-bold text-white">
            Inspect the Running SmartERP SaaS Platform
          </h5>
          <p className="text-xs text-slate-400">
            Deployed and accessible at prozync.in with production credentials and domain SSL.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-cyan-400 text-black hover:bg-cyan-300 transition-all flex items-center gap-2 shadow-md shadow-cyan-500/20"
              data-cursor="LAUNCH"
            >
              <span>Visit prozync.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <a
            href={RESUME_DATA.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-2"
            data-cursor="GITHUB"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Review on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
