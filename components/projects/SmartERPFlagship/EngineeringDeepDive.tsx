"use client";

import { useState } from "react";
import { ShieldCheck, Bot, Cpu, AlertTriangle, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Challenge {
  id: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  problem: string;
  vulnerabilityRisk: string;
  engineeringSolution: string;
  architectureOutcome: string;
}

const CHALLENGES: Challenge[] = [
  {
    id: "rls",
    title: "Database-Level RLS vs Application-Level Filtering",
    category: "Multi-Tenant Security",
    icon: ShieldCheck,
    problem:
      "Traditional SaaS platforms filter tenant data in application code via 'WHERE company_id = ?'. A single missing WHERE clause in an obscure endpoint can leak competitor company payroll or customer records.",
    vulnerabilityRisk:
      "Critical IDOR / BOLA / Cross-tenant data leakage if an endpoint forgets tenant filtering.",
    engineeringSolution:
      "Enforced PostgreSQL Row-Level Security (RLS) directly inside Neon PostgreSQL. When a request arrives, Node.js AsyncLocalStorage resolves the authenticated company_id and executes `SET LOCAL app.current_company_id = '...'` in the database transaction. PostgreSQL policies reject queries that touch unauthorized rows, regardless of query syntax.",
    architectureOutcome:
      "Mathematically rigorous tenant isolation at the database layer. Even raw queries or unvetted developer handlers cannot bypass tenant boundaries.",
  },
  {
    id: "react-ai",
    title: "Gemini ReAct Loop with Prompt-Injection Defenses",
    category: "AI & Autonomous Systems",
    icon: Bot,
    problem:
      "Integrating an autonomous AI agent in an enterprise ERP poses severe security risks if user prompts can override system instructions, exfiltrate other tenant data, or trigger unapproved state-changing operations.",
    vulnerabilityRisk:
      "Prompt injection attacks, unauthorized database updates, or leaking confidential ERP financial figures.",
    engineeringSolution:
      "Built a strict ReAct (Reasoning + Acting) loop with pre-flight prompt sanitization, structured JSON schema tool-calling, and explicit server-side RBAC validation on every tool execution. The LLM cannot directly access the database; it can only request execution of strictly bounded domain tools that enforce the caller's tenant context.",
    architectureOutcome:
      "Safe, autonomous task assistance (inventory queries, attendance summaries, schedule coordination) without compromising company tenant boundaries.",
  },
  {
    id: "bullmq-queue",
    title: "Asynchronous Financial Operations & Distributed Queues",
    category: "Distributed Systems",
    icon: Cpu,
    problem:
      "Running monthly payroll calculations, invoice batch generation, or multi-user push notifications synchronously inside HTTP request handlers causes gateway timeouts and risks incomplete transactions if a connection drops.",
    vulnerabilityRisk:
      "HTTP 504 gateway timeouts, partial payroll calculation states, and duplicate charge processing.",
    engineeringSolution:
      "Decoupled long-running operations using Redis and BullMQ. Created idempotent worker jobs that acquire distributed locks per tenant, record progression in Redis, and execute atomic PostgreSQL transactions with automated retry backoffs.",
    architectureOutcome:
      "Zero HTTP blocking on heavy operations, guaranteed at-least-once delivery with idempotency guards, and instant real-time status updates via WebSockets.",
  },
];

export default function EngineeringDeepDive() {
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(CHALLENGES[0]);

  return (
    <div className="space-y-6 pt-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
            Stage 06 // Engineering Depth
          </span>
          <h4 className="text-2xl font-bold text-white tracking-tight">
            Key Architectural Challenges & Hardened Solutions
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-400">
          Root-cause engineering analysis
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {CHALLENGES.map((challenge) => {
          const Icon = challenge.icon;
          const isSelected = activeChallenge.id === challenge.id;
          return (
            <button
              key={challenge.id}
              onClick={() => setActiveChallenge(challenge)}
              className={cn(
                "p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between gap-3",
                isSelected
                  ? "bg-emerald-950/50 border-emerald-500/60 shadow-lg shadow-emerald-950/30 text-white"
                  : "bg-white/2 border-white/5 hover:bg-white/5 text-slate-400 hover:text-slate-200"
              )}
              data-cursor="INSPECT"
            >
              <div className="flex items-center justify-between">
                <div
                  className={cn(
                    "p-2 rounded-lg",
                    isSelected
                      ? "bg-emerald-500/20 text-emerald-300"
                      : "bg-white/5 text-slate-400"
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-500">
                  {challenge.category}
                </span>
              </div>
              <span className="text-xs font-semibold leading-snug">
                {challenge.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="p-6 rounded-2xl bg-black/60 border border-emerald-500/30 space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h5 className="text-lg font-bold text-white flex items-center gap-2">
            <activeChallenge.icon className="w-5 h-5 text-emerald-400" />
            {activeChallenge.title}
          </h5>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
            {activeChallenge.category}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs leading-relaxed">
          {/* Problem / Risk */}
          <div className="p-4 rounded-xl bg-red-950/15 border border-red-500/20 space-y-2">
            <div className="flex items-center gap-1.5 text-red-400 font-mono font-medium">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>THE ARCHITECTURAL PROBLEM & RISK</span>
            </div>
            <p className="text-slate-300">{activeChallenge.problem}</p>
            <div className="pt-2 border-t border-red-500/10 text-red-300/80 font-mono">
              Risk: {activeChallenge.vulnerabilityRisk}
            </div>
          </div>

          {/* Solution & Outcome */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
              <Check className="w-3.5 h-3.5 shrink-0" />
              <span>THE HARDENED ENGINEERING SOLUTION</span>
            </div>
            <p className="text-slate-300">{activeChallenge.engineeringSolution}</p>
            <div className="pt-2 border-t border-emerald-500/20 text-emerald-300 font-mono">
              Outcome: {activeChallenge.architectureOutcome}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
