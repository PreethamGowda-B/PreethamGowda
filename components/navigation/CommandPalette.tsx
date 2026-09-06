"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Terminal,
  ExternalLink,
  Layers,
  Copy,
  Check,
  Building2,
  Calendar,
  Sparkles,
  User,
  GraduationCap,
  Briefcase,
  Mail,
  X,
  Sun,
  Moon,
} from "lucide-react";
import confetti from "canvas-confetti";
import { RESUME_DATA } from "@/lib/resume-data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { scrollToTarget } from "@/lib/scroll";
import { useTheme } from "@/components/ui/ThemeProvider";

interface PaletteItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Navigation" | "Projects" | "Actions" | "Social";
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  badge?: string;
}

export default function CommandPalette() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const navigateTo = (selector: string) => {
    setIsOpen(false);
    scrollToTarget(selector);
  };

  const items: PaletteItem[] = useMemo(
    () => [
      {
        id: "smarterp-arch",
        title: "SmartERP — 7-Layer Architecture",
        subtitle: "Inspect multi-tenant PostgreSQL RLS, AsyncLocalStorage & ReAct agent",
        category: "Projects",
        icon: Layers,
        badge: "Flagship",
        action: () => navigateTo("#smarterp-architecture"),
      },
      {
        id: "smarterp-tracer",
        title: "SmartERP — Live Flow Simulator",
        subtitle: "Simulate tenant isolation queries, AI reasoning & BullMQ jobs",
        category: "Projects",
        icon: Terminal,
        badge: "Interactive",
        action: () => navigateTo("#flow-simulator"),
      },
      {
        id: "smarterp-portals",
        title: "SmartERP — 5 RBAC Portals",
        subtitle: "Owner, HR, Employee, Customer & Super Admin interfaces",
        category: "Projects",
        icon: Building2,
        action: () => navigateTo("#smarterp-portals"),
      },
      {
        id: "prozync-ai-project",
        title: "Prozync AI — Cybersecurity Platform",
        subtitle: "AI-assisted threat investigation, anomaly detection & security ops",
        category: "Projects",
        icon: Terminal,
        badge: "Building",
        action: () => navigateTo("#prozync-ai"),
      },
      {
        id: "kamadhenu-project",
        title: "Kamadhenu Honey Farms",
        subtitle: "Direct-to-consumer responsive e-commerce web application",
        category: "Projects",
        icon: Sparkles,
        badge: "E-Commerce",
        action: () => navigateTo("#kamadhenu"),
      },
      {
        id: "timetable-project",
        title: "Master Timetable Portal",
        subtitle: "Academic schedule coordination & relational database integration",
        category: "Projects",
        icon: Calendar,
        badge: "Management",
        action: () => navigateTo("#master-timetable"),
      },
      {
        id: "nav-tech-map",
        title: "Interactive System Map",
        subtitle: "Visual ecosystem of verified languages, databases, cloud & AI",
        category: "Navigation",
        icon: Terminal,
        action: () => navigateTo("#skills"),
      },
      {
        id: "nav-journey",
        title: "Engineering Journey & Story",
        subtitle: "Progressive timeline from Diploma CS to production SaaS",
        category: "Navigation",
        icon: User,
        action: () => navigateTo("#about"),
      },
      {
        id: "nav-experience",
        title: "Professional Experience",
        subtitle: "Syslog Technologies & VR Institute internships",
        category: "Navigation",
        icon: Briefcase,
        action: () => navigateTo("#experience"),
      },
      {
        id: "nav-education",
        title: "Academic Foundation",
        subtitle: "B.Tech in AI & ML + Diploma in Computer Science (8.0 CGPA)",
        category: "Navigation",
        icon: GraduationCap,
        action: () => navigateTo("#education"),
      },
      {
        id: "nav-contact",
        title: "Contact & Dispatch",
        subtitle: "Direct email dispatch and verified coordinate transmission",
        category: "Navigation",
        icon: Mail,
        action: () => navigateTo("#contact"),
      },
      {
        id: "action-copy-email",
        title: "Copy Verified Email",
        subtitle: RESUME_DATA.personal.email,
        category: "Actions",
        icon: copiedId === "email" ? Check : Copy,
        action: () => handleCopy(RESUME_DATA.personal.email, "email"),
      },
      {
        id: "action-copy-phone",
        title: "Copy Verified Phone",
        subtitle: RESUME_DATA.personal.phone,
        category: "Actions",
        icon: copiedId === "phone" ? Check : Copy,
        action: () => handleCopy(RESUME_DATA.personal.phone, "phone"),
      },
      {
        id: "action-live-smarterp",
        title: "Launch SmartERP Live Production",
        subtitle: "Open https://prozync.in in new tab",
        category: "Actions",
        icon: ExternalLink,
        badge: "Live",
        action: () => window.open("https://prozync.in", "_blank"),
      },
      {
        id: "action-toggle-theme",
        title: theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme",
        subtitle:
          theme === "dark"
            ? "Activate clean porcelain light aesthetic"
            : "Activate cinematic dark cyberpunk mode",
        category: "Actions",
        icon: theme === "dark" ? Sun : Moon,
        badge: "Theme",
        action: () => {
          toggleTheme();
          setIsOpen(false);
        },
      },
      {
        id: "action-github",
        title: "Explore 8+ Projects on GitHub",
        subtitle: "github.com/PreethamGowda-B (1,427+ contributions)",
        category: "Social",
        icon: GithubIcon,
        badge: "8+ Work",
        action: () => window.open(RESUME_DATA.links.github, "_blank"),
      },
      {
        id: "action-linkedin",
        title: "Connect on LinkedIn",
        subtitle: "Preetham Gowda B",
        category: "Social",
        icon: LinkedinIcon,
        action: () => window.open(RESUME_DATA.links.linkedin, "_blank"),
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [copiedId, theme]
  );

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleCustomOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation within palette
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Dialog Body */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#0d1117] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden z-10 flex flex-col max-h-[75vh]"
          >
            {/* Header / Search Input */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-white/2">
              <Search className="w-5 h-5 text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a command, project, or layer (e.g. 'RLS', 'Portals', 'Syslog')..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                className="palette-input font-sans sm:text-base"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Filtered Results List */}
            <div className="overflow-y-auto p-2 space-y-1 divide-y divide-white/5">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-slate-500 font-mono text-sm">
                  No matching systems or commands found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => item.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between gap-3 transition-colors ${
                        isSelected
                          ? "bg-cyan-500/15 border border-cyan-500/40 text-white"
                          : "text-slate-300 hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected
                              ? "bg-cyan-500/20 text-cyan-300"
                              : "bg-white/5 text-slate-400"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <div className="text-sm font-medium flex items-center gap-2">
                            <span>{item.title}</span>
                            {item.badge && (
                              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-400 truncate">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 shrink-0 hidden sm:inline">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Telemetry */}
            <div className="px-4 py-2.5 bg-black/40 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                    ↑↓
                  </kbd>{" "}
                  Navigate
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                    ↵
                  </kbd>{" "}
                  Execute
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                    ESC
                  </kbd>{" "}
                  Exit
                </span>
              </div>
              <span className="text-cyan-400/80">PREETHAM // COMMAND OS</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
