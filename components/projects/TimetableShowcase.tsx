"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Database,
  CheckCircle2,
  AlertCircle,
  Table,
  Layers,
  Sparkles,
} from "lucide-react";
import { RESUME_DATA } from "@/lib/resume-data";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function TimetableShowcase() {
  const project = RESUME_DATA.projects.find((p) => p.id === "master-timetable")!;

  const [selectedDay, setSelectedDay] = useState<string>("Monday");
  const [selectedSlot, setSelectedSlot] = useState<number>(1);

  const scheduleDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const sampleSlots = [
    {
      period: 1,
      time: "09:00 - 10:00",
      subject: "Data Structures & Algorithms",
      batch: "CS-Section A",
      room: "Lab 3",
      status: "Verified Conflict-Free",
    },
    {
      period: 2,
      time: "10:00 - 11:00",
      subject: "Relational Database Systems",
      batch: "CS-Section A",
      room: "Hall 102",
      status: "Verified Conflict-Free",
    },
    {
      period: 3,
      time: "11:15 - 12:15",
      subject: "Full Stack Web Engineering",
      batch: "CS-Section B",
      room: "Lab 1",
      status: "Verified Conflict-Free",
    },
    {
      period: 4,
      time: "01:00 - 02:00",
      subject: "Operating Systems & Kernels",
      batch: "CS-Section A",
      room: "Hall 104",
      status: "Verified Conflict-Free",
    },
  ];

  const currentSlot =
    sampleSlots.find((s) => s.period === selectedSlot) || sampleSlots[0];

  return (
    <SpotlightCard
      id="master-timetable"
      spotlightColor="rgba(56, 189, 248, 0.15)"
      borderColor="rgba(56, 189, 248, 0.45)"
      className="p-6 sm:p-10 bg-linear-to-br from-sky-500/5 via-white dark:via-[#080d14] to-sky-500/5 dark:from-[#0c141c] dark:to-[#05080d] border border-sky-500/30 shadow-2xl shadow-sky-950/10 dark:shadow-sky-950/20"
    >
      {/* Cool Sky Ambient Glow */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-sky-500/15 text-sky-300 border border-sky-500/40">
                {project.badge}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Organization: <span className="text-slate-200">VR Institute Internship</span>
              </span>
            </div>
            <h4 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              {project.name}
            </h4>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>

          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 self-start md:self-auto flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-sky-400" />
            <span>PostgreSQL Relational Relays</span>
          </div>
        </div>

        {/* Narrative & Interactive Scheduling Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Technical Highlights */}
          <div className="lg:col-span-7 space-y-5">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block">
                Verified Engineering Contributions
              </span>
              <ul className="space-y-2.5">
                {project.bulletPoints.map((bp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{bp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
                <Table className="w-4 h-4" />
                <span>RELATIONAL DATA COORDINATION</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Structured PostgreSQL foreign keys ensure that no faculty member or lab resource
                can be doubly assigned to the same time period across parallel academic batches.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-sky-950/40 text-sky-200 border border-sky-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Interactive Matrix Inspector */}
          <div className="lg:col-span-5 p-5 rounded-2xl bg-black/70 border border-sky-500/30 space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-mono font-medium text-white">
                  Schedule Conflict Resolver
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                INTERACTIVE
              </span>
            </div>

            {/* Day Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {scheduleDays.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors shrink-0 ${
                    selectedDay === day
                      ? "bg-sky-500 text-slate-950 font-bold"
                      : "bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Slot Matrix List */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-slate-400 block">
                Inspect Academic Period Slots:
              </label>
              {sampleSlots.map((slot) => (
                <button
                  key={slot.period}
                  onClick={() => setSelectedSlot(slot.period)}
                  className={`w-full p-2.5 rounded-xl border text-xs text-left flex items-center justify-between transition-colors ${
                    selectedSlot === slot.period
                      ? "bg-sky-950/60 border-sky-500/60 text-white"
                      : "bg-white/2 border-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    <span className="font-semibold">{slot.subject}</span>
                  </div>
                  <span className="font-mono text-[11px] text-slate-400">
                    {slot.time}
                  </span>
                </button>
              ))}
            </div>

            {/* Slot Details Card */}
            <div className="p-3.5 rounded-xl bg-sky-950/30 border border-sky-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-sky-300">
                  {selectedDay} // Period {currentSlot.period}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                  {currentSlot.status}
                </span>
              </div>
              <div className="text-xs text-slate-300 font-sans">
                Assigned: <span className="font-semibold text-white">{currentSlot.batch}</span> ({currentSlot.room})
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                DB Constraint: &ldquo;UNIQUE(room_id, period_id, day_of_week)&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
