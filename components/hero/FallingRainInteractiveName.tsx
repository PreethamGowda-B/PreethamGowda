"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { playChime, playConfettiSound } from "@/lib/sound";

interface LetterData {
  id: string;
  char: string;
  wordIdx: number;
  letterIdx: number;
  initialY: number;
  initialX: number;
  initialRotate: number;
  dropDelay: number;
}

const WORDS = ["Preetham", "Gowda", "B"];
const SCRAMBLE_CHARS = "01*+•_~<>";

// Curated luxury gemstone & precious metal chromatic palette for hover
const LUXURY_PALETTE = [
  { text: "#38bdf8", glow: "rgba(56, 189, 248, 0.75)" }, // Celestial Diamond Cyan
  { text: "#a5b4fc", glow: "rgba(165, 180, 252, 0.75)" }, // Imperial Royal Lavender
  { text: "#fde047", glow: "rgba(253, 224, 71, 0.75)" }, // Champagne Gold
  { text: "#f472b6", glow: "rgba(244, 114, 182, 0.75)" }, // Rose Quartz
  { text: "#6ee7b7", glow: "rgba(110, 231, 183, 0.75)" }, // Mint Jade
  { text: "#60a5fa", glow: "rgba(96, 165, 250, 0.75)" }, // Electric Azure
  { text: "#d8b4fe", glow: "rgba(216, 180, 254, 0.75)" }, // Ethereal Amethyst
  { text: "#f8fafc", glow: "rgba(248, 250, 252, 0.85)" }, // Platinum Diamond
];

