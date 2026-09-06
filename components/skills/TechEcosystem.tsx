"use client";

import { useState, useMemo } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowDown,
  Info,
  Search,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { playTick } from "@/lib/sound";

interface TechNode {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Databases" | "Infrastructure" | "AI & Services";
  projectUsed: string;
  architecturalRole: string;
  detail: string;
}

const VERIFIED_TECH_MAP: TechNode[] = [
  // Languages
  {
    name: "TypeScript",
    category: "Languages",
    projectUsed: "SmartERP",
    architecturalRole: "End-to-End Type Safety & DTO Contracts",
    detail:
      "Strict typing across API route parameters, database entities, and state structures to eliminate runtime null-pointer failures.",
  },
  {
    name: "JavaScript",
    category: "Languages",
    projectUsed: "SmartERP, Kamadhenu Honey Farms, Master Timetable",
    architecturalRole: "Dynamic Client Interactions & Scripting",
    detail:
      "ES6+ asynchronous functions, event delegation, and frontend application functionality.",
  },
  {
    name: "Python",
    category: "Languages",
    projectUsed: "Syslog Technologies Internship (400 hrs)",
    architecturalRole: "Structured Programming & Application Development",
    detail:
      "Practiced project-based software engineering and programming fundamentals during two structured diploma terms.",
  },
  {
    name: "HTML5 / CSS3",
    category: "Languages",
    projectUsed: "All Web Applications",
    architecturalRole: "Semantic Document Structure & Layout Engine",
    detail:
      "Accessible document hierarchy, modern CSS flexbox/grid styling, and responsive viewports.",
  },

  // Frontend
  {
    name: "Next.js 14",
    category: "Frontend",
    projectUsed: "SmartERP",
    architecturalRole: "App Router & Server Component Boundary",
    detail:
      "Hybrid server-client rendering, protected route middleware, and optimized production builds for enterprise SaaS.",
  },
  {
    name: "React.js",
    category: "Frontend",
    projectUsed: "SmartERP, Kamadhenu Honey Farms, Master Timetable",
    architecturalRole: "Declarative Component State & UI Primitives",
    detail:
      "Reusable UI components, hooks, state orchestration, and responsive DOM rendering.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    projectUsed: "SmartERP & Modern Web Apps",
    architecturalRole: "Utility-First Design System",
    detail:
      "Consistent responsive spacing tokens, dark-mode design palettes, and zero runtime CSS overhead.",
  },
  {
    name: "Radix UI",
    category: "Frontend",
    projectUsed: "SmartERP",
    architecturalRole: "Accessible Unstyled Primitives",
    detail:
      "Keyboard-navigable dialogs, dropdowns, and accessible modal overlays compliant with WAI-ARIA guidelines.",
  },

  // Backend
  {
    name: "Node.js",
    category: "Backend",
    projectUsed: "SmartERP & Master Timetable Portal",
    architecturalRole: "High-Performance Asynchronous Runtime",
    detail:
      "Non-blocking I/O event loop powering micro-APIs, token verification, and database query pooling.",
  },
  {
    name: "Express.js",
    category: "Backend",
    projectUsed: "SmartERP",
    architecturalRole: "Stateless REST API Engine & Middleware Chain",
    detail:
      "Modular route handlers, centralized error interception, rate limiting, and RBAC authorization guards.",
  },
  {
    name: "AsyncLocalStorage",
    category: "Backend",
    projectUsed: "SmartERP",
    architecturalRole: "Server-Side Tenant Context Propagation",
    detail:
      "Propagates company_id seamlessly across asynchronous promises without exposing tenant keys to client tampering.",
  },

  // Databases
  {
    name: "Neon PostgreSQL",
    category: "Databases",
    projectUsed: "SmartERP",
    architecturalRole: "Serverless Cloud Relational System of Record",
    detail:
      "ACID transactions, foreign key constraints, connection pooling, and multi-tenant schema isolation.",
  },
  {
    name: "PostgreSQL RLS",
    category: "Databases",
    projectUsed: "SmartERP",
    architecturalRole: "Database-Level Row-Level Security Boundary",
    detail:
      "Enforces tenant isolation directly in the database engine via policies tied to session context.",
  },
  {
    name: "Redis & BullMQ",
    category: "Databases",
    projectUsed: "SmartERP",
    architecturalRole: "In-Memory Cache & Distributed Job Queues",
    detail:
      "Decouples long-running batch payroll processing, real-time messaging, and notification dispatching.",
  },

  // Infrastructure
  {
    name: "Docker",
    category: "Infrastructure",
    projectUsed: "SmartERP",
    architecturalRole: "Containerization & Environment Reproducibility",
    detail:
      "Multi-stage Dockerfiles packaging the Node.js backend and services into immutable deployment units.",
  },
  {
    name: "Render",
    category: "Infrastructure",
    projectUsed: "SmartERP Backend",
    architecturalRole: "Container Cloud Hosting & Continuous Deploy",
    detail:
      "Hosts the production Express.js backend services with automated SSL termination and log monitoring.",
  },
  {
    name: "Vercel",
    category: "Infrastructure",
    projectUsed: "SmartERP Frontend & Kamadhenu Honey Farms",
    architecturalRole: "Edge Delivery Network & Global Static Caching",
    detail:
      "Edge routing, global CDN caching, and automated Git branch preview deployments.",
  },
  {
    name: "Cloudinary",
    category: "Infrastructure",
    projectUsed: "SmartERP",
    architecturalRole: "Cloud Asset & Document Storage",
    detail:
      "Secure uploads, image compression, and signed URLs for employee profile photos and company documents.",
  },

  // AI & Services
  {
    name: "Google Gemini API (ReAct)",
    category: "AI & Services",
    projectUsed: "SmartERP",
    architecturalRole: "Autonomous Reasoning & Domain Plugin Loop",
    detail:
      "Interprets natural language queries, reasons via ReAct loop, executes bounded ERP plugins, and enforces prompt injection defense.",
  },
  {
    name: "Razorpay",
    category: "AI & Services",
    projectUsed: "SmartERP",
    architecturalRole: "SaaS Subscriptions & Checkout Engine",
    detail:
      "Subscription plan billing, webhooks with HMAC-SHA256 signature verification, and recurring invoice events.",
  },
  {
    name: "Firebase FCM",
    category: "AI & Services",
    projectUsed: "SmartERP",
    architecturalRole: "Cross-Platform Push Notifications",
    detail:
      "Real-time event fan-out notifying employees of attendance updates and manager approval events.",
  },
];

