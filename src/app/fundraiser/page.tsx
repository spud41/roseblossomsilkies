import type { Metadata } from "next";
import Image from "next/image";
import { ComingSoonButton } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Panel } from "@/components/Panel";
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
      {/* Progress and the donate button sit above the story, because on a
          phone most people decide before they scroll. */}
      <Panel className="p-4 sm:p-5">
        <ProgressBar raisedCents={fundraiser.raisedCents} goalCents={fundraiser.goalCents} />
        <div className="mt-5">
          <ComingSoonButton label="Donate" note="Online donations open soon." />
        </div>
      </Panel>

      <Panel className="mt-4 overflow-hidden">
        <div className="relative aspect-[16/9]">
          <Image src={fundraiser.photo} alt={fundraiser.photoAlt} fill sizes="(min-width: 672px) 640px, 100vw" className="object-cover" />
        </div>
      </Panel>

      <div className="mt-6 space-y-4">
        {fundraiser.story.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </>
  );
}
