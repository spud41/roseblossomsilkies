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
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {waffles.map((waffle) => (
          <article key={waffle.id} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-blush/50">
            <div className="relative aspect-[4/3] bg-honey-light">
              <Image
                src={waffle.photo}
                alt={waffle.photoAlt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-2xl font-semibold">{waffle.name}</h2>
                <p className="text-xl font-bold text-rose-dark">{formatPrice(waffle.priceCents)}</p>
              </div>
              <p className="mt-2 flex-1 text-plum-soft">{waffle.description}</p>
              <div className="mt-5">
                {/* Phase 3 replaces this with a quantity picker and PayPal checkout. */}
                <ComingSoonButton label="Order" note="Online ordering opens soon. Message us to order now." />
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
