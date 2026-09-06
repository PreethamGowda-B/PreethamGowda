import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  watermark?: string;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
  className,
  watermark,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "relative space-y-3 mb-12 sm:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {/* Architectural Background Watermark */}
      {watermark && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none select-none absolute -top-8 font-black font-mono tracking-tighter uppercase whitespace-nowrap transition-opacity",
            "text-6xl sm:text-7xl lg:text-8xl",
            "text-slate-900/5 dark:text-white/4",
            align === "center" ? "left-1/2 -translate-x-1/2" : "-left-2 sm:-left-4"
          )}
        >
          {watermark}
        </div>
      )}

      <div
        className={cn(
          "relative inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest transition-colors",
          "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-800/40 shadow-xs",
          align === "center" && "justify-center"
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse shadow-sm shadow-cyan-400/50" />
        {kicker}
      </div>

      <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="relative text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
