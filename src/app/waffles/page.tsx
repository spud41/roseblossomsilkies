import type { Metadata } from "next";
import Image from "next/image";
import { ComingSoonButton } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { waffles, waffleOrderInfo } from "@/content/waffles";
import { formatPrice } from "@/lib/format";

export const metadata: Metadata = {
  title: "Order Waffles",
  description: "Fresh farm waffles made with eggs from our own hens.",
};

export default function WafflesPage() {
  return (
    <>
      <PageHeader title="Farm Waffles" intro={waffleOrderInfo} />
      <div className="space-y-4">
        {waffles.map((waffle) => (
          // Photo beside the text instead of on top: a menu is for scanning,
          // so three items fit on one phone screen.
          <article key={waffle.id} className="flex gap-4 rounded-box surface p-3">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-box border border-line">
              <Image src={waffle.photo} alt={waffle.photoAlt} fill sizes="96px" className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-xl font-bold text-heading">{waffle.name}</h2>
                <p className="font-semibold text-heading">{formatPrice(waffle.priceCents)}</p>
              </div>
              <p className="mt-1 text-sm text-muted">{waffle.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6">
        {/* Phase 3 replaces this with quantity pickers and PayPal checkout. */}
        <ComingSoonButton label="Order waffles" note="Online ordering opens soon. Message us to order now." />
      </div>
    </>
  );
}
