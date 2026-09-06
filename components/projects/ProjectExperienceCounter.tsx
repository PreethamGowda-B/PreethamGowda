"use client";

import { RESUME_DATA } from "@/lib/resume-data";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { ArrowUpRight, GitBranch, Terminal, Sparkles, Layers } from "lucide-react";
import BorderBeam from "@/components/ui/BorderBeam";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ProjectExperienceCounter() {
  return (
    <div className="relative rounded-3xl p-6 sm:p-10 bg-linear-to-r from-cyan-500/5 via-white dark:via-[#0a0d14] to-indigo-500/5 dark:from-cyan-950/40 dark:to-indigo-950/40 border border-cyan-500/30 shadow-2xl shadow-cyan-950/10 dark:shadow-cyan-950/40 overflow-hidden mb-16">
      {/* Animated Traveling Laser Border Beam */}
      <BorderBeam size={280} duration={10} colorFrom="#22d3ee" colorTo="#818cf8" />

      {/* Decorative Glow Elements */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Prominent 08+ Visual Indicator with Shimmer */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start gap-4 sm:gap-6 lg:gap-4 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/10 pb-6 lg:pb-0 lg:pr-8">
          <div className="flex items-baseline gap-2">
            <span className="text-6xl sm:text-7xl lg:text-8xl font-black font-mono tracking-tighter animate-text-shimmer drop-shadow-md">
              08+
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              Real-World Projects Built
            </h3>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
              Across Web Development, SaaS, AI & Business Applications
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-600 dark:text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-emerald-600 dark:text-emerald-300">
                Currently building more real-world software
              </span>
            </div>
          </div>
        </div>

        {/* Right: Verified Scope & GitHub Proof CTA */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              Production Track Record & Ongoing Building
            </span>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Hands-on engineering across <strong className="text-slate-900 dark:text-white">8+ real-world projects</strong>—spanning
              multi-tenant enterprise ERP kernels with PostgreSQL Row-Level Security, autonomous AI cybersecurity tools,
              direct-to-consumer e-commerce, and relational academic scheduling systems.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-white/3 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-colors space-y-1">
              <span className="text-slate-500 block text-[10px]">REPOSITORIES</span>
              <span className="text-slate-900 dark:text-white font-bold block text-sm">{RESUME_DATA.metrics.githubReposCount}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-white/3 border border-slate-200 dark:border-white/10 hover:border-cyan-500/30 transition-colors space-y-1">
              <span className="text-slate-500 block text-[10px]">CONTRIBUTIONS</span>
              <span className="text-cyan-600 dark:text-cyan-300 font-bold block text-sm">{RESUME_DATA.metrics.githubContributions}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-100/80 dark:bg-white/3 border border-slate-200 dark:border-white/10 hover:border-emerald-500/30 transition-colors space-y-1 col-span-2 sm:col-span-1">
              <span className="text-slate-500 block text-[10px]">CURRENT STATUS</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Shipping
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Selected projects are showcased here. Explore GitHub for additional implementations and ongoing work.
            </p>

            <MagneticButton dataCursor="GITHUB">
              <a
                href={RESUME_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-white/10 hover:bg-cyan-500 hover:text-black dark:text-white transition-all duration-200 border border-slate-800 dark:border-white/15 hover:border-cyan-400 shadow-lg shadow-cyan-950/10 dark:shadow-cyan-950/40 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Explore My GitHub (8+ Projects)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}
