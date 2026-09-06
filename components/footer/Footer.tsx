"use client";

import Link from "next/link";
import { RESUME_DATA } from "@/lib/resume-data";
import { ArrowUp, ShieldCheck, Terminal, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#06080d]/95 py-14 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-7xl mx-auto space-y-10 text-xs text-slate-400">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-linear-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-xs text-white shadow-md shadow-cyan-500/25">
                PG
              </div>
              <div>
                <span className="text-sm font-bold text-white block">
                  {RESUME_DATA.personal.name}
                </span>
                <span className="text-[11px] font-mono text-cyan-400">
                  {RESUME_DATA.personal.title} // SYSTEMS BUILDER
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Architect of SmartERP multi-tenant SaaS. Focused on database security boundaries,
              autonomous agentic loops, and scalable full-stack web applications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/3 border border-white/10 font-mono text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Bangalore, India</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SYSTEM ONLINE</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-cyan-500 hover:text-black text-slate-300 border border-white/10 transition-colors"
              aria-label="Scroll to top"
              title="Return to top"
              data-cursor="TOP"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2 text-cyan-300/80">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Strict Factual Guarantee: 100% verified single source of truth (Resume of Preetham Gowda B).</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={RESUME_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={RESUME_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://prozync.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              SmartERP (prozync.in)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
