import { site } from "@/content/site";
import { HeaderBrand, SiteNav } from "./SiteNav";

export function Header() {
  return (
    <header className="mx-auto w-full max-w-2xl px-4 pt-4">
      <HeaderBrand name={site.name} />
      <SiteNav items={site.nav} />
      <hr className="border-line" />
    </header>
  );
}
