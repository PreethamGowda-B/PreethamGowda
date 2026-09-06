"use client";

import { useState } from "react";
import {
  Building2,
  Users,
  UserCheck,
  Briefcase,
  ShieldAlert,
  CheckCircle2,
  Lock,
  Eye,
  Key,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PortalInfo {
  id: string;
  name: string;
  roleBadge: string;
  icon: React.ComponentType<{ className?: string }>;
  summary: string;
  primaryFeatures: string[];
  securityScope: string;
  samplePath: string;
}

const PORTALS: PortalInfo[] = [
  {
    id: "owner",
    name: "Owner Portal",
    roleBadge: "ORGANIZATIONAL EXECUTIVE",
    icon: Building2,
    summary:
      "Full operational dashboard for tenant enterprise owners. Provides aggregate revenue analytics, subscription management via Razorpay, department auditing, and role delegations.",
    primaryFeatures: [
      "Company profile & multi-branch configuration",
      "Razorpay SaaS subscription & plan upgrade checkout",
      "Executive analytics on revenue, jobs, and attendance",
      "Role delegations and tenant-wide audit logging",
    ],
    securityScope: "Restricted to authenticated Owner session for specific company_id",
    samplePath: "/owner/dashboard",
  },
  {
    id: "hr",
    name: "HR Management Portal",
    roleBadge: "HUMAN RESOURCES",
    icon: Users,
    summary:
      "Complete employee management suite. Automates monthly payroll batches through BullMQ, reviews attendance discrepancies, manages leave approvals, and provisions staff.",
    primaryFeatures: [
      "Employee directory & onboarding workflows",
      "Attendance verification and manual punch correction",
      "Automated batch payroll computation & salary slip generation",
      "Leave request authorization and department structuring",
    ],
    securityScope: "Access to employee records strictly within company scope; no billing control",
    samplePath: "/hr/payroll",
  },
  {
    id: "employee",
    name: "Employee Self-Service Portal",
    roleBadge: "STAFF & WORKFORCE",
    icon: UserCheck,
    summary:
      "Lightweight, responsive daily workspace for staff. Enables check-in/out, viewing job assignments, submitting material requests to inventory, and downloading payslips.",
    primaryFeatures: [
      "Daily geo/timestamped attendance check-in & check-out",
      "Active job assignments and task status updates",
      "Material requisition submissions to inventory",
      "Personal salary slip history and leave requests",
    ],
    securityScope: "Scored exclusively to employee's own user_id within their company",
    samplePath: "/employee/attendance",
  },
  {
    id: "customer",
    name: "Customer Portal",
    roleBadge: "EXTERNAL CLIENTS",
    icon: Briefcase,
    summary:
      "Dedicated client portal allowing external customers to track job progression in real-time, submit service inquiries, review quotes, and communicate directly with staff.",
    primaryFeatures: [
      "Real-time tracking of active job milestones",
      "Direct quote review and status verification",
      "Support messaging and documentation uploads",
      "Invoice and billing history view",
    ],
    securityScope: "Isolated to records explicitly associated with customer customer_id",
    samplePath: "/customer/orders",
  },
  {
    id: "super-admin",
    name: "Super Admin Portal",
    roleBadge: "PLATFORM GOVERNANCE",
    icon: ShieldAlert,
    summary:
      "Platform-level control center. Provisions new company tenants, monitors overall platform server health, manages feature toggles, and tracks SaaS subscription compliance.",
    primaryFeatures: [
      "Tenant provisioning, onboarding, and suspension controls",
      "Global platform telemetry & Neon database connection health",
      "System-wide subscription status and billing compliance",
      "Audit trail monitoring across cross-tenant boundaries",
    ],
    securityScope: "Restricted to platform administrators; protected by multi-factor auth guards",
    samplePath: "/admin/tenants",
  },
];

export default function PortalsShowcase() {
  const [activePortal, setActivePortal] = useState<PortalInfo>(PORTALS[0]);

  return (
    <div id="smarterp-portals" className="space-y-6 pt-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">
            Stage 05 // Surface Architecture
          </span>
          <h4 className="text-2xl font-bold text-white tracking-tight">
            5 Role-Based Organizational Portals
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-400">
          Independent portals isolated by RBAC & Session Context
        </span>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {PORTALS.map((portal) => {
          const Icon = portal.icon;
          const isSelected = activePortal.id === portal.id;
          return (
            <button
              key={portal.id}
              onClick={() => setActivePortal(portal)}
              className={cn(
                "p-3 rounded-xl border text-left transition-all duration-200 flex flex-col gap-2",
                isSelected
                  ? "bg-indigo-950/60 border-indigo-500/60 shadow-lg shadow-indigo-950/40 text-white"
                  : "bg-white/2 border-white/5 hover:bg-white/5 text-slate-400 hover:text-slate-200"
              )}
              data-cursor="PORTAL"
            >
              <div className="flex items-center justify-between">
                <Icon
                  className={cn(
                    "w-4 h-4",
                    isSelected ? "text-indigo-400" : "text-slate-500"
                  )}
                />
                <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5">
                  RBAC
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold block">{portal.name}</span>
                <span className="text-[10px] text-slate-500 block truncate">
                  {portal.roleBadge}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Portal Details Card */}
      <div className="p-6 rounded-2xl bg-black/60 border border-indigo-500/30 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300">
              <activePortal.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h5 className="text-xl font-bold text-white">
                  {activePortal.name}
                </h5>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                  {activePortal.roleBadge}
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Route Prefix: {activePortal.samplePath}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
            <Lock className="w-3.5 h-3.5 text-indigo-400" />
            <span>Strict Role Enforcement</span>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {activePortal.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h6 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Primary Verified Modules
            </h6>
            <ul className="space-y-2">
              {activePortal.primaryFeatures.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-slate-300"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h6 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Security Scope & Boundaries
            </h6>
            <div className="p-3.5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
              <div className="text-xs text-indigo-200 font-mono">
                {activePortal.securityScope}
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Role authorization is validated server-side on every API route handler.
                Frontend route guards enhance UX, but the backend Node.js middleware
                is the final security authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
