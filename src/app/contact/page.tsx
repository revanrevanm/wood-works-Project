import type { Metadata } from "next";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Instagram,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import {
  INSTAGRAM,
  PHONE_DISPLAY,
  SITE,
  telLink,
  whatsappLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Wood Works in Karur & Coimbatore",
  description:
    "Contact Natrayan Wood Works in Pallapatti, Karur. Call +91 98437 51633, message on WhatsApp, or send an enquiry. Serving Karur & Coimbatore. Free consultation.",
  alternates: { canonical: `${SITE.url}/contact` },
};

const CARDS = [
  {
    icon: Phone,
    title: "Call Us",
    value: PHONE_DISPLAY,
    href: telLink,
    note: "Mon–Sat, 9 AM – 8 PM",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat instantly",
    href: whatsappLink(),
    note: "Fastest response",
    external: true,
  },
  {
    icon: MapPin,
    title: "Visit Workshop",
    value: SITE.address.full,
    href: `https://www.google.com/maps?q=${SITE.geo.lat},${SITE.geo.lng}`,
    note: "Pallapatti, Karur",
    external: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@natrayan1828",
    href: INSTAGRAM,
    note: "See our latest work",
    external: true,
  },
];

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    SITE.address.full
  )}&z=13&output=embed`;

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get In Touch · தொடர்பு கொள்ள"
        title="Let's start your"
        titleAccent="dream project"
        description="Call, WhatsApp or send us a message. We offer free consultations across Karur and Coimbatore."
        tamil="அழைக்கவும், வாட்ஸ்அப் செய்யவும் — இலவச ஆலோசனை."
        image="/images/contact-hero.jpg"
      />

      {/* Contact cards */}
      <section className="py-20 md:py-24">
        <div className="container-prose">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title} delay={i * 0.08}>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group flex h-full items-start gap-5 rounded-4xl border border-walnut-200/60 bg-cream-50 p-7 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-teak/40 hover:shadow-lift"
                  >
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-walnut-700 p-3 text-teak-200 transition-colors group-hover:bg-gold-sheen group-hover:text-charcoal-900">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-walnut-800">
                        {c.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-walnut-600">
                        {c.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>

          {/* Form + Map */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-4xl border border-walnut-200/60 bg-cream-50 p-7 shadow-soft md:p-9">
                <h2 className="font-display text-2xl font-semibold text-walnut-800">
                  Send us an enquiry
                </h2>
                <p className="mt-2 font-tamil text-sm text-teak-600">
                  உங்கள் விவரங்களை அனுப்புங்கள் — உடனே தொடர்பு கொள்கிறோம்.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex h-full flex-col gap-6">
                <div className="relative min-h-[320px] flex-1 overflow-hidden rounded-4xl border border-walnut-200/60 shadow-soft">
                  <iframe
                    title="Natrayan Wood Works location map"
                    src={mapSrc}
                    className="absolute inset-0 h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="rounded-4xl bg-walnut-800 p-7 text-cream-100">
                  <h3 className="font-display text-xl font-semibold text-cream-50">
                    Workshop Hours
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-teak-300" />
                      Monday – Saturday · 9:00 AM – 8:00 PM
                    </li>
                    <li className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-teak-300" />
                      {SITE.address.full}
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-teak-300" />
                      Serving {SITE.serviceAreas.join(" & ")}
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