export default function FallingRainInteractiveName() {
  const [replayCount, setReplayCount] = useState(0);
  const [isSettled, setIsSettled] = useState(false);
  const [scrambleMap, setScrambleMap] = useState<Record<string, string>>({});
  const [hoveredLetterId, setHoveredLetterId] = useState<string | null>(null);
  const [letterColorMap, setLetterColorMap] = useState<Record<string, number>>({});
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(media.matches);
  }, []);

  // Generate randomized float trajectories for gentle rain-drop descent
  const letters: LetterData[] = useMemo(() => {
    const list: LetterData[] = [];

    WORDS.forEach((word, wordIdx) => {
      word.split("").forEach((char, letterIdx) => {
        const id = `${wordIdx}-${letterIdx}-${replayCount}`;
        // Floating rain height: gentle descent
        const initialY = -220 - Math.random() * 180;
        // Mild wind drift
        const initialX = (Math.random() - 0.5) * 40;
        // Subtle natural rotation while drifting down
        const initialRotate = (Math.random() - 0.5) * 60;
        // Staggered slow rain delays (0.12s to 0.75s)
        const dropDelay = 0.12 + Math.random() * 0.65;

        list.push({
          id,
          char,
          wordIdx,
          letterIdx,
          initialY,
          initialX,
          initialRotate,
          dropDelay,
        });
      });
    });

    return list;
  }, [replayCount]);

  // Slow, cinematic rain descent & resolution
  useEffect(() => {
    if (prefersReducedMotion) {
      setIsSettled(true);
      return;
    }

    setIsSettled(false);

    // Initial scramble state while drifting
    const initialScramble: Record<string, string> = {};
    letters.forEach((l) => {
      initialScramble[l.id] =
        SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
    });
    setScrambleMap(initialScramble);

    // Smooth scramble interval as letters slowly glide down
    const interval = setInterval(() => {
      setScrambleMap((prev) => {
        const next: Record<string, string> = { ...prev };
        letters.forEach((l) => {
          if (Math.random() > 0.5) {
            next[l.id] =
              SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        });
        return next;
      });
    }, 60);

    // Lock each letter gently into place as its rain drop completes landing
    letters.forEach((l) => {
      const landTime = (l.dropDelay + 1.25) * 1000;
      setTimeout(() => {
        setScrambleMap((prev) => ({
          ...prev,
          [l.id]: l.char,
        }));
      }, landTime);
    });

    // Final graceful lock and transition to interactive settled mode
    const settleTimeout = setTimeout(() => {
      clearInterval(interval);
      const finalChars: Record<string, string> = {};
      letters.forEach((l) => {
        finalChars[l.id] = l.char;
      });
      setScrambleMap(finalChars);
      setIsSettled(true);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(settleTimeout);
    };
  }, [letters, prefersReducedMotion]);

  // Handle cursor moving over individual letter with luxury color shift
  const handleLetterHover = useCallback(
    (id: string) => {
      if (!isSettled) return;

      setHoveredLetterId(id);
      setLetterColorMap((prev) => {
        const currentColor = prev[id] ?? -1;
        const nextColor = (currentColor + 1) % LUXURY_PALETTE.length;
        const NOTES = [523.25, 587.33, 659.25, 698.46, 783.99, 880.0, 987.77, 1046.5];
        playChime(NOTES[nextColor % NOTES.length]);
        return {
          ...prev,
          [id]: nextColor,
        };
      });
    },
    [isSettled]
  );

  const handleLetterLeave = useCallback(() => {
    setHoveredLetterId(null);
  }, []);

  // Re-trigger slow rain descent on click with soft celebratory confetti
  const handleReplay = () => {
    playConfettiSound();
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.45 },
      colors: ["#38bdf8", "#818cf8", "#fde047", "#6ee7b7", "#f472b6"],
    });
    setReplayCount((c) => c + 1);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full select-none">
      {/* Volumetric Aurora Halo */}
      <div className="name-aurora-glow" aria-hidden="true" />

      {/* Slightly smaller, balanced editorial headline scale */}
      <h1
        onClick={handleReplay}
        title="Click to rain letters again"
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none relative z-10 flex flex-wrap justify-center items-center gap-x-3 sm:gap-x-4 gap-y-1.5 cursor-pointer group"
      >
        {WORDS.map((word, wordIdx) => {
          const wordLetters = letters.filter((l) => l.wordIdx === wordIdx);

          return (
            <span
              key={`${wordIdx}-${replayCount}`}
              className="inline-flex whitespace-nowrap"
            >
              {wordLetters.map((l) => {
                const isHovered = hoveredLetterId === l.id;
                const colorIdx = letterColorMap[l.id] ?? (l.letterIdx % LUXURY_PALETTE.length);
                const luxury = LUXURY_PALETTE[colorIdx];
                const displayedChar =
                  !isSettled && scrambleMap[l.id] ? scrambleMap[l.id] : l.char;

                return (
                  <motion.span
                    key={l.id}
                    onMouseEnter={() => handleLetterHover(l.id)}
                    onMouseLeave={handleLetterLeave}
                    onTouchStart={() => handleLetterHover(l.id)}
                    onTouchEnd={handleLetterLeave}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
                        : {
                            opacity: 0,
                            y: l.initialY,
                            x: l.initialX,
                            rotate: l.initialRotate,
                            scale: 0.7,
                          }
                    }
                    animate={
                      prefersReducedMotion
                        ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
                        : isSettled
                        ? isHovered
                          ? {
                              opacity: 1,
                              y: -9,
                              x: 0,
                              scale: 1.12,
                              rotate: (l.letterIdx % 2 === 0 ? 1 : -1) * 3,
                              transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 18,
                              },
                            }
                          : {
                              opacity: 1,
                              y: 0,
                              x: 0,
                              scale: 1,
                              rotate: 0,
                              transition: {
                                type: "spring",
                                stiffness: 220,
                                damping: 22,
                              },
                            }
                        : {
                            // Slow, graceful floating rain drop descent
                            opacity: [0, 0.7, 1, 1],
                            y: [l.initialY, l.initialY * 0.4, 10, 0],
                            x: [l.initialX, l.initialX * 0.4, 0, 0],
                            rotate: [l.initialRotate, l.initialRotate * 0.3, -3, 0],
                            scale: [0.75, 1.08, 0.98, 1],
                            transition: {
                              duration: 1.5,
                              delay: l.dropDelay,
                              ease: [0.2, 0.8, 0.2, 1],
                            },
                          }
                    }
                    style={{
                      color: isHovered ? luxury.text : undefined,
                      textShadow: isHovered
                        ? `0 0 16px ${luxury.glow}, 0 0 35px ${luxury.glow}`
                        : undefined,
                      filter: isHovered
                        ? `drop-shadow(0 2px 10px ${luxury.glow})`
                        : undefined,
                    }}
                    className={`inline-block transition-colors duration-250 cursor-pointer ${
                      !isHovered ? "animate-name-wave" : ""
                    }`}
                  >
                    {displayedChar}
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </h1>

      {/* Subtle Micro-Interaction Hint Badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: isSettled ? 0.65 : 0, y: isSettled ? 0 : 8 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-2.5 text-[11px] font-mono text-slate-400 flex items-center gap-2 pointer-events-none group-hover:opacity-95 transition-opacity"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>Move cursor on letters to illuminate • Click to replay rain</span>
      </motion.div>
    </div>
  );
}
