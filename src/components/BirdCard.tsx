import Image from "next/image";
import type { Bird } from "@/types/content";
import { formatPrice } from "@/lib/format";
import { StatusBadge } from "./StatusBadge";

const sexLabels = { hen: "Hen", rooster: "Rooster", unsexed: "Not yet sexed" };

export function BirdCard({ bird }: { bird: Bird }) {
  const sold = bird.status === "sold";

  return (
    <article className={`overflow-hidden rounded-box surface ${sold ? "opacity-60" : ""}`}>
      <div className="relative aspect-square border-b border-line">
        <Image
          src={bird.photo}
          alt={bird.photoAlt}
          fill
          // Tells the browser how wide the image is at each screen size,
          // so phones download a small file instead of the desktop one.
          sizes="(min-width: 640px) 320px, 100vw"
          className={`object-cover ${sold ? "grayscale" : ""}`}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <StatusBadge status={bird.status} />
          <p className={`font-semibold ${sold ? "text-muted line-through" : "text-heading"}`}>
            {formatPrice(bird.priceCents)}
          </p>
        </div>
        <h3 className="mt-2 font-display text-2xl font-bold text-heading">{bird.name}</h3>
        <p className="text-sm text-muted">
          {bird.color} {bird.variety} · {sexLabels[bird.sex]} · {bird.age}
        </p>
        {bird.notes && <p className="mt-2 text-sm">{bird.notes}</p>}
      </div>
    </article>
  );
}
