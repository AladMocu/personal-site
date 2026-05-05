"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale } from "../contexts/LocaleContext";

const values = [5, 7, 4, 15];
const suffixes = ["+", "", "+", "+"];

function CountUp({ to, suffix, active }: { to: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const tick = () => {
      frame++;
      const eased = 1 - Math.pow(1 - frame / total, 3);
      setCount(Math.round(eased * to));
      if (frame < total) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, to]);
  return <>{count}{suffix}</>;
}

export default function Stats() {
  const { t } = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-130px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ borderTop: "1px solid var(--bd)", borderBottom: "1px solid var(--bd)", backgroundColor: "var(--bg2)" }}
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: "1px", backgroundColor: "var(--bd)" }}>
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="py-10 px-6 md:py-14 md:px-10"
              style={{ backgroundColor: "var(--bg2)" }}
            >
              <div className="font-display font-extrabold mb-1.5" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)", color: "var(--neon)", lineHeight: 1 }}>
                <CountUp to={values[i]} suffix={suffixes[i]} active={isInView} />
              </div>
              <div className="text-base font-semibold mb-1" style={{ color: "var(--tx)" }}>{stat.label}</div>
              <div className="font-mono-custom text-xs tracking-wider uppercase" style={{ color: "var(--tx2)" }}>{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
