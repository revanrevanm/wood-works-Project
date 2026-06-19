"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";
import { SITE } from "@/lib/site";

const POINTS = [
  "Three generations of carpentry expertise",
  "Personally supervised by Natrayan",
  "Honest pricing, no hidden costs",
];

export function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="bg-cream-fade py-24 md:py-32">
      <div className="container-prose grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image collage */}
        <div ref={ref} className="relative">
          <Reveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-4xl shadow-lift">
              <motion.div style={{ y }} className="absolute inset-0 scale-110">
                <Image
                  src="/images/about-preview.jpg"
                  alt="Natrayan crafting custom woodwork in the workshop"
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </Reveal>

          {/* Floating est. card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -bottom-7 -left-5 rounded-3xl border border-teak/30 bg-walnut-800 px-7 py-6 text-cream-50 shadow-gold md:-left-10"
          >
            <p className="font-display text-5xl font-semibold text-gold-gradient">
              {SITE.experienceYears}
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-cream-200/70">
              Years of Trust
            </p>
          </motion.div>
        </div>

        {/* Story */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-7 bg-teak/60" /> Our Story · எங்கள் கதை
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-fluid-h2 font-semibold leading-[1.05] text-walnut-800 balance">
              Three decades of <span className="text-gold-gradient">honest craftsmanship</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Founded in {SITE.established} by master craftsman {SITE.owner},
              Natrayan Wood Works began as a small workshop in {SITE.address.locality},
              Karur. Over {SITE.experienceYears} years, we have grown into a trusted
              name for premium carpentry — delivering more than {SITE.projectsDone}{" "}
              projects across Karur and Coimbatore.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-4 font-tamil text-base leading-relaxed text-walnut-600">
              1995-ல் தொடங்கிய நடராஜன் வுட் ஒர்க்ஸ், 30 ஆண்டுகளாக கரூர் மற்றும்
              கோயம்புத்தூரில் தரமான மரவேலைக்கு நம்பிக்கையான முகவரியாக உள்ளது.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-7 space-y-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3 text-walnut-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teak-500" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <Button asChild variant="primary" size="lg" className="mt-9">
              <Link href="/about">
                Read Our Full Story <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
