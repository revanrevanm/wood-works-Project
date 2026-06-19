"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { PROJECTS } from "@/lib/content";

/* Editorial bento layout for the homepage feature grid */
const SPAN_CLASS: Record<string, string> = {
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  normal: "",
};

export function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-wood-grain opacity-50" />
      <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-teak/10 blur-3xl" />

      <div className="container-prose relative">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeading
            align="left"
            dark
            eyebrow="Featured Work · சமீபத்திய வேலைகள்"
            title="Crafted to be"
            titleAccent="lived in"
            description="A glimpse into the homes, kitchens and spaces we've brought to life across Tamil Nadu."
            className="md:mb-0"
          />
          <Button asChild variant="gold" className="shrink-0">
            <Link href="/projects">
              View Full Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <RevealStagger className="mt-14 grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {featured.map((p) => (
            <RevealItem
              key={p.id}
              className={`group relative overflow-hidden rounded-3xl ${SPAN_CLASS[p.span ?? "normal"]}`}
            >
              <Image
                src={p.img}
                alt={`${p.title} — woodwork project in ${p.location}`}
                fill
                sizes="(max-width:768px) 100vw, 33vw"
                className="object-cover transition-transform duration-1200 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-block rounded-full bg-teak/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-charcoal-900">
                  {p.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-cream-50">
                  {p.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-cream-200/80">
                  <MapPin className="h-3.5 w-3.5" /> {p.location}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
