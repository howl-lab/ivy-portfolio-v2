"use client";

import { useState } from "react";
import Link from "next/link";
import TextCycler from "./components/TextCycler";
import { HOME_PROJECTS } from "./data/home";

const PT_SANS = '"TT Commons Pro", sans-serif';
const COURIER = '"TT Commons Pro Mono", monospace';

const EXPERIENCE = [
  { company: "Presence", role: "Principal Designer" },
  { company: "Upwork", role: "Sr. Product Designer, Innovation Team" },
  { company: "Headroom", role: "Lead UI/UX Designer" },
  { company: "GTA", role: "Sr. Interaction Designer, Marketing Team" },
  {
    company: "Godfrey Dadich Partners",
    role: "Product Designer, Digital Team",
  },
  { company: "Google", role: "Visual Designer, Education" },
];

// ─── Pine tree SVG ──────────────────────────────────────────────────────────
function PineTree({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#0015FF"
      style={{ display: "inline-block" }}
    >
      <polygon points="12,2 20,18 4,18" />
      <rect x="10" y="18" width="4" height="4" />
    </svg>
  );
}

const TREES = [
  { left: "3%", top: "20%" },
  { left: "10%", top: "65%" },
  { left: "19%", top: "18%" },
  { left: "27%", top: "72%" },
  { left: "36%", top: "12%" },
  { left: "64%", top: "15%" },
  { left: "72%", top: "68%" },
  { left: "80%", top: "10%" },
  { left: "89%", top: "60%" },
  { left: "95%", top: "25%" },
];

// ─── Media helper ───────────────────────────────────────────────────────────
function Media({ src, style }: { src: string; style?: React.CSSProperties }) {
  if (!src) return null;
  const base: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    ...style,
  };
  return src.endsWith(".mp4") ? (
    <video src={src} autoPlay loop muted playsInline style={base} />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" style={base} />
  );
}

// ─── About modal ────────────────────────────────────────────────────────────
function AboutModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9980,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          border: "1px solid #0015ff",
          width: "min(480px, 90vw)",
          maxHeight: "70vh",
          overflowY: "auto",
          padding: "32px 36px",
          fontFamily: PT_SANS,
          animation: "fadeIn 0.2s ease forwards",
        }}
      >
        <p
          style={{
            fontSize: 16,
            color: "#111",
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          Fascinated by how things work + why they exist
        </p>
        <p
          style={{
            fontSize: 16,
            color: "#111",
            lineHeight: 1.7,
            marginBottom: 16,
          }}
        >
          Worked in a variety of spaces from education to gaming and startup to
          big companies. Storytelling and turning complexity into play is my
          jam.
        </p>
        <p
          style={{
            fontSize: 16,
            color: "#111",
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          I love inanimate objects, nature, and my pup.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 40,
            marginBottom: 50,
          }}
        >
          {EXPERIENCE.map(({ company, role }) => (
            <div
              key={company}
              style={{ display: "flex", alignItems: "center", gap: 10 }}
            >
              <span style={{ fontSize: 14, color: "#111", fontWeight: 400 }}>
                {company}
              </span>
              <span style={{ fontSize: 14, color: "#888" }}>{role}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 16, color: "#0015FF", marginBottom: 16 }}>
          ivychang02@gmail.com
        </p>

        <p style={{ fontFamily: COURIER, fontSize: 12, color: "#888" }}>
          Copyrighted ©2026
        </p>
      </div>
    </div>
  );
}

// ─── Project card ────────────────────────────────────────────────────────────
function ProjectCard({ project }: { project: (typeof HOME_PROJECTS)[0] }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = project.contributions.slice(0, 3);
  const activeContribution = tabs[activeTab];

  return (
    <Link href={`/${project.id}`} className="project-card">
      <div className="card-inner">
        {/* Left: text + tabs */}
        <div className="card-text" style={{ flex: "0 0 52%", minWidth: 0 }}>
          <h2
            style={{
              fontFamily: PT_SANS,
              fontWeight: 700,
              fontStyle: "italic",
              fontSize: "clamp(20px, 2.2vw, 26px)",
              color: "#111",
              marginBottom: 10,
            }}
          >
            {project.label}
          </h2>
          <p
            style={{
              fontFamily: PT_SANS,
              fontSize: 16,
              color: "#555",
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            {project.cardDescription}
          </p>

          {/* Contribution tabs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {tabs.map((c, i) => (
              <button
                key={c.title}
                className={`rect-btn${activeTab === i ? " rect-btn--active-blue" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveTab(i);
                }}
                style={{
                  textAlign: "left",
                  width: "fit-content",
                }}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <div
          className="card-image"
          style={{
            flex: 1,
            minWidth: 0,
            maxWidth: 480,
            alignSelf: "stretch",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: 12,
              overflow: "hidden",
              background: "#d8d8d8",
              minHeight: 200,
              position: "relative",
            }}
          >
            {tabs.map((c, i) => (
              <div
                key={i}
                style={{
                  position: i === 0 ? "relative" : "absolute",
                  inset: 0,
                  opacity: activeTab === i ? 1 : 0,
                  transition: "opacity 0.25s ease",
                  height: "100%",
                }}
              >
                <Media
                  src={c.hoverImage ?? ""}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact text — centered on card */}
      {activeContribution?.description && (
        <p
          key={activeTab}
          className="impact-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "36%",
            transform: "translate(-50%, -50%)",
            textAlign: "left",
            fontFamily: PT_SANS,
            fontStyle: "italic",
            fontSize: 14,
            color: "#0015FF",
            maxWidth: 160,
            lineHeight: 1.4,
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          {activeContribution.description}
        </p>
      )}
    </Link>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────
export default function HomePage() {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <div style={{ minHeight: "100vh", background: "#ebebeb" }}>
        {/* ── Header ── */}
        <header
          style={{
            position: "relative",
            height: 260,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          {/* Trees */}
          {TREES.map((pos, i) => (
            <span
              key={i}
              style={{ position: "absolute", ...pos, lineHeight: 0, zIndex: 0 }}
            >
              <PineTree size={32} />
            </span>
          ))}

          {/* Intro text */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <p
              style={{
                fontFamily: PT_SANS,
                fontSize: "clamp(18px, 1.2vw, 20px)",
                color: "#111",
                marginBottom: 8,
              }}
            >
              hi, i&apos;m{" "}
              <em
                onClick={() => setAboutOpen((o) => !o)}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.textDecoration =
                    "underline")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.textDecoration =
                    "none")
                }
                style={{
                  fontStyle: "italic",
                  color: "#0015FF",
                  textDecoration: "none",
                  textUnderlineOffset: 3,
                  cursor: "none",
                }}
              >
                ivy
              </em>
            </p>
            <p
              style={{
                fontFamily: PT_SANS,
                fontSize: "clamp(18px, 1.1vw, 20px)",
                color: "#111",
                minHeight: "1.6em",
              }}
            >
              <TextCycler />
            </p>
          </div>
        </header>

        {/* ── Project cards ── */}
        <main
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 clamp(20px, 6vw, 120px) 80px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {HOME_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </main>
      </div>

      {/* About modal */}
      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
    </>
  );
}
