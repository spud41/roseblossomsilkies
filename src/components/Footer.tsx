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
    <footer className="mx-auto mt-16 w-full max-w-2xl px-4 pb-10">
      <hr className="border-line" />
      <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-sm text-muted">
        <p>
          © <CopyrightYear /> {site.name} · {site.location}
        </p>
        <a href={site.facebookUrl} className="hover:text-heading">
          Facebook
        </a>
      </div>
    </footer>
  );
}
