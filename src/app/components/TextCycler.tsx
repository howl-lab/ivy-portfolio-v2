"use client";

import { useState, useEffect } from "react";

const LINES = [
  "building experiences & storytelling with play",
  "Generalist. 8+ yr experience",
  "0-1 tools + big ideas + interfaces",
];

const DISPLAY_MS = 3000;
const ANIM_MS = 400;

export default function TextCycler({ style }: { style?: React.CSSProperties }) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit" | "enter">("enter");

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
    phase === "exit" ? "translateY(-8px)" :
    phase === "enter" ? "translateY(8px)" :
    "translateY(0)";

  const opacity = phase === "idle" ? 1 : 0;

  return (
    <span
      style={{
        display: "inline-block",
        opacity,
        transform,
        transition: `opacity ${ANIM_MS}ms ease, transform ${ANIM_MS}ms ease`,
        ...style,
      }}
    >
      {LINES[index]}
    </span>
  );
}
