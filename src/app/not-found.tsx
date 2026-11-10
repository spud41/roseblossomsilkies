import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="py-16">
      <h1 className="font-display text-4xl font-bold tracking-tight text-heading">This page flew the coop</h1>
      <p className="mt-2 text-muted">Silkies can&apos;t actually fly, so it must be around here somewhere.</p>
      <ButtonLink href="/" className="mt-6">
        Back to the farm
      </ButtonLink>
    </div>
  );
}
