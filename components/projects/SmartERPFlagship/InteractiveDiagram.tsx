"use client";

import { useState } from "react";
import {
  Globe,
  Shield,
  KeyRound,
  Database,
  Cpu,
  Bot,
  Cloud,
  ChevronRight,
  Code2,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ArchitectureLayer {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  role: string;
  tech: string[];
  securityBoundary: string;
  description: string;
  codeSnippet: string;
}

const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: "client",
    name: "01 // Client & Presentation Surface",
    category: "Frontend",
    icon: Globe,
    role: "Next.js 14 App Router, React Server Components & Responsive UX",
    tech: ["Next.js 14", "React.js", "Tailwind CSS", "Radix UI"],
    securityBoundary: "Zero-trust client state; token held in secure HTTP-only session",
    description:
      "Enterprise portal surfaces for Owner, HR, Employee, Customer, and Super Admin. Server-rendered layouts deliver sub-second initial loads with client components handling interactive scheduling, payroll reviews, and real-time messaging.",
    codeSnippet: `// Protected Route Authorization Pattern
export default async function TenantDashboard({ params }: Props) {
  const session = await getServerSession();
  if (!session || !session.user.companyId) {
    redirect("/auth/login");
  }
  // Data fetch strictly relies on authenticated server session
  const stats = await getTenantMetrics(session.user.companyId);
  return <DashboardView data={stats} role={session.user.role} />;
}`,
  },
  {
    id: "api-gateway",
    name: "02 // API Gateway & Route Handlers",
    category: "API Layer",
    icon: Cloud,
    role: "REST APIs, Input Validation, Rate Limiting & Error Sanitization",
    tech: ["Node.js", "Express.js", "REST APIs", "CORS Guard"],
    securityBoundary: "Sanitizes all payload parameters; never leaks DB error traces",
    description:
      "Stateless API gateway routing requests to specialized services. Enforces rate limits, validates incoming request structures, and normalizes errors into standard HTTP contracts.",
    codeSnippet: `// API Request Boundary & Schema Validation
router.post("/api/jobs/dispatch",
  authMiddleware,
  rbacGuard(["OWNER", "HR"]),
  validateSchema(JobDispatchSchema),
  async (req, res) => {
    // Process verified tenant dispatch
    const result = await jobService.createJob(req.context, req.body);
    return res.status(201).json({ success: true, data: result });
  }
);`,
  },
  {
    id: "auth-rbac",
    name: "03 // Authentication & RBAC Engine",
    category: "Security",
    icon: KeyRound,
    role: "JWT Signing, Google OAuth 2.0 & Role Authorization",
    tech: ["JWT", "Google OAuth 2.0", "RBAC", "Bcrypt"],
    securityBoundary: "Cryptographic signature verification on every protected route",
    description:
      "Validates identity through dual mechanisms: email/password credentials with salted hashing, or Google OAuth 2.0. Resolves verified user roles across 5 organizational tiers.",
    codeSnippet: `// Role-Based Authorization Guard
export function rbacGuard(allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRole = req.user?.role;
    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: "Access Denied: Insufficient Role Privileges" });
    }
    next();
  };
}`,
  },
  {
    id: "tenant-isolation",
    name: "04 // Tenant Isolation Boundary",
    category: "Architecture",
    icon: Shield,
    role: "AsyncLocalStorage Context & Strict Company Scoping",
    tech: ["Node.js AsyncLocalStorage", "Tenant Context", "Zero Client Company_ID Trust"],
    securityBoundary: "Never trust client-supplied company_id; resolved purely server-side",
    description:
      "Node.js AsyncLocalStorage stores the authenticated tenant context across asynchronous execution pipelines. Prevents cross-tenant parameter injection and provides thread-safe context propagation.",
    codeSnippet: `// Server-Side Tenant Context Propagation
import { AsyncLocalStorage } from "node:async_hooks";
export const tenantStorage = new AsyncLocalStorage<{ companyId: string; userId: string }>();

export function withTenantContext(req, res, next) {
  const companyId = req.user.verifiedCompanyId; // Server-resolved
  tenantStorage.run({ companyId, userId: req.user.id }, () => {
    next();
  });
}`,
  },
  {
    id: "database-rls",
    name: "05 // PostgreSQL Row-Level Security (RLS)",
    category: "Storage",
    icon: Database,
    role: "Neon PostgreSQL with In-Engine Row Partitioning",
    tech: ["Neon PostgreSQL", "PostgreSQL RLS", "ACID Transactions", "Foreign Key Constraints"],
    securityBoundary: "Enforced by the database engine itself; impossible to leak via raw queries",
    description:
      "Even if application code fails to append 'WHERE company_id = ?', PostgreSQL RLS policies mathematically filter every SELECT, UPDATE, and DELETE query using the database session variable.",
    codeSnippet: `-- PostgreSQL Row-Level Security Definition
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON employees
  FOR ALL
  USING (company_id = current_setting('app.current_company_id')::uuid);

-- Set dynamically per transaction in Node.js pool
SET LOCAL app.current_company_id = 'tenant-uuid-here';`,
  },
  {
    id: "redis-bullmq",
    name: "06 // Redis & BullMQ Asynchronous Pipeline",
    category: "Queues",
    icon: Cpu,
    role: "Distributed Background Queues, Payroll Runs & Real-Time Sync",
    tech: ["Redis", "BullMQ", "Firebase FCM", "WebSockets"],
    securityBoundary: "Tenant ID encapsulated in job payloads; prevents cross-company task pollution",
    description:
      "Decouples long-running business logic (e.g. batch payroll calculations, notification fan-outs, invoice PDF generation) from the HTTP request-response cycle.",
    codeSnippet: `// Distributed BullMQ Worker
const payrollWorker = new Worker('payroll-queue', async (job) => {
  const { companyId, month, year } = job.data;
  // Executes with dedicated company context lock
  await executeTenantPayrollBatch(companyId, month, year);
}, { connection: redisConfig });`,
  },
  {
    id: "ai-gemini",
    name: "07 // Google Gemini AI ReAct Agent",
    category: "Intelligence",
    icon: Bot,
    role: "Autonomous ReAct Reasoning Loop with Prompt-Injection Defense",
    tech: ["Google Gemini API", "ReAct Loop", "Structured JSON Tool Calling", "Plugin System"],
    securityBoundary: "Agent actions are strictly verified against user RBAC before execution",
    description:
      "Autonomous AI assistant that plans, reasons, and executes ERP actions (querying inventory, scheduling meetings, drafting summaries). Built with prompt-injection defenses and schema validation.",
    codeSnippet: `// ReAct Loop Action Validator
async function executeAgentAction(companyId: string, userRole: string, action: AgentAction) {
  // Verify prompt injection heuristics
  if (detectInjectionPattern(action.promptInput)) {
    throw new SecurityException("Action blocked: Prompt injection anomaly detected");
  }
  // Enforce company boundaries inside tool execution
  return await toolRegistry[action.toolName].execute({ ...action.params, companyId });
}`,
  },
];

