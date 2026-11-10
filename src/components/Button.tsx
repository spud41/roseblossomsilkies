import Link from "next/link";
import type { ComponentProps } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-2.5 font-semibold transition";

const variants = {
  primary: "bg-rose text-white hover:bg-rose-dark",
  secondary: "border-2 border-rose text-rose-dark hover:bg-petal",
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
      <button type="button" disabled className={`${base} w-full cursor-not-allowed bg-blush/60 text-plum-soft`}>
        {label}
      </button>
      <p className="mt-2 text-center text-sm text-plum-soft">{note}</p>
    </div>
  );
}
