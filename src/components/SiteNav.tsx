"use client";

// Client component because it needs state (menu open/closed) and the current
// URL (to highlight the active page). Everything else on the site stays
// server-rendered, so phones download very little JavaScript.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavItem } from "@/types/content";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: a plain row of links */}
      <nav aria-label="Main" className="hidden md:block">
        <ul className="flex gap-1">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className="rounded-full px-4 py-2 font-semibold text-plum-soft transition hover:bg-petal hover:text-plum aria-[current=page]:bg-petal aria-[current=page]:text-rose-dark"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Phone: menu button that opens a full-width panel */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="flex h-11 items-center gap-2 rounded-full border border-blush px-4 font-semibold md:hidden"
      >
        {open ? "Close" : "Menu"}
        <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="absolute inset-x-0 top-full border-b border-blush bg-cream shadow-lg md:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="block rounded-xl px-4 py-3 text-lg font-semibold aria-[current=page]:bg-petal aria-[current=page]:text-rose-dark"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
