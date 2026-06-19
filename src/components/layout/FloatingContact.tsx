"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Plus } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {open && (
              <>
                <motion.a
                  href={telLink}
                  initial={{ opacity: 0, y: 12, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.7 }}
                  transition={{ delay: 0.05 }}
                  className="flex items-center gap-3 rounded-full bg-walnut-700 py-2.5 pl-4 pr-5 text-sm font-semibold text-cream-50 shadow-lift"
                >
                  <Phone className="h-4 w-4 text-teak-300" /> Call Now
                </motion.a>
                <motion.a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.7 }}
                  className="flex items-center gap-3 rounded-full bg-[#1FA855] py-2.5 pl-4 pr-5 text-sm font-semibold text-white shadow-lift"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </motion.a>
              </>
            )}
          </AnimatePresence>

          <button
            aria-label="Contact options"
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-sheen bg-[length:200%_auto] text-charcoal-900 shadow-gold transition-transform hover:scale-105"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-teak/40" />
            <motion.span animate={{ rotate: open ? 45 : 0 }} className="relative">
              {open ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
            </motion.span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
