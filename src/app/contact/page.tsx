import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.owner} at ${site.name}.`,
};

// Big tap targets instead of a form: on a phone, tapping "Call" or "Message
// on Facebook" opens the app they already use, which beats typing a form.
const methods = [
  { label: "Message on Facebook", detail: "Fastest reply", href: site.facebookUrl, icon: "💬" },
  { label: "Call or text", detail: site.phoneDisplay, href: `tel:${site.phone}`, icon: "📞" },
  { label: "Email", detail: site.email, href: `mailto:${site.email}`, icon: "✉️" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Say hello" intro={`Questions about a bird, waffles, or pickup? ${site.owner} reads every message.`} />
      <div className="mx-auto max-w-xl px-4">
        <ul className="space-y-4">
          {methods.map((m) => (
            <li key={m.label}>
              <a
                href={m.href}
                className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-blush/50 transition hover:ring-rose"
              >
                <span aria-hidden="true" className="text-3xl">{m.icon}</span>
                <span>
                  <span className="block text-lg font-bold text-rose-dark">{m.label}</span>
                  <span className="block text-plum-soft">{m.detail}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-3xl bg-petal/60 p-6">
          <h2 className="font-display text-xl font-semibold">Where we are</h2>
          <p className="mt-2">{site.location}</p>
          <p className="mt-2 text-plum-soft">{site.pickupInfo}</p>
        </div>
      </div>
    </>
  );
}
