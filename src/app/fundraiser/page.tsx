import type { Metadata } from "next";
import Image from "next/image";
import { ComingSoonButton } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { ProgressBar } from "@/components/ProgressBar";
import { fundraiser } from "@/content/fundraiser";

export const metadata: Metadata = {
  title: fundraiser.title,
  description: fundraiser.tagline,
};

export default function FundraiserPage() {
  return (
    <>
      <PageHeader title={fundraiser.title} intro={fundraiser.tagline} />
      <div className="mx-auto max-w-3xl px-4">
        {/* Progress and the donate button sit above the story, because on a
            phone most people decide before they scroll. */}
        <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-blush/50 sm:p-8">
          <ProgressBar raisedCents={fundraiser.raisedCents} goalCents={fundraiser.goalCents} />
          <div className="mt-6">
            <ComingSoonButton label="Donate" note="Online donations open soon." />
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl bg-petal">
          <Image src={fundraiser.photo} alt={fundraiser.photoAlt} fill sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>

        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          {fundraiser.story.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </>
  );
}
