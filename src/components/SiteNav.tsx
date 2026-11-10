"use client";

// Client component only because it reads the current URL to mark the active
// page. Five short links fit across a phone, so there's no hamburger menu:
// every page is one tap away and visible without opening anything.

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types/content";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

// The home page shows the farm name as its big headline, so the small
// header version would just repeat it. Every other page shows it.
export function HeaderBrand({ name }: { name: string }) {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <Link href="/" className="font-display text-xl font-bold tracking-tight text-heading">
      {name}
    </Link>
  );
}

export function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="-mx-1.5 flex flex-wrap">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              // py-3 makes each link about 44px tall: big enough for a thumb.
              className="block px-1.5 py-3 text-[11px] font-medium uppercase tracking-[0.08em] text-muted transition hover:text-heading aria-[current=page]:text-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
