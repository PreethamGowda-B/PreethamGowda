"use client";

import { ShieldAlert, Bot, Terminal, CheckCircle2, ArrowUpRight, Lock, Sparkles, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ProzyncAIShowcase() {
  return (
    <SpotlightCard
      id="prozync-ai"
      spotlightColor="rgba(168, 85, 247, 0.16)"
      borderColor="rgba(168, 85, 247, 0.5)"
      className="p-6 sm:p-10 bg-linear-to-br from-purple-500/5 via-white dark:via-[#0b0914] to-purple-500/5 dark:from-[#120f1c] dark:to-[#06050b] border border-purple-500/30 shadow-2xl shadow-purple-950/10 dark:shadow-purple-950/20"
    >
      {/* Deep Violet Glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/15 text-purple-300 border border-purple-500/40 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-purple-400" />
                AI Cybersecurity Platform
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-950/50 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Currently Building // Under Active Development
              </span>
            </div>
            <h4 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Prozync AI
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
              AI-Powered Cybersecurity & Automated Threat Investigation Platform
            </p>
          </div>

          <a
            href="https://github.com/PreethamGowda-B/Prozync-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-purple-600/15 hover:bg-purple-600 hover:text-white text-purple-700 dark:text-purple-200 border border-purple-500/40 transition-all shadow-lg shadow-purple-950/10 dark:shadow-purple-950/30 self-start md:self-auto cursor-pointer"
            data-cursor="GITHUB"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Inspect Prozync-AI on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Narrative & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Engineered to assist security teams and developers with real-time automated security analysis,
              vulnerability assessment, threat investigation, intelligent anomaly detection workflows, and
              automated security operations.
            </p>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block">
                Architecture & Investigation Pipelines
              </span>
              <ul className="space-y-2.5">
                {[
                  "AI-assisted vulnerability assessment heuristics and threat investigation automation.",
                  "Structured detection workflows parsing security signals and system logs.",
                  "Automated incident remediation workflows and infrastructure risk scoring.",
                  "Built with modular TypeScript services for high-speed parsing and zero-leakage threat intelligence.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {["TypeScript", "Node.js", "AI Analysis", "Cybersecurity Workflows", "REST APIs", "JSON Schema"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-purple-950/40 text-purple-200 border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-5 rounded-2xl bg-black/70 border border-purple-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-medium text-white">
                  Security Operations Console
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-500/30">
                ACTIVE LAB
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Detection Engine</span>
                <p className="text-slate-300 font-mono">Real-time heuristics & threat signal correlation</p>
              </div>
              <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Vulnerability Radar</span>
                <p className="text-slate-300 font-mono">Infrastructure posture checks & dependency audits</p>
              </div>
              <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Automated Playbooks</span>
                <p className="text-slate-300 font-mono">Intelligent response actions & remediation guides</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span>Status:</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">Currently Building</span>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
