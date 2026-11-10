import type { ReactNode } from "react";

// The flat bordered box everything sits in. No shadows, no gradients.
export function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-box surface ${className}`}>{children}</div>;
}

// Small uppercase caption, e.g. "AVAILABLE NOW" or "RAISED SO FAR".
export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[11px] font-medium uppercase tracking-[0.12em] text-muted ${className}`}>{children}</p>;
}
