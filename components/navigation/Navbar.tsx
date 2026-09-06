"use client";

import { useState, useEffect } from "react";
import { RESUME_DATA } from "@/lib/resume-data";
import { Menu, X, ArrowUpRight, Command, Sun, Moon, Volume2, VolumeX } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";
import { scrollToTarget } from "@/lib/scroll";
import { useTheme } from "@/components/ui/ThemeProvider";
import { isSoundEnabled, toggleSound, playTick, playGlide } from "@/lib/sound";

const NAV_ITEMS = [
  { label: "SmartERP", href: "#smarterp" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#smarterp-architecture" },
  { label: "System Map", href: "#skills" },
  { label: "Journey", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [soundOn, setSoundOn] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const handleSoundChange = (e: Event) => {
      const custom = e as CustomEvent<{ enabled: boolean }>;
      if (custom.detail) {
        setSoundOn(custom.detail.enabled);
      }
    };
    window.addEventListener("sound-state-change", handleSoundChange);
    return () => window.removeEventListener("sound-state-change", handleSoundChange);
  }, []);

  const handleToggleSound = () => {
    const next = toggleSound();
    setSoundOn(next);
  };

  const handleThemeChange = () => {
    playTick(soundOn ? 880 : 0);
    toggleTheme();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Hero / Home Section Guard:
      // When at or near the top of the page, no navigation tab should be selected.
      if (scrollY < 300) {
        setActiveSection("");
        return;
      }

      // Check if user has scrolled to the bottom of the page
      if (
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 70
      ) {
        setActiveSection("contact");
        return;
      }

      // Order of sections on page taking into account nesting hierarchy
      // Note: #smarterp-architecture is nested inside #smarterp, which is inside #projects
      const sectionPriority = [
        "contact",
        "experience",
        "skills",
        "smarterp-architecture",
        "smarterp",
        "projects",
        "about",
      ];

      let currentActive = "";

      for (const sectionId of sectionPriority) {
        const el = document.getElementById(sectionId);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        // A section is active if its top is near or above the upper reading zone
        // and its bottom hasn't completely left view
        if (rect.top <= 260 && rect.bottom >= 140) {
          currentActive = sectionId;
          break;
        }
      }

      setActiveSection(currentActive);
    };

    // Run on initial mount to guarantee accurate state on page load
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const triggerCommandPalette = () => {
    playTick(780);
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    playGlide();
    scrollToTarget(href);
    const targetId = href.startsWith("#") ? href.slice(1) : href;
    if (!targetId || targetId === "hero") {
      setActiveSection("");
    } else {
      setActiveSection(targetId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8",
          scrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-6"
        )}
      >
        <div className="max-w-7xl mx-auto">
          <nav
            aria-label="Main Navigation"
            className={cn(
              "flex items-center justify-between px-3.5 sm:px-5 py-2 rounded-full transition-all duration-300",
              "border border-white/10 bg-[#0c0f17]/85 backdrop-blur-xl shadow-2xl shadow-black/80",
              scrolled && "border-cyan-500/25 shadow-cyan-950/30"
            )}
          >
            {/* Logo & Operational Telemetry - scrolls to top/hero */}
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-full px-1 cursor-pointer"
              title="Preetham Gowda B — Back to top"
            >
              <div className="h-7 w-7 rounded-full bg-linear-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-xs text-white shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
                PG
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-xs sm:text-sm text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {RESUME_DATA.personal.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">PROD BUILDER //</span> BANGALORE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 bg-white/3 px-3 py-1 rounded-full border border-white/5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 cursor-pointer",
                      isActive
                        ? "text-cyan-300 bg-cyan-950/70 border border-cyan-500/40 shadow-xs"
                        : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Quick Actions & Command Palette Trigger */}
            <div className="flex items-center gap-2">
              <button
                onClick={triggerCommandPalette}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-300 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 cursor-pointer"
                title="Open Command Palette (Cmd+K)"
                data-cursor="COMMANDS"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Commands</span>
                <kbd className="hidden sm:inline text-[10px] px-1 py-0.2 rounded bg-black/40 border border-white/10 text-slate-400">
                  ⌘K
                </kbd>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={handleThemeChange}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-400 transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 cursor-pointer"
                title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                data-cursor="THEME"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-300 transition-transform duration-300 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-500 transition-transform duration-300 hover:-rotate-12" />
                )}
              </button>

              {/* Web Audio Micro-Haptics Toggle */}
              <button
                onClick={handleToggleSound}
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full border transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 cursor-pointer",
                  soundOn
                    ? "bg-cyan-950/60 border-cyan-500/50 text-cyan-300 shadow-xs shadow-cyan-500/30"
                    : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-400 hover:text-slate-200"
                )}
                title={soundOn ? "Mute interactive audio" : "Enable interactive audio"}
                aria-label={soundOn ? "Mute interactive audio" : "Enable interactive audio"}
                data-cursor="AUDIO"
              >
                {soundOn ? (
                  <div className="flex items-center gap-0.5">
                    <span className="w-0.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
                    <span className="w-0.5 h-4 bg-cyan-300 rounded-full animate-pulse delay-75" />
                    <span className="w-0.5 h-2 bg-cyan-400 rounded-full animate-pulse delay-150" />
                  </div>
                ) : (
                  <VolumeX className="w-4 h-4" />
                )}
              </button>

              <div className="hidden md:flex items-center gap-1">
                <a
                  href={RESUME_DATA.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                  aria-label="GitHub Profile"
                  data-cursor="GITHUB"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={RESUME_DATA.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                  aria-label="LinkedIn Profile"
                  data-cursor="LINKEDIN"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-linear-to-r from-cyan-500 to-indigo-600 text-white hover:opacity-95 transition-opacity shadow-sm shadow-cyan-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                data-cursor="HIRE"
              >
                <span>Hire</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg cursor-pointer"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-20 pb-8 px-6 overflow-y-auto max-h-screen animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">
                Quick Navigation
              </span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerCommandPalette();
                }}
                className="text-xs font-mono px-2 py-1 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center gap-1.5 cursor-pointer"
              >
                <Command className="w-3 h-3" /> Command Menu
              </button>
            </div>

            {/* Mobile Theme & Audio Toggle Row */}
            <div className="grid grid-cols-2 gap-2 my-2">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-1.5">
                  {theme === "dark" ? (
                    <Moon className="w-3.5 h-3.5 text-cyan-400" />
                  ) : (
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                  )}
                  <span className="text-xs font-mono text-slate-300 capitalize">{theme}</span>
                </div>
                <button
                  onClick={handleThemeChange}
                  className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 cursor-pointer"
                >
                  Flip
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-1.5">
                  {soundOn ? (
                    <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                  )}
                  <span className="text-xs font-mono text-slate-300">
                    {soundOn ? "Audio On" : "Muted"}
                  </span>
                </div>
                <button
                  onClick={handleToggleSound}
                  className={cn(
                    "px-2 py-0.5 text-[10px] font-mono rounded border cursor-pointer",
                    soundOn
                      ? "bg-cyan-950 border-cyan-500/50 text-cyan-300"
                      : "bg-white/5 border-white/10 text-slate-300"
                  )}
                >
                  {soundOn ? "Mute" : "Unmute"}
                </button>
              </div>
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-xl font-semibold py-2.5 border-b border-white/5 flex items-center justify-between transition-colors cursor-pointer",
                    isActive
                      ? "text-cyan-300 pl-2 border-cyan-500/40 bg-cyan-950/20 rounded-lg"
                      : "text-slate-200 hover:text-cyan-400"
                  )}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className={cn("h-4 w-4", isActive ? "text-cyan-400" : "text-slate-600")} />
                </a>
              );
            })}
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-around py-3 bg-white/3 rounded-xl border border-white/5">
              <a
                href={RESUME_DATA.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={RESUME_DATA.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full py-3 rounded-xl font-semibold text-center bg-cyan-500 hover:bg-cyan-400 text-black block transition-colors cursor-pointer"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  );
}
