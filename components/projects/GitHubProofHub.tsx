"use client";

import { RESUME_DATA } from "@/lib/resume-data";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { ArrowUpRight, GitBranch, Star, Code2, Sparkles, ExternalLink } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function GitHubProofHub() {
  return (
    <SpotlightCard
      spotlightColor="rgba(34, 211, 238, 0.12)"
      borderColor="rgba(34, 211, 238, 0.4)"
      className="p-6 sm:p-10 bg-linear-to-b from-cyan-500/5 via-white dark:via-[#0e121a] to-white dark:to-[#080a0f] border border-slate-200 dark:border-white/10 space-y-8 shadow-xl shadow-cyan-950/5 dark:shadow-cyan-950/20"
    >
      {/* Background Accent Glow */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Header & Direct CTA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <GithubIcon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              GitHub As The Proof Layer
            </span>
          </div>
          <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Want to see what I&apos;ve actually built?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Selected projects are showcased on this site. Explore my verified GitHub profile to inspect
            the complete codebase, commit histories, and ongoing real-world implementations.
          </p>
        </div>

        <a
          href={RESUME_DATA.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-cyan-400 hover:text-black dark:hover:bg-cyan-300 transition-all shadow-xl shadow-cyan-500/10 hover:-translate-y-0.5 shrink-0 self-start md:self-auto cursor-pointer"
          data-cursor="GITHUB"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Explore All Projects on GitHub</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Grid of Verified Pinned Repositories */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>VERIFIED PUBLIC REPOSITORIES (8+ PROJECTS)</span>
          <span className="text-cyan-400">1,427+ CONTRIBUTIONS IN THE LAST YEAR</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {RESUME_DATA.verifiedRepositories.map((repo) => (
            <a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-50/80 dark:bg-white/2 border border-slate-200 dark:border-white/5 hover:border-cyan-500/40 hover:bg-white dark:hover:bg-white/4 transition-all duration-200 flex flex-col justify-between gap-3 group shadow-xs"
              data-cursor="CODE"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors truncate">
                    <GitBranch className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-500 shrink-0" />
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {repo.role}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        repo.language === "TypeScript" ? "bg-blue-500" : "bg-yellow-500"
                      }`}
                    />
                    <span>{repo.language}</span>
                  </span>
                  <span className="text-slate-400 dark:text-slate-600">•</span>
                  <span>{repo.category}</span>
                </div>

                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                  <Star className="w-3 h-3 text-slate-400" />
                  <span>{repo.stars}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Summary Notice */}
      <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-white/2 border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
        <span>Continuous development: Always experimenting, building, and shipping production code.</span>
        <a
          href={RESUME_DATA.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 shrink-0"
        >
          <span>github.com/PreethamGowda-B</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </SpotlightCard>
  );
}
