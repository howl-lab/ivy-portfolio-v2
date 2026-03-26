"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PROJECTS, type Contribution } from "../data/projects";

const SIDEBAR_LABELS: Record<string, string> = {
  problem: "Problem",
  why: "Why",
  proposal: "Proposal",
  outcome: "Outcome",
};

const PT_SANS = '"TT Commons Pro", sans-serif';
const COURIER = '"TT Commons Pro Mono", monospace';

// ─── Media helper ────────────────────────────────────────────────────────────
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

// ─── Contribution content card ────────────────────────────────────────────────
function ContributionCard({ contribution }: { contribution: Contribution }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "32px 36px",
          animation: "fadeIn 0.2s ease forwards",
          width: "fit-content",
          minWidth: "min(100%, 860px)",
        }}
      >
        <h3
          style={{
            fontFamily: PT_SANS,
            fontWeight: 700,
            fontSize: "clamp(16px, 1.8vw, 16px)",
            color: "#111",
            marginBottom: 12,
          }}
        >
          {contribution.cardTitle ?? contribution.title}
        </h3>
        <p
          style={{
            fontFamily: PT_SANS,
            fontSize: 16,
            color: "#444",
            lineHeight: 1.5,
            marginBottom: 28,
            maxWidth: 860,
            whiteSpace: "pre-line",
          }}
        >
          {contribution.expandedText}
        </p>

        {/* Image grid */}
        {contribution.expandedImages && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {contribution.expandedImages.map((img, i) => (
              <div
                key={i}
                className="case-study-img"
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    background: "#d8d8d8",
                    overflow: "hidden",
                    marginBottom: 8,
                  }}
                >
                  <Media src={img.src} />
                </div>
                <p
                  style={{
                    fontFamily: COURIER,
                    fontSize: 14,
                    color: "#555",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sub-card */}
      {contribution.subCard && (
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "32px 36px",
            animation: "fadeIn 0.2s ease forwards",
            width: "fit-content",
            minWidth: "min(100%, 860px)",
          }}
        >
          <h3
            style={{
              fontFamily: PT_SANS,
              fontWeight: 700,
              fontSize: "clamp(16px, 1.8vw, 16px)",
              color: "#111",
              marginBottom: 12,
            }}
          >
            {contribution.subCard.title}
          </h3>
          <p
            style={{
              fontFamily: PT_SANS,
              fontSize: 16,
              color: "#444",
              lineHeight: 1.5,
              marginBottom: 28,
              maxWidth: 860,
              whiteSpace: "pre-line",
            }}
          >
            {contribution.subCard.expandedText}
          </p>
          {contribution.subCard.expandedImages && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {contribution.subCard.expandedImages.map((img, i) => (
                <div
                  key={i}
                  className="case-study-img"
                  style={{ width: "100%" }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "4/3",
                      background: "#d8d8d8",
                      overflow: "hidden",
                      marginBottom: 8,
                    }}
                  >
                    <Media src={img.src} />
                  </div>
                  <p
                    style={{
                      fontFamily: COURIER,
                      fontSize: 14,
                      color: "#555",
                      lineHeight: 1.5,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Scroll layout (side nav + all cards) ────────────────────────────────────
function ScrollLayout({ contributions }: { contributions: Contribution[] }) {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = contributions.map((_, i) => {
      const el = sectionRefs.current[i];
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(i);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [contributions]);

  return (
    <div className="scroll-layout">
      {/* Nav */}
      <nav className="scroll-nav">
        {contributions.map((c, i) => (
          <button
            key={c.title}
            className={`scroll-nav-item${activeSection === i ? " scroll-nav-item--active" : ""}`}
            onClick={() =>
              sectionRefs.current[i]?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            style={{
              background: "none",
              border: "none",
              fontFamily: COURIER,
              fontSize: 13,
              cursor: "none",
              fontWeight: 400,
              transition: "color 0.2s",
            }}
          >
            {c.title}
          </button>
        ))}
      </nav>

      {/* All cards stacked */}
      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {contributions.map((c, i) => (
          <div
            key={c.title}
            ref={(el) => {
              sectionRefs.current[i] = el;
            }}
            style={{ scrollMarginTop: 80 }}
          >
            <ContributionCard contribution={c} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Password gate ────────────────────────────────────────────────────────────
function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (value.toLowerCase() === "scribble") {
      onUnlock();
    } else {
      setError(true);
      setValue("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#ebebeb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        href="/"
        style={{
          position: "fixed",
          top: 24,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: COURIER,
          fontSize: 14,
          color: "#888",
          textDecoration: "none",
          zIndex: 100,
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
            "underline")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "none")
        }
      >
        ← back home
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "flex-start",
        }}
      >
        <p style={{ fontFamily: PT_SANS, fontSize: 16, color: "#111" }}>
          This case study is password protected.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            type="password"
            value={value}
            placeholder="enter password"
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            style={{
              fontFamily: COURIER,
              fontSize: 14,
              padding: "8px 12px",
              border: `1px solid ${error ? "#ff0000" : "#ccc"}`,
              background: "#fff",
              outline: "none",
              borderRadius: 0,
              width: 220,
            }}
          />
          <button className="rect-btn" onClick={submit}>
            Enter
          </button>
        </div>
        {error && (
          <p style={{ fontFamily: COURIER, fontSize: 13, color: "#ff0000" }}>
            incorrect password
          </p>
        )}
      </div>
    </div>
  );
}

// ─── Case study page ──────────────────────────────────────────────────────────
export default function CaseStudyPage() {
  const params = useParams();
  const projectId = params?.projectId as string;
  const project = PROJECTS.find((p) => p.id === projectId);

  const [unlocked, setUnlocked] = useState(false);

  if (project?.id === "grand-theft-auto" && !unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  if (!project) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: PT_SANS,
        }}
      >
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#ebebeb" }}>
      {/* ── Back link — sticky centered ── */}
      <Link
        href="/"
        style={{
          position: "fixed",
          top: 24,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: COURIER,
          fontSize: 14,
          color: "#888",
          textDecoration: "none",
          transition: "text-decoration 0.15s",
          zIndex: 100,
          pointerEvents: "auto",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.textDecoration =
            "underline")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "none")
        }
      >
        ← back home
      </Link>

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 clamp(20px, 6vw, 120px) 100px",
        }}
      >
        {/* ── Back link placeholder for spacing ── */}
        <div style={{ padding: "32px 0 28px" }} />

        {/* ── Header row ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 24,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {/* Left: title + tags */}
          <div>
            <h1
              style={{
                fontFamily: PT_SANS,
                fontWeight: 700,
                fontStyle: "italic",
                fontSize: "clamp(22px, 4vw, 28px)",
                color: "#111",
                marginBottom: 16,
              }}
            >
              {project.label}
            </h1>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Problem + Proposal ── */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginBottom: 40,
            flexWrap: "wrap",
          }}
        >
          {(["problem", "proposal"] as const).map((key) => (
            <div key={key} style={{ flex: 1, minWidth: 220 }}>
              <p
                style={{
                  fontFamily: COURIER,
                  fontSize: 12,
                  color: "#888",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {SIDEBAR_LABELS[key]}
              </p>
              <p
                style={{
                  fontFamily: PT_SANS,
                  fontSize: 16,
                  color: "#444",
                  lineHeight: 1.5,
                }}
              >
                {project.sidebar[key]}
              </p>
            </div>
          ))}
        </div>

        {/* ── My Contributions ── */}
        <div
          style={{
            textAlign: "left",
            marginBottom: 32,
          }}
        >
          <h2
            style={{
              fontFamily: PT_SANS,
              fontWeight: 700,
              fontSize: "clamp(16px, 1.6vw, 20px)",
              color: "#111",
              marginBottom: 16,
            }}
          >
            My Contributions
          </h2>
          <p
            style={{
              fontFamily: PT_SANS,
              fontSize: 16,
              color: "#444",
              lineHeight: 1.5,
              maxWidth: 800,
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              whiteSpace: "pre-line",
            }}
          >
            {project.summary.map((seg, i) =>
              typeof seg === "string" ? (
                seg
              ) : (
                <a
                  key={i}
                  href={seg.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#0015FF",
                    textDecoration: "underline",
                    textUnderlineOffset: 3,
                  }}
                >
                  {seg.text}
                </a>
              ),
            )}
          </p>
        </div>

        <ScrollLayout contributions={project.contributions} />
      </div>
    </div>
  );
}
