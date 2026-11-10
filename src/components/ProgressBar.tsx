import { formatPrice } from "@/lib/format";

export function ProgressBar({ raisedCents, goalCents }: { raisedCents: number; goalCents: number }) {
  // Clamp to 100 so going over the goal doesn't overflow the bar.
  const percent = Math.min(100, Math.round((raisedCents / goalCents) * 100));

  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <p>
          <span className="font-display text-3xl font-semibold text-rose-dark">{formatPrice(raisedCents)}</span>{" "}
          <span className="text-plum-soft">raised of {formatPrice(goalCents)}</span>
        </p>
        <p className="font-bold text-plum-soft">{percent}%</p>
      </div>
      <div
        role="progressbar"
        aria-label="Fundraiser progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        className="mt-3 h-4 overflow-hidden rounded-full bg-petal"
      >
        <div className="h-full rounded-full bg-rose" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
