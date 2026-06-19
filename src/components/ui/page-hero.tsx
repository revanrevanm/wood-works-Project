import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  tamil,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description?: string;
  tamil?: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative flex min-h-[62vh] items-end overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="absolute inset-0 -z-10 bg-wood-grain opacity-40" />

      <div className="container-prose pb-16 md:pb-20">
        {/* breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-cream-200/70">
          <Link href="/" className="transition-colors hover:text-teak-300">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-teak-300">{crumb}</span>
        </nav>

        <Reveal>
          <span className="eyebrow text-teak-300">
            <span className="h-px w-7 bg-teak/60" /> {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-3xl font-display text-fluid-h2 font-semibold leading-[1.04] text-cream-50 balance">
            {title} {titleAccent && <span className="text-gold-gradient">{titleAccent}</span>}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-base text-cream-100/85 md:text-lg balance">
              {description}
            </p>
          </Reveal>
        )}
        {tamil && (
          <Reveal delay={0.16}>
            <p className="mt-3 max-w-xl font-tamil text-base text-teak-200/90">
              {tamil}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
