"use client";

import { useState } from "react";
import { RESUME_DATA } from "@/lib/resume-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import confetti from "canvas-confetti";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { playConfettiSound, playTick } from "@/lib/sound";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    playTick(740);
    navigator.clipboard.writeText(text);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#22d3ee", "#818cf8", "#34d399"],
    });

    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const applyTemplate = (preset: string) => {
    playTick(660);
    if (preset === "role") {
      setFormData({
        ...formData,
        subject: "Full Stack Engineer Role // Opportunity",
        message:
          "Hi Preetham,\n\nWe came across your work architecting SmartERP and your full-stack systems background. We would love to discuss a software engineering opportunity with you.",
      });
    } else if (preset === "architecture") {
      setFormData({
        ...formData,
        subject: "Technical Architecture Consultation",
        message:
          "Hi Preetham,\n\nI was impressed by your PostgreSQL Row-Level Security and multi-tenant SaaS architecture in SmartERP. I'd love to connect and discuss system design.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playConfettiSound();
    const mailtoUrl = `mailto:${RESUME_DATA.personal.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Direct Communication & Dispatch Hub"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16"
    >
      <SectionHeading
        kicker="Direct Dispatch"
        title="Initiate Contact & Engineering Collaboration"
        subtitle="Open for full-time software engineering roles, technical architecture challenges, and serious product teams in Bangalore or remotely."
        watermark="06 // DISPATCH"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct Email Card */}
          <SpotlightCard
            spotlightColor="rgba(34, 211, 238, 0.14)"
            borderColor="rgba(34, 211, 238, 0.4)"
            className="p-6 bg-slate-50/90 dark:bg-white/2 border border-slate-200 dark:border-white/10 space-y-3 group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Verified Direct Email
              </span>
              <button
                onClick={() => copyToClipboard(RESUME_DATA.personal.email, "email")}
                className="text-xs font-mono flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors px-2 py-0.5 rounded bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 cursor-pointer"
                title="Copy email to clipboard"
                aria-label="Copy email"
                data-cursor="COPY"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors break-all flex items-center gap-2.5 cursor-pointer"
            >
              <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>{RESUME_DATA.personal.email}</span>
            </a>
          </SpotlightCard>

          {/* Direct Phone Card */}
          <SpotlightCard
            spotlightColor="rgba(99, 102, 241, 0.14)"
            borderColor="rgba(99, 102, 241, 0.4)"
            className="p-6 bg-slate-50/90 dark:bg-white/2 border border-slate-200 dark:border-white/10 space-y-3 group transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Direct Telephone
              </span>
              <button
                onClick={() => copyToClipboard(RESUME_DATA.personal.phone, "phone")}
                className="text-xs font-mono flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors px-2 py-0.5 rounded bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 cursor-pointer"
                title="Copy phone to clipboard"
                aria-label="Copy phone"
                data-cursor="COPY"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`tel:${RESUME_DATA.personal.phone}`}
              className="text-base sm:text-lg font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0" />
              <span>{RESUME_DATA.personal.phone}</span>
            </a>
          </SpotlightCard>

          {/* Location & Coordinates */}
          <SpotlightCard
            spotlightColor="rgba(52, 211, 153, 0.12)"
            borderColor="rgba(52, 211, 153, 0.35)"
            className="p-6 bg-slate-50/90 dark:bg-white/2 border border-slate-200 dark:border-white/10 space-y-2"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 block">
              Deployment Location
            </span>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-medium">
              <MapPin className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
              <span>{RESUME_DATA.personal.location}</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Based in Bangalore, India. Available for on-site software engineering roles in
              Bangalore as well as remote positions globally.
            </p>
          </SpotlightCard>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href={RESUME_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 hover:bg-white dark:hover:bg-white/5 transition-all flex items-center justify-between group shadow-xs cursor-pointer"
              data-cursor="GITHUB"
            >
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">
                <GithubIcon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-white" />
                <span className="text-xs font-semibold">GitHub Profile</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
            </a>

            <a
              href={RESUME_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-white/2 border border-slate-200 dark:border-white/10 hover:border-cyan-500/40 hover:bg-white dark:hover:bg-white/5 transition-all flex items-center justify-between group shadow-xs cursor-pointer"
              data-cursor="LINKEDIN"
            >
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white">
                <LinkedinIcon className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white" />
                <span className="text-xs font-semibold">LinkedIn Network</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Quick Message Dispatch Form */}
        <SpotlightCard
          spotlightColor="rgba(34, 211, 238, 0.12)"
          borderColor="rgba(34, 211, 238, 0.45)"
          className="lg:col-span-7 p-6 sm:p-8 bg-white/90 dark:bg-black/60 border border-slate-200 dark:border-cyan-500/30 space-y-6 shadow-xl shadow-cyan-950/5 dark:shadow-cyan-950/20"
        >
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                <span>Direct Mail Composer</span>
              </h4>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3" /> QUICK TEMPLATES
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Select a pre-filled template or author a customized dispatch below.
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => applyTemplate("role")}
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              + Engineering Role Inquiry
            </button>
            <button
              type="button"
              onClick={() => applyTemplate("architecture")}
              className="px-3 py-1.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              + Systems Design Discussion
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-mono text-slate-700 dark:text-slate-300 block"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-mono text-slate-700 dark:text-slate-300 block"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="text-xs font-mono text-slate-700 dark:text-slate-300 block"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                placeholder="Software Engineering Opportunity / Project Discussion"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="form-input"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs font-mono text-slate-700 dark:text-slate-300 block"
              >
                Message Body
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Hello Preetham, we reviewed your architecture on SmartERP and would like to invite you..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-input resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-linear-to-r from-cyan-500 to-indigo-600 text-white hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 cursor-pointer"
              data-cursor="SEND"
            >
              <Send className="w-4 h-4" />
              <span>Launch Mail Client</span>
            </button>

            {submitted && (
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-mono text-center pt-2">
                ✓ Message generated! Opening your default email client...
              </p>
            )}
          </form>
        </SpotlightCard>
      </div>
    </section>
  );
}
