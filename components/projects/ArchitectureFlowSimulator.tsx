"use client";

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Cpu,
  Database,
  Lock,
  Bot,
  Play,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  ArrowRight,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SimulationMode = "tenant-query" | "ai-agent" | "background-queue";

interface Step {
  nodeId: string;
  title: string;
  log: string;
  detail: string;
  latency: string;
}

const SIMULATIONS: Record<
  SimulationMode,
  { name: string; icon: React.ComponentType<{ className?: string }>; steps: Step[] }
> = {
  "tenant-query": {
    name: "Tenant-Isolated Query Flow",
    icon: ShieldCheck,
    steps: [
      {
        nodeId: "client",
        title: "Authenticated Request",
        log: "POST /api/jobs [Bearer JWT with verified claims]",
        detail: "Client dispatches authenticated request from Owner/HR portal.",
        latency: "14ms",
      },
      {
        nodeId: "auth",
        title: "JWT & RBAC Validation",
        log: "Token verified. Role 'OWNER' authorized for company 'co_8921'.",
        detail: "Validates token signature, expiration, and role permissions.",
        latency: "8ms",
      },
      {
        nodeId: "als",
        title: "AsyncLocalStorage Context",
        log: "AsyncLocalStorage.enterWith({ companyId: 'co_8921' })",
        detail: "Binds company context to the current Node.js execution fiber.",
        latency: "2ms",
      },
      {
        nodeId: "rls",
        title: "PostgreSQL Row-Level Security",
        log: "SET LOCAL app.current_company_id = 'co_8921'; SELECT * FROM jobs;",
        detail: "Postgres RLS kernel blocks any record where company_id != 'co_8921'.",
        latency: "19ms",
      },
      {
        nodeId: "result",
        title: "Secure Tenant Response",
        log: "Status: 200 OK — 14 company-scoped records returned. Zero cross-tenant leakage.",
        detail: "Zero-leakage guarantees delivered to the client frontend.",
        latency: "5ms",
      },
    ],
  },
  "ai-agent": {
    name: "Gemini ReAct Agent Loop",
    icon: Bot,
    steps: [
      {
        nodeId: "client",
        title: "User Prompt Injected",
        log: "User: 'Summarize pending customer jobs for this month'",
        detail: "Natural language query entered into ERP assistant.",
        latency: "12ms",
      },
      {
        nodeId: "auth",
        title: "Prompt-Injection Defense",
        log: "Sanitizer: Passed input checks. No system override patterns detected.",
        detail: "Heuristic and structural validation shields the LLM prompt.",
        latency: "22ms",
      },
      {
        nodeId: "als",
        title: "Scoped Context Injection",
        log: "Injecting verified company context 'co_8921' into ReAct environment.",
        detail: "Agent context restricted exclusively to tenant data scope.",
        latency: "4ms",
      },
      {
        nodeId: "rls",
        title: "Tool Calling & Data Fetch",
        log: "Agent calls plugin: 'getPendingJobsSummary({ status: \"PENDING\" })'",
        detail: "Postgres RLS filters the exact jobs for the authenticated tenant.",
        latency: "34ms",
      },
      {
        nodeId: "result",
        title: "Structured Agent Output",
        log: "Gemini ReAct synthesis complete. Formatted action plan returned.",
        detail: "Synthesized executive summary ready for Owner review.",
        latency: "185ms",
      },
    ],
  },
  "background-queue": {
    name: "Redis & BullMQ Pipeline",
    icon: Cpu,
    steps: [
      {
        nodeId: "client",
        title: "Payroll Computation Triggered",
        log: "POST /api/payroll/calculate-batch [Month: Sep 2026]",
        detail: "HR initiates monthly payroll processing across all company employees.",
        latency: "15ms",
      },
      {
        nodeId: "auth",
        title: "RBAC Authorization",
        log: "Role 'HR' confirmed. Permissions: ['payroll.write'].",
        detail: "Server ensures caller has full payroll clearance.",
        latency: "6ms",
      },
      {
        nodeId: "als",
        title: "Job Enqueued in BullMQ",
        log: "BullMQ.add('calculatePayroll', { companyId: 'co_8921' }, { attempts: 3 })",
        detail: "Job pushed to Redis store without blocking HTTP thread.",
        latency: "9ms",
      },
      {
        nodeId: "rls",
        title: "Worker Process Execution",
        log: "Worker #2 dequeued job. Calculating attendance deduction & tax with RLS.",
        detail: "Isolated worker computes pay slips and stores audited records.",
        latency: "112ms",
      },
      {
        nodeId: "result",
        title: "Real-Time Notification Dispatch",
        log: "Firebase FCM broadcast dispatched: 'Payroll batch computation completed'.",
        detail: "Push notification alert delivered to Owner & HR dashboards.",
        latency: "42ms",
      },
    ],
  },
};

