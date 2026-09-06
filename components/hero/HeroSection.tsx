"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RESUME_DATA } from "@/lib/resume-data";
import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Clock,
  MapPin,
  GitBranch,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import ThreeScene from "./ThreeScene";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { scrollToTarget } from "@/lib/scroll";
import FallingRainInteractiveName from "./FallingRainInteractiveName";

export default function HeroSection() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 65,
      origin: { y: 0.7 },
      colors: ["#22d3ee", "#818cf8", "#38bdf8", "#10b981"],
    });
  };

  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <section
      id="hero"
      aria-label="Introduction & Systems Architecture Core"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Three.js Interactive 3D Neural Computational Lattice */}
      <ThreeScene />

      {/* Atmospheric Ambient Light Fields */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 sm:w-220 h-120 bg-linear-to-tr from-cyan-500/15 via-indigo-600/10 to-transparent rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Top Telemetry Bar */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/10 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>BANGALORE, IN [12.9716° N, 77.5946° E]</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 backdrop-blur-md font-bold">
            <GitBranch className="w-3.5 h-3.5" />
            <span>08+ REAL-WORLD PROJECTS BUILT</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/3 border border-white/10 backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            <span>IST {timeString || "19:55:00"} (UTC+05:30)</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ACTIVE // SHIPPING REAL SOFTWARE</span>
          </div>
        </div>
      </div>

      {/* Center Cinematic Content */}
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center my-auto">
        {/* Architectural Role Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center flex-wrap gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-widest bg-cyan-950/50 border border-cyan-500/40 text-cyan-300 mb-6 shadow-lg shadow-cyan-950/40 backdrop-blur-xl text-center"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="font-semibold tracking-wider">FULL STACK DEVELOPER & SYSTEMS BUILDER</span>
          <span className="text-slate-500">//</span>
          <span className="text-cyan-300 font-bold">08+ REAL-WORLD PROJECTS</span>
        </motion.div>

        {/* Falling Rain & Interactive Chromatic Cursor Name */}
        <div className="mb-4 sm:mb-6 w-full flex items-center justify-center">
          <FallingRainInteractiveName />
        </div>

        {/* Secondary Title with dynamic shimmer & pulse capsule */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/4 border border-white/10 backdrop-blur-md mb-6 shadow-md"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight animate-text-shimmer">
            8+ Real-World Projects Built & Deployed
          </span>
        </motion.div>

        {/* Authentic Narrative Strictly From Resume */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-10 text-balance"
        >
          Full-stack developer who built and deployed{" "}
          <span className="text-white font-semibold underline decoration-cyan-500/40 underline-offset-4">SmartERP</span>, a production multi-tenant SaaS ERP platform, alongside{" "}
          <span className="text-cyan-300 font-semibold">8+ real-world web applications and software products</span>{" "}
          across SaaS, AI, e-commerce, and business systems. Continuously building and implementing new real-world products.
        </motion.p>

        {/* Primary Interactive CTAs with Magnetic Physics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
        >
          <MagneticButton dataCursor="PROJECTS">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToTarget("#projects");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all duration-200 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 cursor-pointer"
            >
              <span>Explore 8+ Projects Built</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </MagneticButton>

          <MagneticButton dataCursor="GITHUB">
            <a
              href={RESUME_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all duration-200 backdrop-blur-md"
            >
              <GithubIcon className="w-4 h-4" />
              <span>See All on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </MagneticButton>

          <MagneticButton dataCursor="COMMANDS">
            <button
              onClick={openPalette}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-white transition-all duration-200 backdrop-blur-md"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Command Menu</span>
              <kbd className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-black/40 border border-white/10 text-slate-400">
                ⌘K
              </kbd>
            </button>
          </MagneticButton>

          <div className="flex items-center gap-2">
            <MagneticButton dataCursor="LINKEDIN">
              <a
                href={RESUME_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all duration-200 block"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Bottom Architectural Highlights Telemetry Strip */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-6xl mx-auto w-full relative z-10 pt-6 border-t border-white/10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-3.5 rounded-2xl bg-white/2 border border-white/10 hover:border-cyan-500/40 transition-all group backdrop-blur-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <GitBranch className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                Hands-On Experience
              </span>
            </div>
            <div className="text-sm font-semibold text-white">08+ Real-World Projects</div>
            <div className="text-xs text-slate-400">SaaS, AI, E-Commerce, Systems</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/2 border border-white/10 hover:border-indigo-500/40 transition-all group backdrop-blur-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                Security Boundary
              </span>
            </div>
            <div className="text-sm font-semibold text-white">PostgreSQL RLS</div>
            <div className="text-xs text-slate-400">Strict Tenant DB Isolation</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/2 border border-white/10 hover:border-sky-500/40 transition-all group backdrop-blur-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400">
                Autonomous AI
              </span>
            </div>
            <div className="text-sm font-semibold text-white">Gemini ReAct & Prozync AI</div>
            <div className="text-xs text-slate-400">Plugins & Cybersecurity</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/2 border border-white/10 hover:border-emerald-500/40 transition-all group backdrop-blur-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <Cpu className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Asynchronous Engine
              </span>
            </div>
            <div className="text-sm font-semibold text-white">Redis & BullMQ</div>
            <div className="text-xs text-slate-400">Distributed Job Queues</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
