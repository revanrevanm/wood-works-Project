"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { SERVICES, type Service } from "@/lib/content";

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <RevealItem className="h-full">
      <Link
        href="/services"
        className="group relative flex h-full flex-col overflow-hidden rounded-4xl border border-walnut-200/60 bg-cream-50 p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-teak/40 hover:shadow-lift"
      >
        {/* hover wash */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-teak/0 to-walnut-700/0 opacity-0 transition-opacity duration-500 group-hover:from-teak/[0.06] group-hover:to-walnut-700/[0.06] group-hover:opacity-100" />

        <div className="relative flex items-center justify-between">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-walnut-700 text-teak-200 transition-all duration-500 group-hover:bg-gold-sheen group-hover:bg-[length:200%_auto] group-hover:text-charcoal-900">
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </span>
          <ArrowUpRight className="h-5 w-5 text-walnut-300 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teak-500" />
        </div>

        <h3 className="relative mt-6 font-display text-2xl font-semibold text-walnut-800">
          {service.title}
        </h3>
        <p className="relative mt-1 font-tamil text-sm text-teak-600">
          {service.titleTamil}
        </p>
        <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
          {service.desc}
        </p>

        <div className="relative mt-5 flex flex-wrap gap-2">
          {service.features.map((f) => (
            <span
              key={f}
              className="rounded-full border border-walnut-200/70 bg-cream-100 px-3 py-1 text-xs font-medium text-walnut-600"
            >
              {f}
            </span>
          ))}
        </div>
      </Link>
    </RevealItem>
  );
}

export function ServicesGrid() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-prose">
        <SectionHeading
          eyebrow="What We Craft · எங்கள் சேவைகள்"
          title="Wood works for every"
          titleAccent="space & purpose"
          description="From a single statement piece to a complete home interior — we craft it all with seasoned timber and meticulous detail."
        />

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </RevealStagger>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
