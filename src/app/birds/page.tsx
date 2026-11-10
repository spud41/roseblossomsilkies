import type { Metadata } from "next";
import { BirdCard } from "@/components/BirdCard";
import { PageHeader } from "@/components/PageHeader";
import { birds } from "@/content/birds";
import { site } from "@/content/site";
import type { BirdStatus } from "@/types/content";

export const metadata: Metadata = {
  title: "Available Birds",
  description: "Silkie chickens from Rose Blossom Silkies that are ready for new homes.",
};

// Available birds first, sold birds last. Sold birds stay on the page
// as social proof ("people actually buy from her").
const order: Record<BirdStatus, number> = { available: 0, reserved: 1, sold: 2 };

export default function BirdsPage() {
  const sorted = [...birds].sort((a, b) => order[a.status] - order[b.status]);

  return (
    <>
      <PageHeader
        title="Available Birds"
        intro="Every bird is hand-raised and handled daily. Message me with any questions before you buy."
      />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((bird) => (
            <BirdCard key={bird.id} bird={bird} />
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-sage-light p-6">
            <h2 className="font-display text-xl font-semibold">Pickup</h2>
            <p className="mt-2">{site.pickupInfo}</p>
          </div>
          <div className="rounded-3xl bg-honey-light p-6">
            <h2 className="font-display text-xl font-semibold">Shipping</h2>
            <p className="mt-2">{site.shippingInfo}</p>
          </div>
        </div>
      </div>
    </>
  );
}
