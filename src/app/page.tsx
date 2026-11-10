import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { BirdCard } from "@/components/BirdCard";
import { ProgressBar } from "@/components/ProgressBar";
import { site } from "@/content/site";
import { birds } from "@/content/birds";
import { fundraiser } from "@/content/fundraiser";

export default function HomePage() {
  const featured = birds.filter((b) => b.status === "available").slice(0, 3);

  return (
    <>
      {/* Hero: on phones the text comes first, so the farm name and buttons
          are visible without scrolling. Side by side from md up. */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-8 md:grid-cols-2 md:pt-16">
        <div className="text-center md:text-left">
          <h1 className="font-display text-5xl font-semibold leading-tight text-rose-dark sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl text-plum-soft">{site.tagline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <ButtonLink href="/birds">See available birds</ButtonLink>
            <ButtonLink href="/waffles" variant="secondary">
              Order waffles
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-petal">
          <Image
            src={site.heroPhoto}
            alt={site.heroPhotoAlt}
            fill
            priority // above the fold: load it right away instead of lazily
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-petal/60 py-14">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 md:grid-cols-[1fr_2fr]">
          <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full bg-white ring-8 ring-white md:w-full">
            <Image src={site.ownerPhoto} alt={site.ownerPhotoAlt} fill sizes="(min-width: 768px) 33vw, 224px" className="object-cover" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-rose-dark">Meet {site.owner}</h2>
            <div className="mt-4 space-y-4 text-lg">
              {site.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold text-rose-dark">Ready for new homes</h2>
          <ButtonLink href="/birds" variant="secondary">
            All birds
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((bird) => (
            <BirdCard key={bird.id} bird={bird} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-blush/50 sm:p-10">
          <p className="font-bold uppercase tracking-wide text-sage">Fundraiser</p>
          <h2 className="mt-1 font-display text-3xl font-semibold text-rose-dark">{fundraiser.title}</h2>
          <p className="mt-2 text-lg text-plum-soft">{fundraiser.tagline}</p>
          <div className="mt-6">
            <ProgressBar raisedCents={fundraiser.raisedCents} goalCents={fundraiser.goalCents} />
          </div>
          <ButtonLink href="/fundraiser" className="mt-6 w-full sm:w-auto">
            Read the story
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
