import Link from "next/link";
import { cacheLife } from "next/cache";
import { site } from "@/content/site";

// Next.js won't prerender a page that reads the clock without saying how
// long the answer stays valid. The year is good for a day at a time.
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-blush/60 bg-petal/50">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="font-display text-xl font-semibold text-rose-dark">{site.name}</p>
          <p className="mt-1 text-plum-soft">{site.location}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-end">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-semibold hover:text-rose">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={site.facebookUrl} className="font-semibold hover:text-rose">
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <p className="pb-8 text-center text-sm text-plum-soft">
        © <CopyrightYear /> {site.name}
      </p>
    </footer>
  );
}
