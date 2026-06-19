"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, TreePine } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE, telLink, whatsappLink } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-walnut-200/40 bg-cream-50/85 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container-prose flex h-[72px] items-center justify-between md:h-20">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl border transition-colors",
              scrolled
                ? "border-teak/40 bg-walnut-700 text-teak-200"
                : "border-cream-50/30 bg-charcoal-900/30 text-teak-200 backdrop-blur"
            )}
          >
            <TreePine className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-lg font-semibold tracking-tight transition-colors",
                scrolled ? "text-walnut-800" : "text-cream-50"
              )}
            >
              Natrayan
            </span>
            <span
              className={cn(
                "block text-[10px] font-semibold uppercase tracking-[0.3em] transition-colors",
                scrolled ? "text-teak-600" : "text-teak-200/90"
              )}
            >
              Wood Works
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    scrolled ? "text-walnut-600" : "text-cream-100/90",
                    "hover:text-teak-500"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-teak"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant={scrolled ? "outline" : "ghost"} size="sm">
            <a href={telLink}>
              <Phone className="h-4 w-4" /> Call
            </a>
          </Button>
          <Button asChild variant="whatsapp" size="sm">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl border transition-colors lg:hidden",
            scrolled
              ? "border-walnut-200 text-walnut-700"
              : "border-cream-50/30 text-cream-50"
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-walnut-200/40 bg-cream-50/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-prose flex flex-col gap-1 py-5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium",
                      pathname === link.href
                        ? "bg-walnut-700 text-cream-50"
                        : "text-walnut-700 hover:bg-cream-200"
                    )}
                  >
                    <span>{link.label}</span>
                    <span className="font-tamil text-sm text-teak-600">
                      {link.labelTamil}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="mt-3 grid grid-cols-2 gap-3">
                <Button asChild variant="outline" size="sm">
                  <a href={telLink}>
                    <Phone className="h-4 w-4" /> Call
                  </a>
                </Button>
                <Button asChild variant="whatsapp" size="sm">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </Button>
              </li>
              <li className="mt-2 px-4 text-center text-xs text-muted-foreground">
                {SITE.address.full}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
