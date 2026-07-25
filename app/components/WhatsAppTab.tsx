"use client";

import { useEffect, useState } from "react";

const WA_NUMBER  = "916261068277";
const WA_MESSAGE = "Hello, I would like to inquire about a Devashilpa sculpture.";
const WA_URL     = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function WhatsAppTab() {
  const [visible,  setVisible]  = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Single persistent bottom-right pill for all breakpoints */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Inquire on WhatsApp"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        style={{
          position: "fixed",
          bottom: "clamp(24px, 4vw, 32px)",
          right: "clamp(20px, 4vw, 32px)",
          zIndex: 80,
          display: "flex",
          alignItems: "center",
          gap: expanded ? 12 : 0,
          background: "var(--bg)",
          border: "1px solid var(--gold-line-2)",
          color: "var(--text)",
          textDecoration: "none",
          padding: expanded ? "10px 20px 10px 14px" : "12px",
          borderRadius: "100px",
          opacity: visible ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: expanded
            ? "0 8px 32px rgba(163,128,71,0.18)"
            : "0 4px 24px rgba(26,26,26,0.10)",
        }}
        onTouchStart={(e) => {
          setExpanded(true);
          (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
        }}
        onTouchEnd={(e) => {
          setTimeout(() => setExpanded(false), 2000);
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0 }}
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text)",
            whiteSpace: "nowrap",
            opacity: expanded ? 1 : 0,
            width: expanded ? "auto" : 0,
            transform: expanded ? "translateX(0)" : "translateX(10px)",
            transition: "all 0.4s ease",
            display: "block"
          }}
        >
          Inquire Now
        </span>
      </a>
    </>
  );
}
