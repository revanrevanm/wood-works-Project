import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans, Hind_Madurai } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const tamil = Hind_Madurai({
  subsets: ["tamil", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-tamil",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#3A271B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Natrayan Wood Works | Best Wood Works & Carpenter in Karur & Coimbatore",
    template: "%s | Natrayan Wood Works",
  },
  description:
    "Premium wood works in Karur & Coimbatore since 1995. Custom furniture, modular kitchen, wardrobes, wooden doors & windows, interior carpentry. 30+ years, 1000+ projects. Call +91 98437 51633.",
  keywords: [
    "wood works in Karur",
    "carpenter in Karur",
    "wood works in Coimbatore",
    "furniture maker in Karur",
    "custom furniture Karur",
    "modular kitchen Karur",
    "wooden doors Karur",
    "interior wood works Coimbatore",
    "carpentry Pallapatti Karur",
    "wooden cot Karur",
    "wooden bed maker Karur",
    "TV unit Karur",
    "carved doors Karur",
    "nilavu kathavu Karur",
  ],
  authors: [{ name: SITE.owner }],
  creator: SITE.name,
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "Natrayan Wood Works | Premium Carpentry in Karur & Coimbatore",
    description:
      "30+ years of trusted craftsmanship. Custom furniture, modular kitchens, doors, wardrobes & complete interiors across Karur and Coimbatore.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Natrayan Wood Works | Premium Carpentry in Karur & Coimbatore",
    description:
      "Crafting quality woodwork since 1995. Custom furniture, modular kitchens, doors & interiors.",
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${tamil.variable}`}
    >
      <body>
        <JsonLd />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
