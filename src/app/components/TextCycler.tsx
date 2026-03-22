"use client";

import { useState, useEffect } from "react";

const LINES = [
  "building experiences & storytelling with play",
  "Generalist. 8+ yr experience",
  "0-1 tools + big ideas + interfaces",
];

const DISPLAY_MS = 3000;
const ANIM_MS = 250;

export default function TextCycler({ style }: { style?: React.CSSProperties }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("exit");
      setTimeout(() => {
        setIndex((i) => (i + 1) % LINES.length);
        setPhase("enter");
        setTimeout(() => setPhase("idle"), ANIM_MS);
      }, ANIM_MS);
    }, DISPLAY_MS);
    return () => clearInterval(interval);
  }, []);

  const transform =
    phase === "exit" ? "translateY(6px)" :
    phase === "enter" ? "translateY(12px)" :
    "translateY(0)";

  const opacity = phase === "idle" ? 1 : 0;

  return (
    <span
      style={{
        display: "inline-block",
        opacity,
        transform,
        transition: `opacity ${ANIM_MS}ms ease, transform ${ANIM_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
        ...style,
      }}
    >
      {LINES[index]}
    </span>
  );
}
