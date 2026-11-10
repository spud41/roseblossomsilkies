import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { BirdCard } from "@/components/BirdCard";
import { Label, Panel } from "@/components/Panel";
import { ProgressBar } from "@/components/ProgressBar";
import { site } from "@/content/site";
import { birds } from "@/content/birds";
import { fundraiser } from "@/content/fundraiser";

export default function HomePage() {
  const available = birds.filter((b) => b.status === "available");
  const featured = available.slice(0, 2);

  return (
    <div className="space-y-4 pt-8">
      <div>
        <h1 className="font-display text-[40px] font-bold leading-tight tracking-tight text-heading">{site.name}</h1>
        <p className="mt-1 text-muted">{site.tagline}</p>
      </div>

      {/* Quick-status box, the first thing a phone visitor sees. */}
      <Panel className="flex items-center justify-between gap-4 px-4 py-3">
        <div>
          <p className="text-xl font-semibold text-heading">{available.length} birds available</p>
          <Label>{site.location}</Label>
        </div>
        <ButtonLink href="/birds">View birds</ButtonLink>
      </Panel>

      <Panel className="overflow-hidden">
        <div className="relative aspect-[4/3]">
          <Image
            src={site.heroPhoto}
            alt={site.heroPhotoAlt}
            fill
            priority // above the fold: load it right away instead of lazily
            sizes="(min-width: 672px) 640px, 100vw"
            className="object-cover"
          />
        </div>
      </Panel>

      <Panel className="p-4 sm:p-5">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-box border border-line">
            <Image src={site.ownerPhoto} alt={site.ownerPhotoAlt} fill sizes="64px" className="object-cover" />
          </div>
          <div>
            <Label>About the farm</Label>
            <h2 className="font-display text-2xl font-bold text-heading">Meet {site.owner}</h2>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {site.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Panel>

      <section className="pt-4">
        <div className="mb-2 flex items-baseline justify-between">
          <Label>Available now</Label>
          <Link href="/birds" className="text-sm text-accent hover:text-accent-hi">
            See all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((bird) => (
            <BirdCard key={bird.id} bird={bird} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 pt-4 sm:grid-cols-2">
        <Panel className="flex flex-col p-4">
          <Label>Fundraiser</Label>
          <h2 className="mt-1 font-display text-xl font-bold text-heading">{fundraiser.title}</h2>
          <div className="mt-4 flex-1">
            <ProgressBar raisedCents={fundraiser.raisedCents} goalCents={fundraiser.goalCents} />
          </div>
          <ButtonLink href="/fundraiser" variant="secondary" className="mt-4">
            Read the story
          </ButtonLink>
        </Panel>
        <Panel className="flex flex-col p-4">
          <Label>Farm kitchen</Label>
          <h2 className="mt-1 font-display text-xl font-bold text-heading">Fresh waffles</h2>
          <p className="mt-2 flex-1 text-sm text-muted">Made with eggs from our own hens. Order ahead for pickup.</p>
          <ButtonLink href="/waffles" variant="secondary" className="mt-4">
            See the menu
          </ButtonLink>
        </Panel>
      </section>
    </div>
  );
}