export default function InteractiveDiagram() {
  const [selectedLayer, setSelectedLayer] = useState<ArchitectureLayer>(
    ARCHITECTURE_LAYERS[4] // Default to PostgreSQL RLS
  );

  return (
    <div id="smarterp-architecture" className="space-y-6 pt-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Stage 03 // Systems Topology
            </span>
          </div>
          <h4 className="text-2xl font-bold text-white tracking-tight">
            Interactive 7-Layer Architecture
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-400">
          Click any layer to inspect security boundary & implementation
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Layer Selector Stack */}
        <div className="lg:col-span-5 space-y-2">
          {ARCHITECTURE_LAYERS.map((layer) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer.id === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer)}
                className={cn(
                  "w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group",
                  isSelected
                    ? "bg-cyan-950/60 border-cyan-500/60 shadow-lg shadow-cyan-950/40 text-white"
                    : "bg-white/2 border-white/5 hover:bg-white/5 hover:border-white/10 text-slate-400 hover:text-slate-200"
                )}
                data-cursor="INSPECT"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={cn(
                      "p-2 rounded-lg shrink-0",
                      isSelected
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-white/5 text-slate-400 group-hover:text-slate-200"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-mono font-medium block truncate">
                      {layer.name}
                    </span>
                    <span className="text-[11px] text-slate-500 block truncate">
                      {layer.category}
                    </span>
                  </div>
                </div>
                <ChevronRight
                  className={cn(
                    "w-4 h-4 shrink-0 transition-transform",
                    isSelected ? "text-cyan-400 translate-x-0.5" : "text-slate-600"
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Layer Inspector & Code Telemetry */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-black/60 border border-cyan-500/30 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                {selectedLayer.category} Layer
              </span>
              <h5 className="text-xl font-bold text-white tracking-tight">
                {selectedLayer.name}
              </h5>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {selectedLayer.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h6 className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              Security Boundary Enforcement
            </h6>
            <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-200">
              {selectedLayer.securityBoundary}
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedLayer.description}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                Implementation Pattern
              </span>
              <span className="text-slate-500 text-[10px]">PRODUCTION CONTEXT</span>
            </div>
            <pre className="p-4 rounded-xl bg-black/90 border border-white/10 font-mono text-[11px] sm:text-xs text-slate-300 overflow-x-auto leading-relaxed">
              <code>{selectedLayer.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
