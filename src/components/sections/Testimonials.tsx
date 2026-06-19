"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { TESTIMONIALS, type Testimonial } from "@/lib/content";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full w-[340px] shrink-0 flex-col rounded-4xl border border-walnut-200/60 bg-cream-50 p-7 shadow-soft md:w-[400px]">
      <Quote className="h-8 w-8 text-teak-300" />
      <blockquote className="mt-4 font-tamil text-base leading-relaxed text-walnut-700">
        “{t.quoteTamil}”
      </blockquote>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {t.quote}
      </p>
      <figcaption className="mt-6 flex items-center gap-4 border-t border-cream-300 pt-5">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-walnut-700 font-display text-lg font-semibold text-teak-200">
          {t.name.charAt(0)}
        </span>
        <div className="flex-1">
          <p className="font-semibold text-walnut-800">{t.name}</p>
          <p className="text-xs text-muted-foreground">
            {t.role} · {t.location}
          </p>
        </div>
        <span className="flex gap-0.5 text-teak-400">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  // duplicate for a seamless marquee loop
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="overflow-hidden bg-cream-fade py-24 md:py-32">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Client Love · வாடிக்கையாளர் கருத்துகள்"
          title="Words from the homes &"
          titleAccent="businesses we've built"
          description="Real feedback from families and owners across Karur and Coimbatore."
        />
      </div>

      <div className="group relative mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-6 px-3 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
