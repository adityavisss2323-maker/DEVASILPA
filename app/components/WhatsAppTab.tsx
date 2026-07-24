"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "916261068277";
const WA_MESSAGE = "Hello, I would like to inquire about a Devashilpa sculpture.";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function WhatsAppTab() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Desktop: slim vertical edge tab */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Inquire on WhatsApp"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        style={{
          position: "fixed",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 80,
          display: "flex",
          alignItems: "center",
          background: "var(--black)",
          border: "1px solid var(--gold-line-2)",
          borderRight: "none",
          color: "var(--text)",
          textDecoration: "none",
          overflow: "hidden",
          width: expanded ? "clamp(160px, 18vw, 200px)" : "44px",
          transition: "width 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease, box-shadow 0.4s ease",
          opacity: visible ? 1 : 0,
          boxShadow: expanded
            ? "-4px 0 32px rgba(163,128,71,0.18)"
            : "-2px 0 12px rgba(0,0,0,0.4)",
        }}
        className="hidden md:flex"
      >
        {/* Icon */}
        <span
          style={{
            minWidth: 44,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* Minimal chat icon in gold */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>

        {/* Label */}
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-2)",
            whiteSpace: "nowrap",
            paddingRight: 16,
            opacity: expanded ? 1 : 0,
            transition: "opacity 0.3s ease 0.15s",
          }}
        >
          Inquire Now
        </span>
      </a>

      {/* Mobile: small pill bottom-right */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Inquire on WhatsApp"
        style={{
          position: "fixed",
          bottom: 24,
          right: 20,
          zIndex: 80,
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "var(--black)",
          border: "1px solid var(--gold-line-2)",
          color: "var(--text)",
          textDecoration: "none",
          padding: "10px 18px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.6s ease, transform 0.3s var(--ease-luxury), box-shadow 0.3s ease",
          boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
        }}
        className="md:hidden"
        onTouchStart={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(163,128,71,0.2)";
        }}
        onTouchEnd={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.5)";
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-2)",
          }}
        >
          Inquire
        </span>
      </a>
    </>
  );
}
