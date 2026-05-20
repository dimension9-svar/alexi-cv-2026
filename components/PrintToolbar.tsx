"use client";

import Link from "next/link";
import { useEffect } from "react";

export function PrintToolbar() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const auto = new URLSearchParams(window.location.search).get("print");
    if (auto === "1") {
      const t = window.setTimeout(() => window.print(), 700);
      return () => window.clearTimeout(t);
    }
  }, []);

  return (
    <div className="print-toolbar no-print">
      <button className="btn" onClick={() => window.print()}>Print / Save PDF</button>
      <Link className="btn btn-ghost" href="/">← Landing</Link>
    </div>
  );
}
