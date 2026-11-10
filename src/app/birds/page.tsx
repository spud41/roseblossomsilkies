import type { Metadata } from "next";
import { BirdCard } from "@/components/BirdCard";
import { PageHeader } from "@/components/PageHeader";
import { Label, Panel } from "@/components/Panel";
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
      <div className="grid gap-4 sm:grid-cols-2">
        {sorted.map((bird) => (
          <BirdCard key={bird.id} bird={bird} />
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Panel className="p-4">
          <Label>Pickup</Label>
          <p className="mt-1 text-sm">{site.pickupInfo}</p>
        </Panel>
        <Panel className="p-4">
          <Label>Shipping</Label>
          <p className="mt-1 text-sm">{site.shippingInfo}</p>
        </Panel>
      </div>
    </>
  );
}
