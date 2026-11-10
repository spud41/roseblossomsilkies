import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-box px-5 text-sm font-semibold transition";

const variants = {
  primary: "bg-accent text-on-accent hover:bg-accent-hi",
  secondary: "surface text-heading hover:bg-panel-hi",
};

type Variant = keyof typeof variants;

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

// Placeholder for buttons that will work in a later phase (Buy, Donate, Order).
export function ComingSoonButton({ label, note }: { label: string; note: string }) {
  return (
    <div>
      <button type="button" disabled className={`${base} w-full cursor-not-allowed border border-line text-muted`}>
        {label}
      </button>
      <p className="mt-2 text-center text-xs text-muted">{note}</p>
    </div>
  );
}
