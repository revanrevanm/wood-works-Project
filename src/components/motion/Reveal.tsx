"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Direction = "up" | "down" | "left" | "right" | "none";

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 36 },
  down: { x: 0, y: -36 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Flips to `true` when the element scrolls into view, OR after a fallback delay
 * (whichever first), OR immediately if reduced-motion. This guarantees content
 * is NEVER stuck hidden — even on fast scroll, headless, or odd viewports.
 */
function useReveal(amount: number, fallbackMs: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduce || inView) {
      setShow(true);
      return;
    }
    const t = setTimeout(() => setShow(true), fallbackMs);
    return () => clearTimeout(t);
  }, [inView, reduce, fallbackMs]);

  return { ref, show, reduce };
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className,
  amount = 0.15,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
}) {
  const { ref, show, reduce } = useReveal(amount, 900 + delay * 1000);
  const off = offset[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        show
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: reduce ? 1 : 0, x: reduce ? 0 : off.x, y: reduce ? 0 : off.y }
      }
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered group. Children must be wrapped in <RevealItem/>. Drives children
 * via the `animate` PROP (variant label) so the stagger cascades correctly —
 * with the same in-view + fallback-timer guarantee.
 */
export function RevealStagger({
  children,
  className,
  amount = 0.12,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  stagger?: number;
}) {
  const { ref, show, reduce } = useReveal(amount, 1100);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={show || reduce ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: 0.04 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 34 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}
