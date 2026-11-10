// Farm-wide text: name, about, contact details, navigation.
// Everything marked PLACEHOLDER needs Aura's real info before launch.

import type { NavItem } from "@/types/content";

export const site = {
  name: "Rose Blossom Silkies",
  tagline: "Fluffy, friendly silkie chickens, raised by hand.",
  description:
    "Rose Blossom Silkies is a small family silkie chicken breeder. Hand-raised chicks and grown birds, plus fresh waffles.",
  url: "https://roseblossomsilkies.com",

  owner: "Aura",
  ownerPhoto: "/images/farm/aura.svg",
  ownerPhotoAlt: "Aura holding a white silkie hen", // PLACEHOLDER
  heroPhoto: "/images/farm/hero.svg",
  heroPhotoAlt: "A group of fluffy silkie chickens in the grass", // PLACEHOLDER

  // PLACEHOLDER: one string per paragraph.
  about: [
    "Hi, I'm Aura. Rose Blossom Silkies started with three rescue hens and turned into a small breeding program for silkies with sweet temperaments and great feathering.",
    "Every bird here is handled daily from the day it hatches, so they arrive used to people, kids, and the occasional suspicious dog.",
    "I keep flocks small on purpose. I know every bird by name, and I'll tell you honestly what each one is like before you take it home.",
  ],

  // PLACEHOLDER contact details
  location: "Placeholder Town, ST",
  email: "hello@roseblossomsilkies.com",
  phone: "+15555550123", // used in tel: links, digits only
  phoneDisplay: "(555) 555-0123",
  facebookUrl: "https://www.facebook.com/",

  pickupInfo:
    "Local pickup is by appointment at the farm. I'll send the address once your bird is reserved.", // PLACEHOLDER
  shippingInfo:
    "Shipping is available for some birds. Message me first so we can pick a safe week to ship.", // PLACEHOLDER

  nav: [
    { href: "/", label: "Home" },
    { href: "/birds", label: "Birds" },
    { href: "/waffles", label: "Waffles" },
    { href: "/fundraiser", label: "Fundraiser" },
    { href: "/contact", label: "Contact" },
  ] satisfies NavItem[],
};
