import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "var(--bg)", color: "var(--text)", textAlign: "center", padding: "0 24px" }}>
      <span style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: 24 }}>
        404
      </span>
      <h1 className="font-display" style={{ fontSize: "clamp(64px, 12vw, 160px)", color: "var(--text)", lineHeight: 0.9, marginBottom: 32 }}>
        Not Found.
      </h1>
      <p style={{ color: "var(--text-3)", fontSize: "16px", lineHeight: 1.7, maxWidth: 380, marginBottom: 48 }}>
        The page or sculpture you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn btn-charcoal" style={{ textDecoration: "none" }}>
        Return to Atelier
      </Link>
    </main>
  );
}