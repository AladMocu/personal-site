"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const roles = [
  "Fullstack Developer",
  "Mobile Engineer",
  "Cloud Architect",
  "Systems Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < currentRole.length) {
        timer = setTimeout(
          () => setDisplayed(currentRole.slice(0, displayed.length + 1)),
          72
        );
      } else {
        timer = setTimeout(() => setTyping(false), 2400);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed((p) => p.slice(0, -1)), 32);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.035) 1.5px, transparent 1.5px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* Violet orb — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          right: "-8%",
          width: "700px",
          height: "700px",
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.2) 0%, transparent 65%)",
          filter: "blur(72px)",
          borderRadius: "50%",
        }}
      />

      {/* Cyan orb — bottom left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-10%",
          left: "-12%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle at center, rgba(0,245,212,0.07) 0%, transparent 65%)",
          filter: "blur(72px)",
          borderRadius: "50%",
        }}
      />

      {/* Faint horizontal rule */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          top: "50%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(28,28,46,0.6) 20%, rgba(28,28,46,0.6) 80%, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-8 sm:px-16 lg:px-24 pt-32 pb-24 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center gap-3 mb-10"
        >
          <div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              backgroundColor: "var(--neon)",
              boxShadow: "0 0 8px var(--neon), 0 0 16px rgba(0,245,212,0.4)",
            }}
          />
          <span
            className="font-mono-custom text-xs tracking-[0.22em] uppercase"
            style={{ color: "var(--tx2)" }}
          >
            Systems Engineer · Bogotá, Colombia
          </span>
        </motion.div>

        {/* Name — staggered reveal */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold leading-[0.86] tracking-tight text-[var(--tx)]"
            style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)" }}
          >
            ALBERT
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.48, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold leading-[0.86] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)" }}
          >
            <span style={{ color: "var(--tx)" }}>MOLANO</span>
            <span style={{ color: "var(--neon)" }}>.</span>
          </motion.h1>
        </div>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span
            className="text-2xl select-none"
            style={{ color: "var(--tx3)", fontFamily: "var(--font-geist-mono)" }}
          >
            —
          </span>
          <span
            className="text-lg md:text-2xl"
            style={{
              color: "var(--neon)",
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.02em",
            }}
          >
            {displayed}
            <span
              className="inline-block w-[2px] h-5 md:h-6 align-middle ml-0.5"
              style={{
                backgroundColor: "var(--neon)",
                animation: "blink 1s step-end infinite",
              }}
            />
          </span>
          <span
            className="text-2xl select-none"
            style={{ color: "var(--tx3)", fontFamily: "var(--font-geist-mono)" }}
          >
            —
          </span>
        </motion.div>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.05 }}
          className="max-w-xl text-base md:text-lg leading-relaxed mb-12"
          style={{ color: "var(--tx2)" }}
        >
          Building scalable systems with React, .NET, Flutter &amp; Azure.
          From mobile apps to cloud infrastructure — I ship.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-sm font-mono-custom text-sm tracking-wider uppercase font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{ backgroundColor: "var(--neon)", color: "var(--bg)" }}
          >
            View Work
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-sm font-mono-custom text-sm tracking-wider uppercase transition-all duration-200 hover:bg-[var(--bg2)] hover:text-[var(--tx)]"
            style={{ border: "1px solid var(--bd2)", color: "var(--tx2)" }}
          >
            Say Hello
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5"
      >
        <span
          className="font-mono-custom text-[10px] tracking-[0.35em] uppercase"
          style={{ color: "var(--tx3)" }}
        >
          Scroll
        </span>
        <ChevronDown
          size={13}
          style={{
            color: "var(--tx3)",
            animation: "scroll-bounce 2.4s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
