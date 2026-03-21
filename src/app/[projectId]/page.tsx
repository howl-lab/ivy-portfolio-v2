"use client";

import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { PROJECTS, SIDEBAR_ITEMS, type Contribution } from "../data/projects";

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

// ─── Project Context modal ───────────────────────────────────────────────────
function ProjectContextModal({
  sidebar,
  onClose,
  anchorRef,
}: {
  sidebar: (typeof PROJECTS)[0]["sidebar"];
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const [desktopPos, setDesktopPos] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (!mobile) {
        const x = anchorRef.current
          ? anchorRef.current.getBoundingClientRect().right - 360
          : window.innerWidth - 400;
        const y = anchorRef.current
          ? anchorRef.current.getBoundingClientRect().bottom + 8
          : 80;
        setDesktopPos({ x, y });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [anchorRef]);

  if (isMobile === null) return null;

  const LABELS: Record<string, string> = {
    problem: "Problem",
    why: "Why",
    proposal: "Proposal",
    outcome: "Outcome",
  };

  const card = (
    <div
      className="modal-card"
      style={{
        background: "#fff",
        border: "1px solid #0015ff",
        borderRadius: 0,
        width: isMobile ? "90vw" : 360,
        maxWidth: isMobile ? 400 : "90vw",
        maxHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        ...(isMobile
          ? {}
          : {
              position: "fixed",
              top: desktopPos?.y ?? 80,
              left: desktopPos?.x ?? window.innerWidth - 400,
              zIndex: 9990,
            }),
      }}
    >
      {/* Content */}
      <div style={{ padding: "20px 20px 24px", overflowY: "auto", flex: 1 }}>
        {SIDEBAR_ITEMS.map((key) => (
          <div key={key} style={{ marginBottom: 20 }}>
            <p
              style={{
                fontFamily: PT_SANS,
                fontSize: 14,
                color: "#888",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              {LABELS[key]}
            </p>
            <p
              style={{
                fontFamily: PT_SANS,
                fontSize: 16,
                color: "#111",
                lineHeight: 1.6,
              }}
            >
              {sidebar[key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9990,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div onClick={(e) => e.stopPropagation()}>{card}</div>
      </div>
    );
  }

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 9989 }} />
      {card}
    </>
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
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    background: "#d8d8d8",
                    overflow: "scroll",
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
                <div key={i} style={{ width: "100%" }}>
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

// ─── Case study page ──────────────────────────────────────────────────────────
export default function CaseStudyPage() {
  const params = useParams();
  const projectId = params?.projectId as string;
  const project = PROJECTS.find((p) => p.id === projectId);

  const [activeTab, setActiveTab] = useState(0);
  const [contextOpen, setContextOpen] = useState(false);
  const contextBtnRef = useRef<HTMLButtonElement>(null);

  // Reset tab when project changes
  useEffect(() => {
    setActiveTab(0);
    setContextOpen(false);
  }, [projectId]);

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

  const activeContribution = project.contributions[activeTab];

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
          ((e.currentTarget as HTMLAnchorElement).style.textDecoration = "underline")
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

          {/* Right: Project Context button */}
          <button
            ref={contextBtnRef}
            className={`rect-btn${contextOpen ? " rect-btn--active-blue" : ""}`}
            onClick={() => setContextOpen((o) => !o)}
            style={{ flexShrink: 0, marginTop: 4 }}
          >
            Project Context
          </button>
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

        {/* ── Tabs ── */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          {project.contributions.map((c, i) => (
            <button
              key={c.title}
              className={`rect-btn${activeTab === i ? " rect-btn--active-black" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* ── Active contribution card ── */}
        <ContributionCard key={activeTab} contribution={activeContribution} />
      </div>

      {/* ── Draggable Project Context modal ── */}
      {contextOpen && (
        <ProjectContextModal
          sidebar={project.sidebar}
          onClose={() => setContextOpen(false)}
          anchorRef={contextBtnRef}
        />
      )}
    </div>
  );
}
