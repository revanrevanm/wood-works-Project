import Link from "next/link";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  TreePine,
  Instagram,
} from "lucide-react";
import {
  INSTAGRAM,
  NAV_LINKS,
  PHONE_DISPLAY,
  SITE,
  telLink,
  whatsappLink,
} from "@/lib/site";
import { SERVICES } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal-900 text-cream-100">
      <div className="pointer-events-none absolute inset-0 bg-wood-grain opacity-60" />
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-teak/10 blur-3xl" />

      <div className="container-prose relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-teak/40 bg-walnut-700 text-teak-200">
              <TreePine className="h-5 w-5" strokeWidth={1.6} />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-cream-50">
                Natrayan
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-teak-300">
                Wood Works
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-200/70">
            {SITE.tagline}. Trusted craftsmanship across Karur & Coimbatore for
            over three decades.
          </p>
          <p className="mt-4 font-tamil text-sm text-teak-200/80">
            {SITE.taglineTamil}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-base font-semibold text-cream-50">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-cream-200/70 transition-colors hover:text-teak-300"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-base font-semibold text-cream-50">
            Our Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href="/services"
                  className="text-cream-200/70 transition-colors hover:text-teak-300"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base font-semibold text-cream-50">
            Get In Touch
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-cream-200/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teak-300" />
              <span>{SITE.address.full}</span>
            </li>
            <li>
              <a
                href={telLink}
                className="flex items-center gap-3 transition-colors hover:text-teak-300"
              >
                <Phone className="h-4 w-4 shrink-0 text-teak-300" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-teak-300"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-teak-300" />
                WhatsApp Us
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-teak-300"
              >
                <Instagram className="h-4 w-4 shrink-0 text-teak-300" />
                Follow on Instagram
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teak-300" />
              <span>Mon – Sat · 9:00 AM – 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream-50/10">
        <div className="container-prose flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream-200/60 md:flex-row">
          <p>
            © {SITE.established}–{new Date().getFullYear()} {SITE.name}. All rights
            reserved.
          </p>
          <p>
            Handcrafted with care in {SITE.address.region}, Tamil Nadu ·{" "}
            <span className="font-tamil">தரத்திற்கு முகவரி</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
