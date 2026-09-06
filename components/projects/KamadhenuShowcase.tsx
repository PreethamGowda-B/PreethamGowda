"use client";

import { useState } from "react";
import {
  ExternalLink,
  ShoppingBag,
  Sparkles,
  Check,
  Plus,
  Minus,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Smartphone,
} from "lucide-react";
import { RESUME_DATA } from "@/lib/resume-data";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function KamadhenuShowcase() {
  const project = RESUME_DATA.projects.find((p) => p.id === "kamadhenu")!;

  const [selectedVariety, setSelectedVariety] = useState<string>("Raw Wildflower Honey");
  const [quantity, setQuantity] = useState<number>(2);

  const varieties = [
    { name: "Raw Wildflower Honey", weight: "500g", price: 350 },
    { name: "Organic Forest Honey", weight: "500g", price: 420 },
    { name: "Monofloral Mustard Honey", weight: "500g", price: 380 },
  ];

  const currentItem = varieties.find((v) => v.name === selectedVariety) || varieties[0];
  const orderTotal = currentItem.price * quantity;

  return (
    <SpotlightCard
      id="kamadhenu"
      spotlightColor="rgba(245, 158, 11, 0.15)"
      borderColor="rgba(245, 158, 11, 0.45)"
      className="p-6 sm:p-10 bg-linear-to-br from-amber-500/5 via-white dark:via-[#0d0d0c] to-amber-500/5 dark:from-[#13120d] dark:to-[#070707] border border-amber-500/30 shadow-2xl shadow-amber-950/10 dark:shadow-amber-950/20"
    >
      {/* Warm Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/15 text-amber-300 border border-amber-500/40">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Role: <span className="text-slate-200">{project.role}</span>
              </span>
            </div>
            <h4 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight flex items-baseline gap-3">
              {project.name}
              {project.domain && (
                <span className="text-xs sm:text-sm font-mono text-amber-500 dark:text-amber-400 font-normal">
                  ({project.domain})
                </span>
              )}
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20 self-start md:self-auto"
              data-cursor="COMMERCE"
            >
              <span>Visit kamadhenuhoneyfarms.in</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Narrative & Commerce Simulator Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Engineering Implementation */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
                Verified Deliverables & Engineering
              </span>
              <ul className="space-y-2.5">
                {project.bulletPoints.map((bp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <Smartphone className="w-4 h-4" />
                <span>COMMERCE UX ARCHITECTURE</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered with mobile-first responsive viewports, lightweight React state for
                seamless cart interactions, rapid image rendering, and streamlined customer inquiries.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-amber-950/40 text-amber-200 border border-amber-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Interactive Commerce Workflow Simulator */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-black/70 border border-amber-500/30 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono font-medium text-white">
                  Customer Ordering Simulator
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                LIVE DEMO
              </span>
            </div>

            {/* Variety Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400 block">
                Select Farm Honey Batch:
              </label>
              <div className="space-y-1.5">
                {varieties.map((v) => (
                  <button
                    key={v.name}
                    onClick={() => setSelectedVariety(v.name)}
                    className={`w-full p-2.5 rounded-xl border text-xs text-left flex items-center justify-between transition-colors ${
                      selectedVariety === v.name
                        ? "bg-amber-950/60 border-amber-500/60 text-white"
                        : "bg-white/2 border-white/5 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span>{v.name} ({v.weight})</span>
                    <span className="font-mono text-amber-300">₹{v.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Stepper */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5">
              <span className="text-xs font-mono text-slate-300">Quantity</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-1 rounded bg-white/5 hover:bg-white/10 text-white"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-sm text-white font-bold w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-1 rounded bg-white/5 hover:bg-white/10 text-white"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Calculation & Payload */}
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Total Order Valuation:</span>
                <span className="text-base font-mono font-bold text-amber-300">
                  ₹{orderTotal}
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-500 truncate">
                Simulated Payload: &ldquo;{selectedVariety} × {quantity}&rdquo;
              </div>
            </div>

            <a
              href="https://kamadhenuhoneyfarms.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl font-semibold text-xs font-sans text-center bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore Active Farm Store</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
