import type { BirdStatus } from "@/types/content";

// A colored square plus a word, like a map legend. The word matters:
// color alone fails for colorblind visitors.
const dot: Record<BirdStatus, string> = {
  available: "bg-ok",
  reserved: "bg-warn",
  sold: "bg-line",
};

const labels: Record<BirdStatus, string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

export function StatusBadge({ status }: { status: BirdStatus }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
      <span aria-hidden="true" className={`h-2 w-2 rounded-[2px] ${dot[status]}`} />
      {labels[status]}
    </span>
  );
}
