"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, telLink, whatsappLink } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const word = {
  hidden: { opacity: 0, y: "100%" },
  show: (i: number) => ({
    opacity: 1,
    y: "0%",
    transition: { duration: 0.85, ease: EASE, delay: 0.15 + i * 0.08 },
  }),
};

const HEADLINE = ["Crafting", "Quality", "Woodwork", "Since", "1995"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Parallax wood-texture background */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/images/hero.jpg"
          alt="Premium woodwork craftsmanship by Natrayan Wood Works"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      {/* Layered overlays: bottom vignette + left-weighted scrim for text legibility */}
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-900/85 via-charcoal-900/45 to-charcoal-900/10" />
      <div className="absolute inset-0 -z-10 bg-wood-grain opacity-40" />

      {/* Floating decorative elements */}
      <motion.div
        aria-hidden
        className="absolute right-[8%] top-[22%] -z-10 hidden h-28 w-28 rounded-3xl border border-teak/30 bg-teak/5 backdrop-blur-sm md:block animate-float-slow"
      />
      <motion.div
        aria-hidden
        className="absolute left-[6%] bottom-[24%] -z-10 hidden h-16 w-16 rounded-full border border-cream-50/20 bg-cream-50/5 backdrop-blur md:block animate-float"
      />

      <motion.div
        style={{ y: yContent, opacity }}
        className="container-prose relative pt-28 md:pt-20"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-7 inline-flex items-center gap-3 rounded-full border border-cream-50/20 bg-charcoal-900/30 px-4 py-2 backdrop-blur"
        >
          <span className="flex gap-0.5 text-teak-300">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </span>
          <span className="text-xs font-medium tracking-wide text-cream-100">
            Trusted across {SITE.serviceAreas.join(" & ")} ·{" "}
            {SITE.experienceYears} Years
          </span>
        </motion.div>

        {/* Animated headline */}
        <h1 className="max-w-4xl font-display text-fluid-hero font-semibold leading-[0.98] text-cream-50">
          {HEADLINE.map((w, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
              <motion.span
                custom={i}
                variants={word}
                initial="hidden"
                animate="show"
                className={`inline-block ${
                  w === "1995" ? "text-gold-gradient" : ""
                }`}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream-100/85 md:text-lg balance"
        >
          Custom furniture, beds &amp; cots, TV units, modular kitchens, carved
          doors, windows &amp; all types of wood works across Karur and Coimbatore.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-3 max-w-xl font-tamil text-base text-teak-200/90"
        >
          கட்டில், டிவி யூனிட், மாடுலர் கிச்சன், நிலவு கதவு, ஜன்னல்கள் &amp; அனைத்து
          வகையான மரவேலைகள் — கரூர் மற்றும் கோயம்புத்தூரில்.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button asChild variant="gold" size="lg">
            <a href={telLink}>
              <Phone className="h-5 w-5" /> Call Now
            </a>
          </Button>
          <Button asChild variant="whatsapp" size="lg">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="text-cream-50">
            <Link href="/projects">
              View Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-cream-50/30 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-teak-300"
          />
        </div>
      </motion.div>
    </section>
  );
}
