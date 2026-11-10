import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="text-6xl" aria-hidden="true">🐔</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-rose-dark">This page flew the coop</h1>
      <p className="mt-3 text-lg text-plum-soft">Silkies can&apos;t actually fly, so it must be around here somewhere.</p>
      <ButtonLink href="/" className="mt-8">
        Back to the farm
      </ButtonLink>
    </div>
  );
}
