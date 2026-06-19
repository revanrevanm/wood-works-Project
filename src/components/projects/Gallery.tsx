"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, ZoomIn } from "lucide-react";
import { PROJECTS, PROJECT_CATEGORIES, type Project } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [active, setActive] = useState<(typeof PROJECT_CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length
      ),
    [filtered.length]
  );

  // Keyboard nav + scroll lock when lightbox open
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, next, prev]);

  const current: Project | null = lightbox !== null ? filtered[lightbox] : null;

  return (
    <section className="py-20 md:py-24">
      <div className="container-prose">
        {/* Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                active === cat
                  ? "text-cream-50"
                  : "text-walnut-600 hover:text-walnut-800"
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-walnut-700 shadow-soft"
                  transition={{ type: "spring", stiffness: 360, damping: 32 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry via CSS columns */}
        <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => (
              <motion.button
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(idx)}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-3xl shadow-soft"
              >
                <Image
                  src={p.img}
                  alt={`${p.title} — woodwork in ${p.location}`}
                  width={900}
                  height={p.span === "tall" ? 1200 : 700}
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-1100 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal-900/85 via-charcoal-900/10 to-transparent p-5 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-teak/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-charcoal-900">
                    {p.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-cream-50">
                    {p.title}
                  </h3>
                  <p className="flex items-center gap-1.5 text-xs text-cream-200/80">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </p>
                </div>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/90 text-walnut-700 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal-900/95 p-4 backdrop-blur-sm md:p-10"
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              aria-label="Previous"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 md:left-8"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              aria-label="Next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/10 text-cream-50 transition-colors hover:bg-cream-50/20 md:right-8"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.figure
              key={current.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-4xl"
            >
              <Image
                src={current.img}
                alt={current.title}
                width={1400}
                height={950}
                className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain shadow-lift"
              />
              <figcaption className="mt-4 text-center">
                <span className="inline-block rounded-full bg-teak/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-charcoal-900">
                  {current.category}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-cream-50">
                  {current.title}
                </h3>
                <p className="text-sm text-cream-200/70">
                  {current.location} · Natrayan Wood Works
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
