import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  description,
  align = "center",
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  titleAccent?: string;
  description?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-7 bg-teak/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "mt-4 font-display text-fluid-h2 font-semibold leading-[1.05] balance",
            dark ? "text-cream-50" : "text-walnut-800"
          )}
        >
          {title} {titleAccent && <span className="text-gold-gradient">{titleAccent}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed md:text-lg balance",
              dark ? "text-cream-200/80" : "text-muted-foreground"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
