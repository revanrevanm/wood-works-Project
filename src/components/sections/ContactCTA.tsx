"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_DISPLAY, telLink, whatsappLink } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-prose">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative overflow-hidden rounded-[2.5rem] bg-walnut-800 px-7 py-16 text-center shadow-lift md:px-16 md:py-20"
        >
          {/* decorative */}
          <div className="pointer-events-none absolute inset-0 bg-wood-grain opacity-50" />
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-teak/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-72 w-72 rounded-full bg-teak/10 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow text-teak-300">
              <span className="h-px w-7 bg-teak/60" /> Let&apos;s Build Together
            </span>
            <h2 className="mt-5 font-display text-fluid-h2 font-semibold leading-[1.05] text-cream-50 balance">
              Have a project in mind? <br />
              <span className="text-gold-gradient">Let&apos;s craft it together.</span>
            </h2>
            <p className="mt-5 text-base text-cream-200/80 md:text-lg balance">
              Get a free consultation and quote today. Message us on WhatsApp with
              your idea — we&apos;ll handle the rest.
            </p>
            <p className="mt-3 font-tamil text-base text-teak-200/90">
              உங்கள் கனவு வேலையை எங்களிடம் சொல்லுங்கள் — இலவச ஆலோசனை &amp; விலைப்பட்டியல்.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="whatsapp" size="lg">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" /> Message on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="gold" size="lg">
                <a href={telLink}>
                  <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
