"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Award, Hammer, Users, Sparkles } from "lucide-react";
import { RevealItem, RevealStagger } from "@/components/motion/Reveal";

type Stat = {
  icon: typeof Award;
  value: number;
  suffix: string;
  label: string;
  labelTamil: string;
};

const STATS: Stat[] = [
  { icon: Award, value: 30, suffix: "+", label: "Years Experience", labelTamil: "ஆண்டு அனுபவம்" },
  { icon: Hammer, value: 1000, suffix: "+", label: "Projects Completed", labelTamil: "முடிக்கப்பட்ட வேலைகள்" },
  { icon: Users, value: 4, suffix: "", label: "Skilled Craftsmen", labelTamil: "திறமையான கைவினைஞர்கள்" },
  { icon: Sparkles, value: 100, suffix: "%", label: "Quality Materials", labelTamil: "தரமான பொருட்கள்" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const run = () => {
      if (done.current) return;
      done.current = true;
      const dur = 1600;
      const start = performance.now();
      let raf = 0;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    };
    if (inView) run();
    // Fallback: if the section never crosses the threshold, still show the value.
    const t = setTimeout(run, 1500);
    return () => clearTimeout(t);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function TrustStats() {
  return (
    <section className="relative z-10 -mt-16 px-6">
      <div className="container-prose">
        <div className="overflow-hidden rounded-4xl border border-walnut-200/50 bg-cream-50/90 shadow-lift backdrop-blur-xl">
          <RevealStagger className="grid grid-cols-2 divide-cream-300 lg:grid-cols-4 lg:divide-x">
            {STATS.map((s) => (
              <RevealItem
                key={s.label}
                className="flex flex-col items-center gap-3 px-5 py-9 text-center md:px-6 md:py-11"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-walnut-700 text-teak-200">
                  <s.icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <p className="font-display text-4xl font-semibold text-walnut-800 md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm font-medium text-walnut-600">{s.label}</p>
                <p className="font-tamil text-xs text-teak-600">{s.labelTamil}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
