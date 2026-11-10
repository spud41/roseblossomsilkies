// PLACEHOLDER waffle menu. Waffles have no stock count: they're made to order.

import type { Waffle } from "@/types/content";

export const waffles: Waffle[] = [
  {
    id: "classic",
    name: "Classic Buttermilk",
    description: "Crisp outside, fluffy inside. Made with eggs from our own hens.",
    priceCents: 600,
    photo: "/images/waffles/waffle.svg",
    photoAlt: "A golden buttermilk waffle",
  },
  {
    id: "strawberry",
    name: "Strawberry Rose",
    description: "Buttermilk waffle with strawberries and whipped cream.",
    priceCents: 850,
    photo: "/images/waffles/waffle.svg",
    photoAlt: "A waffle topped with strawberries and cream",
  },
  {
    id: "dozen",
    name: "Freezer Dozen",
    description: "Twelve classic waffles, frozen and bagged. Toast and eat.",
    priceCents: 3000,
    photo: "/images/waffles/waffle.svg",
    photoAlt: "A stack of twelve waffles",
  },
];

export const waffleOrderInfo =
  "Waffles are made fresh on pickup days. Order by Thursday for Saturday pickup."; // PLACEHOLDER
