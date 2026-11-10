import Image from "next/image";
import type { Bird } from "@/types/content";
import { formatPrice } from "@/lib/format";
import { StatusBadge } from "./StatusBadge";

const sexLabels = { hen: "Hen", rooster: "Rooster", unsexed: "Not yet sexed" };

export function BirdCard({ bird }: { bird: Bird }) {
  const sold = bird.status === "sold";

  return (
    <article className={`overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-blush/50 ${sold ? "opacity-70" : ""}`}>
      <div className="relative aspect-square bg-petal">
        <Image
          src={bird.photo}
          alt={bird.photoAlt}
          fill
          // Tells the browser how wide the image is at each screen size,
          // so phones download a small file instead of the desktop one.
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute left-3 top-3">
          <StatusBadge status={bird.status} />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold">{bird.name}</h3>
          <p className={`text-xl font-bold ${sold ? "text-plum-soft line-through" : "text-rose-dark"}`}>
            {formatPrice(bird.priceCents)}
          </p>
        </div>
        <p className="mt-1 text-plum-soft">
          {bird.color} {bird.variety}
        </p>
        <p className="text-sm text-plum-soft">
          {sexLabels[bird.sex]} · {bird.age}
        </p>
        {bird.notes && <p className="mt-3">{bird.notes}</p>}
      </div>
    </article>
  );
}