const CATEGORIES = [
  {
    name: "Languages",
    icon: Code2,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgBadge: "bg-cyan-950/40 text-cyan-300",
  },
  {
    name: "Frontend",
    icon: Layout,
    color: "text-sky-400",
    borderColor: "border-sky-500/30",
    bgBadge: "bg-sky-950/40 text-sky-300",
  },
  {
    name: "Backend",
    icon: Server,
    color: "text-indigo-400",
    borderColor: "border-indigo-500/30",
    bgBadge: "bg-indigo-950/40 text-indigo-300",
  },
  {
    name: "Databases",
    icon: Database,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    bgBadge: "bg-emerald-950/40 text-emerald-300",
  },
  {
    name: "Infrastructure",
    icon: Cloud,
    color: "text-amber-400",
    borderColor: "border-amber-500/30",
    bgBadge: "bg-amber-950/40 text-amber-300",
  },
  {
    name: "AI & Services",
    icon: Cpu,
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    bgBadge: "bg-purple-950/40 text-purple-300",
  },
] as const;

export default function TechEcosystem() {
  const [selectedTech, setSelectedTech] = useState<TechNode>(VERIFIED_TECH_MAP[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter((cat) => {
      if (activeCategory !== "ALL" && cat.name !== activeCategory) {
        return false;
      }
      return true;
    });
  }, [activeCategory]);

  const handleSelectTech = (tech: TechNode) => {
    playTick(600);
    setSelectedTech(tech);
  };

  const handleCategoryFilter = (catName: string) => {
    playTick(740);
    setActiveCategory(catName);
  };

  return (
    <section
      id="skills"
      aria-label="Technical Ecosystem & Architecture Map"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12"
    >
      <SectionHeading
        kicker="Technical Ecosystem"
        title="Interactive System Architecture Map"
        subtitle="Not a flat list of logos. An interactive dependency topology showing where each verified language, database, queue, and cloud system operates within production software."
        watermark="03 // TOPOLOGY"
      />

      {/* Interactive Telemetry Controls: Search & Category Chips */}
      <div className="space-y-4 p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/10 backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Instant Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by technology, DB, or architecture..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input w-full pl-9.5 pr-8 py-2 text-xs font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            SHOWING: <strong className="text-slate-900 dark:text-cyan-400">{VERIFIED_TECH_MAP.length}</strong> VERIFIED SKILLS
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-200 dark:border-white/5">
          <button
            onClick={() => handleCategoryFilter("ALL")}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-mono transition-all border cursor-pointer",
              activeCategory === "ALL"
                ? "bg-cyan-500/20 border-cyan-500 text-cyan-700 dark:text-cyan-300 font-bold shadow-xs"
                : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            ALL ({VERIFIED_TECH_MAP.length})
          </button>

          {CATEGORIES.map((cat) => {
            const count = VERIFIED_TECH_MAP.filter((t) => t.category === cat.name).length;
            const isCurrent = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => handleCategoryFilter(cat.name)}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-mono transition-all border flex items-center gap-1.5 cursor-pointer",
                  isCurrent
                    ? "bg-cyan-500/20 border-cyan-500 text-cyan-700 dark:text-cyan-300 font-bold shadow-xs"
                    : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Architecture Map & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Cascading Architecture System Layers */}
        <div className="lg:col-span-7 space-y-4">
          {filteredCategories.map((cat, idx) => {
            const Icon = cat.icon;
            let items = VERIFIED_TECH_MAP.filter((t) => t.category === cat.name);

            if (searchQuery.trim()) {
              const query = searchQuery.toLowerCase();
              items = items.filter(
                (item) =>
                  item.name.toLowerCase().includes(query) ||
                  item.architecturalRole.toLowerCase().includes(query) ||
                  item.detail.toLowerCase().includes(query) ||
                  item.projectUsed.toLowerCase().includes(query)
              );
            }

            if (items.length === 0) return null;

            return (
              <div key={cat.name} className="space-y-2">
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <Icon className={cn("w-4 h-4", cat.color)} />
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-700 dark:text-slate-300 font-medium">
                      {cat.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                    LAYER 0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/5 backdrop-blur-xs">
                  {items.map((item) => {
                    const isSelected = selectedTech.name === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleSelectTech(item)}
                        onMouseEnter={() => handleSelectTech(item)}
                        className={cn(
                          "px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border flex items-center gap-1.5 cursor-pointer",
                          isSelected
                            ? "bg-cyan-500/20 border-cyan-400 text-cyan-900 dark:text-white shadow-md shadow-cyan-950/20 dark:shadow-cyan-950/50 font-semibold"
                            : "bg-white dark:bg-white/3 border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/8 hover:border-slate-300 dark:hover:border-white/10"
                        )}
                        data-cursor="INSPECT"
                      >
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full",
                            isSelected ? "bg-cyan-500 dark:bg-cyan-400 animate-pulse" : "bg-slate-400 dark:bg-slate-600"
                          )}
                        />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>

                {idx < filteredCategories.length - 1 && (
                  <div className="flex justify-center my-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-slate-300 dark:text-slate-700" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Selected Technology Context Inspector */}
        <SpotlightCard
          spotlightColor="rgba(34, 211, 238, 0.14)"
          borderColor="rgba(34, 211, 238, 0.45)"
          className="lg:col-span-5 sticky top-28 p-6 bg-white dark:bg-black/70 border border-slate-200 dark:border-cyan-500/40 shadow-2xl shadow-cyan-950/10 dark:shadow-cyan-950/40 space-y-6"
        >
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
                SYSTEM INSPECTOR
              </span>
            </div>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
              {selectedTech.category}
            </span>
          </div>

          <div>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {selectedTech.name}
            </h4>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-300/90 block mt-1 font-medium">
              Architectural Role: {selectedTech.architecturalRole}
            </span>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block">
              Verified Project Usage
            </span>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/3 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>{selectedTech.projectUsed}</span>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block">
              Technical Implementation Mechanics
            </span>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-white/2 p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
              {selectedTech.detail}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>PROVENANCE: RESUME OF PREETHAM GOWDA B</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">VERIFIED</span>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
