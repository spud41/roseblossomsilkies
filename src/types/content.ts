// Shared shapes for the site's content.
// In Phase 2 these become Supabase table rows, so the field names here
// are picked to match the future database columns.

export type BirdStatus = "available" | "reserved" | "sold";
export type BirdSex = "hen" | "rooster" | "unsexed";

export type Bird = {
  id: string;
  name: string;
  variety: string; // e.g. "Bearded Silkie", "Showgirl"
  color: string; // e.g. "Lavender", "Splash"
  sex: BirdSex;
  age: string; // free text for now, e.g. "8 weeks"
  priceCents: number; // money is always whole cents, never 45.99
  status: BirdStatus;
  photo: string; // path under /public, or a Supabase Storage URL later
  photoAlt: string;
  notes?: string;
};

export type Waffle = {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  photo: string;
  photoAlt: string;
};

export type Fundraiser = {
  title: string;
  tagline: string;
  story: string[]; // one string per paragraph
  goalCents: number;
  raisedCents: number;
  photo: string;
  photoAlt: string;
};

export type NavItem = {
  href: string;
  label: string;
};
