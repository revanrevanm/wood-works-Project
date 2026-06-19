import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, PhoneCall, PencilRuler, Hammer, Truck } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SERVICES } from "@/lib/content";
import { SITE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Services — Custom Furniture, Modular Kitchen, Doors & More",
  description:
    "Explore our wood works in Karur & Coimbatore: custom furniture, modular kitchens, wardrobes, wooden doors & windows, TV units, pooja units, interiors & commercial carpentry.",
  alternates: { canonical: `${SITE.url}/services` },
};

const PROCESS = [
  { icon: PhoneCall, step: "01", title: "Consultation", desc: "Call or WhatsApp us with your idea. We listen and understand your needs." },
  { icon: PencilRuler, step: "02", title: "Design & Quote", desc: "We measure, design and share a clear, transparent quotation." },
  { icon: Hammer, step: "03", title: "Crafting", desc: "Our master craftsmen build it with seasoned wood and precision." },
  { icon: Truck, step: "04", title: "Install & Handover", desc: "We install on schedule and hand over a flawless finish." },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What We Craft · எங்கள் சேவைகள்"
        title="All kinds of"
        titleAccent="wood works"
        description="From bespoke furniture to complete interiors — premium carpentry for homes and businesses across Karur and Coimbatore."
        tamil="தனிப்பயன் மரச்சாமான்கள் முதல் முழு உட்புற வேலைகள் வரை."
        image="/images/services-hero.jpg"
      />

      {/* Full service list */}
      <section className="py-24 md:py-28">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Our Expertise"
            title="Crafted for every"
            titleAccent="room & requirement"
            description="Whatever your space needs in wood, our team delivers it with care and a premium finish."
          />

          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <RevealItem key={s.slug}>
                  <div className="group flex h-full flex-col rounded-4xl border border-walnut-200/60 bg-cream-50 p-8 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:border-teak/40 hover:shadow-lift">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-walnut-700 text-teak-200 transition-all duration-400 group-hover:bg-gold-sheen group-hover:bg-[length:200%_auto] group-hover:text-charcoal-900">
                      <Icon className="h-7 w-7" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-walnut-800">
                      {s.title}
                    </h3>
                    <p className="mt-1 font-tamil text-sm text-teak-600">
                      {s.titleTamil}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                    <p className="mt-2 font-tamil text-sm leading-relaxed text-walnut-600/80">
                      {s.descTamil}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="rounded-full border border-walnut-200/70 bg-cream-100 px-3 py-1 text-xs font-medium text-walnut-600"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-5 border-t border-cream-300">
                      <a
                        href={whatsappLink(
                          `Vanakkam! Enaku ${s.title} (${s.titleTamil}) pathi vivaram venum.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-teak-600 transition-colors hover:text-walnut-700"
                      >
                        <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
                      </a>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Process */}
      <section className="bg-charcoal-900 py-24 md:py-28">
        <div className="container-prose">
          <SectionHeading
            dark
            eyebrow="How We Work · எங்கள் முறை"
            title="A simple, transparent"
            titleAccent="4-step process"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.step} delay={i * 0.1}>
                  <div className="relative h-full rounded-4xl border border-cream-50/10 bg-charcoal-800/60 p-7 backdrop-blur">
                    <span className="font-display text-5xl font-semibold text-teak/30">
                      {p.step}
                    </span>
                    <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-walnut-700 text-teak-200">
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 font-display text-xl font-semibold text-cream-50">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream-200/70">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="gold" size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
