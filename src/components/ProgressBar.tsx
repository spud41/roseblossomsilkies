import { formatPrice } from "@/lib/format";
import { Label } from "./Panel";

export function ProgressBar({ raisedCents, goalCents }: { raisedCents: number; goalCents: number }) {
  // Clamp to 100 so going over the goal doesn't overflow the bar.
  const percent = Math.min(100, Math.round((raisedCents / goalCents) * 100));

  return (
    <div>
      <div className="flex items-end justify-between gap-2">
        <div>
          <p className="text-2xl font-semibold text-heading">{formatPrice(raisedCents)}</p>
          <Label>Raised of {formatPrice(goalCents)}</Label>
        </div>
        <p className="text-2xl font-semibold text-accent">{percent}%</p>
      </div>
      <div
        role="progressbar"
        aria-label="Fundraiser progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        className="mt-3 h-2 overflow-hidden rounded-[2px] bg-line"
      >
        <div className="h-full bg-accent" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
