import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";
import "./globals.css";

// next/font downloads these at build time and serves them from our own
// domain: no extra request to Google from the visitor's phone.
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`, // page titles become "Birds | Rose Blossom Silkies"
  },
  description: site.description,
  // Open Graph controls the preview card when a link is shared on Facebook.
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
};

// Colors the phone's browser bar to match the page instead of flashing white.
export const viewport: Viewport = {
  themeColor: "#1d001d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans text-[15px] leading-relaxed">
        <Header />
        <main className="mx-auto w-full max-w-2xl flex-1 px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