export default function ArchitectureFlowSimulator() {
  const [activeMode, setActiveMode] = useState<SimulationMode>("tenant-query");
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const simulation = SIMULATIONS[activeMode];

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCurrentStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < simulation.steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1200);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-black/75 border border-cyan-500/30 space-y-6 shadow-2xl relative overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div
        className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Header & Mode Switcher */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-500/40 mb-2">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Interactive System Flow Simulator</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            SmartERP Request Architecture Tracer
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Click a scenario and trace how security, tenant isolation, and AI pipelines execute.
          </p>
        </div>

        {/* Action Trigger with Magnetic Glow */}
        <button
          onClick={runSimulation}
          disabled={isRunning}
          className={cn(
            "inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 self-start md:self-auto shadow-lg",
            isRunning
              ? "bg-slate-800 text-slate-400 cursor-not-allowed"
              : "bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-cyan-500/30 hover:scale-105 active:scale-95"
          )}
          data-cursor="PLAY"
        >
          <Play className={cn("w-4 h-4 fill-current", isRunning && "animate-spin")} />
          <span>{isRunning ? "Tracing Signal..." : "Simulate Flow Execution"}</span>
        </button>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {(Object.keys(SIMULATIONS) as SimulationMode[]).map((mode) => {
          const item = SIMULATIONS[mode];
          const Icon = item.icon;
          const isSelected = activeMode === mode;
          return (
            <button
              key={mode}
              onClick={() => {
                setActiveMode(mode);
                setCurrentStepIndex(0);
                setIsRunning(false);
              }}
              className={cn(
                "px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 border transition-all duration-200",
                isSelected
                  ? "bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-md shadow-cyan-950/50 scale-[1.02]"
                  : "bg-white/3 border-white/10 text-slate-400 hover:text-white hover:bg-white/8"
              )}
            >
              <Icon className={cn("w-3.5 h-3.5", isSelected ? "text-cyan-400" : "text-slate-500")} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Visual Pipeline Nodes with Click-to-Inspect */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-5 gap-2.5 pt-2">
        {simulation.steps.map((s, idx) => {
          const isActive = idx === currentStepIndex;
          const isDone = idx < currentStepIndex;
          return (
            <button
              key={s.nodeId}
              onClick={() => {
                setCurrentStepIndex(idx);
                setIsRunning(false);
              }}
              className={cn(
                "p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between relative group",
                isActive
                  ? "bg-cyan-950/90 border-cyan-400 shadow-xl shadow-cyan-500/25 scale-105 z-20"
                  : isDone
                  ? "bg-white/4 border-cyan-800/40 text-slate-300 hover:border-cyan-500/30"
                  : "bg-white/2 border-white/5 text-slate-500 opacity-60 hover:opacity-80"
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                  STEP 0{idx + 1}
                </span>
                <span className="text-[10px] font-mono text-slate-500">
                  {s.latency}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-white block leading-snug">
                  {s.title}
                </span>
              </div>

              <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono uppercase text-slate-500">
                  {isActive ? "ACTIVE NODE" : isDone ? "COMPLETED" : "STANDBY"}
                </span>
                {isActive && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Terminal Telemetry Console Output */}
      <div className="relative z-10 p-4 rounded-2xl bg-black/90 border border-cyan-500/25 font-mono space-y-2">
        <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-white/10 pb-2">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-cyan-400">CONSOLE_OUTPUT // {simulation.steps[currentStepIndex].nodeId.toUpperCase()}</span>
          </div>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            STEP {currentStepIndex + 1} / 5 COMPLETE
          </span>
        </div>

        <div className="text-xs text-slate-200 py-1">
          <span className="text-cyan-400 select-none mr-2">&gt;</span>
          <span className="font-semibold">{simulation.steps[currentStepIndex].log}</span>
        </div>

        <p className="text-[11px] text-slate-400 border-t border-white/5 pt-2">
          <strong className="text-slate-300">Technical Context: </strong>
          {simulation.steps[currentStepIndex].detail}
        </p>
      </div>
    </div>
  );
}
