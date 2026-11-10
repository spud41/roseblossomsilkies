import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Label, Panel } from "@/components/Panel";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.owner} at ${site.name}.`,
};

// Big tap targets instead of a form: on a phone, tapping "Call" or "Message
// on Facebook" opens the app they already use, which beats typing a form.
const methods = [
  { label: "Facebook", detail: "Message us. Fastest reply.", href: site.facebookUrl },
  { label: "Call or text", detail: site.phoneDisplay, href: `tel:${site.phone}` },
  { label: "Email", detail: site.email, href: `mailto:${site.email}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" intro={`Questions about a bird, waffles, or pickup? ${site.owner} reads every message.`} />
      <ul className="space-y-2">
        {methods.map((m) => (
          <li key={m.label}>
            <a
              href={m.href}
              className="flex items-center justify-between gap-4 rounded-box surface px-4 py-3 transition hover:bg-panel-hi"
            >
              <span>
                <Label>{m.label}</Label>
                <span className="block font-semibold text-heading">{m.detail}</span>
              </span>
              <span aria-hidden="true" className="text-accent">→</span>
            </a>
          </li>
        ))}
      </ul>
      <Panel className="mt-4 p-4">
        <Label>Location</Label>
        <p className="mt-1 font-semibold text-heading">{site.location}</p>
        <p className="mt-1 text-sm text-muted">{site.pickupInfo}</p>
      </Panel>
    </>
  );
}
