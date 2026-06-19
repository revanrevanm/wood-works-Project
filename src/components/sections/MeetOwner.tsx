"use client";

import Image from "next/image";
import { Phone, MessageCircle, BadgeCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { SITE, telLink, whatsappLink } from "@/lib/site";

export function MeetOwner() {
  return (
    <section className="relative overflow-hidden bg-cream-fade py-24 md:py-32">
      <div className="pointer-events-none absolute -right-24 top-1/3 h-80 w-80 rounded-full bg-teak/10 blur-3xl" />

      <div className="container-prose grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Owner photo */}
        <Reveal direction="right">
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-4xl border border-walnut-200/60 shadow-lift">
              <Image
                src="/images/owner-hero.jpg"
                alt={`${SITE.owner} — Founder of Natrayan Wood Works, in his workshop`}
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* floating verified badge */}
            <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-teak/30 bg-walnut-800 px-5 py-3.5 text-cream-50 shadow-gold md:-right-6">
              <BadgeCheck className="h-7 w-7 text-teak-300" strokeWidth={1.6} />
              <div className="leading-tight">
                <p className="font-display text-base font-semibold">
                  {SITE.experienceYears} Years
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-cream-200/70">
                  Trusted Service
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-7 bg-teak/60" /> Meet the Owner · உரிமையாளர்
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-fluid-h2 font-semibold leading-[1.05] text-walnut-800 balance">
              {SITE.owner},{" "}
              <span className="text-gold-gradient">Founder &amp; Master Craftsman</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-4 flex items-center gap-2">
              <span className="flex gap-0.5 text-teak-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="text-sm font-medium text-walnut-600">
                Personally leads every project · Since {SITE.established}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              For over {SITE.experienceYears} years, {SITE.owner} has personally
              measured, designed and supervised every piece that leaves the
              Natrayan Wood Works workshop in {SITE.address.locality}, Karur. When
              you work with us, you work directly with the master craftsman
              himself.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <blockquote className="mt-5 border-l-2 border-teak/50 pl-5 font-tamil text-base italic leading-relaxed text-walnut-700">
              “தரமான மரம், நேர்மையான வேலை, சரியான நேரம் — இதுதான் 30 வருஷமா எங்க
              வெற்றிக்கு காரணம். உங்க கனவு வேலையை நாங்க நிஜமாக்குறோம்.”
            </blockquote>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="primary" size="lg">
                <a href={telLink}>
                  <Phone className="h-5 w-5" /> Talk to {SITE.owner}
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
