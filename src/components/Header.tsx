import Link from "next/link";
import { site } from "@/content/site";
import { SiteNav } from "./SiteNav";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-blush/60 bg-cream/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span aria-hidden="true" className="text-2xl">🌸</span>
          <span className="font-display text-xl font-semibold leading-tight text-rose-dark sm:text-2xl">
            {site.name}
          </span>
        </Link>
        <SiteNav items={site.nav} />
      </div>
    </header>
  );
}
