// PLACEHOLDER fundraiser. In Phase 2 the goal and raised totals move to the
// database, and Phase 3 donations update `raisedCents` automatically.

import type { Fundraiser } from "@/types/content";

export const fundraiser: Fundraiser = {
  title: "The New Coop Fund",
  tagline: "Help us build a warm, predator-proof home for the flock.",
  story: [
    "Our hens have been living in a coop that was old when we got it. This winter, it's not going to cut it.",
    "We're raising money for a new insulated coop with a covered run, so the birds stay warm, dry, and safe from raccoons.",
    "Every dollar goes straight to lumber, hardware cloth, and roofing. We'll post build updates on Facebook as it goes up.",
  ],
  goalCents: 250000,
  raisedCents: 87500,
  photo: "/images/farm/coop.svg",
  photoAlt: "Sketch of the planned chicken coop",
};
