"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { WHY_CHOOSE } from "@/lib/content";

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-prose">
        <SectionHeading
          eyebrow="Why Natrayan · ஏன் நாங்கள்?"
          title="Built on trust,"
          titleAccent="finished to perfection"
          description="Five promises that have kept families and businesses coming back to us for over thirty years."
        />

        <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Image panel */}
          <RevealItem className="relative min-h-[320px] overflow-hidden rounded-4xl lg:col-span-2 lg:row-span-2">
            <Image
              src="/images/why-craftsman.jpg"
              alt="Skilled craftsman at work"
              fill
              sizes="(max-width:1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <p className="font-display text-2xl font-semibold text-cream-50">
                Every joint. Every finish.
              </p>
              <p className="mt-1 font-tamil text-teak-200">
                ஒவ்வொரு வேலையும் கவனத்துடன்.
              </p>
            </div>
          </RevealItem>

          {/* Cards */}
          {WHY_CHOOSE.map((item) => {
            const Icon = item.icon;
            return (
              <RevealItem
                key={item.title}
                className="group flex items-start gap-5 rounded-3xl border border-walnut-200/60 bg-cream-50 p-6 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:border-teak/40 hover:shadow-lift lg:col-span-3 xl:col-span-3"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream-200 text-walnut-700 transition-colors duration-400 group-hover:bg-walnut-700 group-hover:text-teak-200">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-walnut-800">
                    {item.title}{" "}
                    <span className="font-tamil text-sm font-normal text-teak-600">
                      · {item.titleTamil}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
