import type { BirdStatus } from "@/types/content";

const styles: Record<BirdStatus, string> = {
  available: "bg-sage-light text-sage",
  reserved: "bg-honey-light text-[#8a5a12]",
  sold: "bg-plum/10 text-plum-soft",
};

const labels: Record<BirdStatus, string> = {
  available: "Available",
  reserved: "Reserved",
  sold: "Sold",
};

export function StatusBadge({ status }: { status: BirdStatus }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-sm font-bold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}
