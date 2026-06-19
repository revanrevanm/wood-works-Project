import type { Metadata } from "next";
import Image from "next/image";
import { Target, Heart, ShieldCheck, Leaf } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/Reveal";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — 30+ Years of Carpentry in Karur",
  description:
    "Natrayan Wood Works has been crafting premium furniture and interiors in Karur & Coimbatore since 1995. Meet the team behind three decades of trusted woodwork.",
  alternates: { canonical: `${SITE.url}/about` },
};

const VALUES = [
  { icon: Heart, title: "Craftsmanship First", desc: "We treat every project like it's for our own home — no shortcuts, ever." },
  { icon: ShieldCheck, title: "Honest & Transparent", desc: "Clear pricing, clear timelines, and a relationship built on trust." },
  { icon: Leaf, title: "Quality Materials", desc: "Carefully seasoned teak and hardwoods chosen to last for generations." },
  { icon: Target, title: "Built Around You", desc: "Every design is shaped by your space, lifestyle and budget." },
];

const TIMELINE = [
  { year: "1995", title: "The Beginning", desc: "Natrayan opens a small carpentry workshop in Pallapatti, Karur." },
  { year: "2005", title: "Growing Trust", desc: "Word of mouth spreads — homes and shops across Karur choose us." },
  { year: "2015", title: "Into Coimbatore", desc: "We expand our service area and take on larger interior projects." },
  { year: "Today", title: "1000+ Projects", desc: "A 4-member master team delivering premium woodwork across Tamil Nadu." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Our Story · எங்கள் கதை"
        title="Three decades of"
        titleAccent="woodworking devotion"
        description="From a humble Karur workshop to a trusted name in premium carpentry across Tamil Nadu."
        image="/images/about-hero.jpg"
      />

      {/* Story */}
      <section className="py-24 md:py-28">
        <div className="container-prose grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative aspect-[5/6] overflow-hidden rounded-4xl shadow-lift">
              <Image
                src="/images/about-workshop.jpg"
                alt="Natrayan Wood Works workshop"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Workshop"
              title="A name Karur has"
              titleAccent="trusted since 1995"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Natrayan Wood Works was founded in {SITE.established} by{" "}
                {SITE.owner}, a master craftsman with an uncompromising eye for
                detail. What began as a single workbench in {SITE.address.locality}{" "}
                has grown into one of the most trusted carpentry teams in the
                region.
              </p>
              <p>
                Over {SITE.experienceYears} years, our {SITE.craftsmen}-member
                team has completed more than {SITE.projectsDone} projects — from
                bespoke furniture and modular kitchens to complete home and
                commercial interiors. Every piece carries the same promise:
                honest work, premium materials, and a finish that lasts.
              </p>
              <p className="font-tamil text-walnut-600">
                தரம், நம்பிக்கை, கைவினைத்திறன் — இதுவே எங்கள் அடையாளம். உங்கள்
                வீட்டை, கடையை, அலுவலகத்தை அழகாக்க நாங்கள் இருக்கிறோம்.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-charcoal-900 py-24 md:py-28">
        <div className="container-prose grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal direction="right" className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-4xl border border-teak/20 shadow-lift">
                <Image
                  src="/images/owner.jpg"
                  alt="Natrayan — Founder & Master Craftsman, Natrayan Wood Works"
                  fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              {/* name badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-teak/30 bg-walnut-800 px-6 py-3 text-center shadow-gold">
                <p className="font-display text-lg font-semibold text-cream-50">
                  {SITE.owner}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-teak-300">
                  Founder &amp; Master Craftsman
                </p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <span className="eyebrow text-teak-300">
              <span className="h-px w-7 bg-teak/60" /> Meet the Owner · உரிமையாளர்
            </span>
            <h2 className="mt-5 font-display text-fluid-h3 font-semibold leading-[1.1] text-cream-50 balance">
              The hands &amp; heart behind every project
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream-200/80">
              For over {SITE.experienceYears} years, {SITE.owner} has personally
              led every project at Natrayan Wood Works — measuring, designing and
              supervising each piece himself. His belief is simple: treat every
              customer&apos;s home like his own.
            </p>
            <blockquote className="mt-6 border-l-2 border-teak/50 pl-5 font-tamil text-lg italic leading-relaxed text-teak-100">
              “தரமான மரம், நேர்மையான வேலை, சரியான நேரம் — இதுதான் 30 வருஷமா
              நடராஜன் வுட் ஒர்க்ஸ் வளர்ந்ததுக்கு காரணம். உங்க கனவு வேலையை நாங்க
              நிஜமாக்குறோம்.”
            </blockquote>
            <p className="mt-4 text-sm text-cream-200/60">
              — {SITE.owner}, Founder
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-fade py-24 md:py-28">
        <div className="container-prose">
          <SectionHeading
            eyebrow="What Drives Us · எங்கள் கொள்கைகள்"
            title="Values built into"
            titleAccent="every project"
          />
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <RevealItem key={v.title}>
                <div className="h-full rounded-4xl border border-walnut-200/60 bg-cream-50 p-7 shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-walnut-700 p-3 text-teak-200">
                    <v.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-walnut-800">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-28">
        <div className="container-prose">
          <SectionHeading
            eyebrow="Our Journey · எங்கள் பயணம்"
            title="Three decades,"
            titleAccent="one promise"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.08}>
                <div className="relative h-full rounded-4xl border border-walnut-200/60 bg-cream-50 p-7 shadow-soft">
                  <span className="font-display text-5xl font-semibold text-teak/30">
                    {t.year}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-walnut-800">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
