"use client";
import { useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--bd)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-16 lg:px-24 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-sm flex items-center justify-center font-display font-bold text-sm transition-all duration-300 group-hover:bg-[rgba(0,245,212,0.08)]"
              style={{ border: "1px solid var(--neon)", color: "var(--neon)" }}
            >
              AM
            </div>
            <span
              className="font-mono-custom text-xs tracking-[0.15em] uppercase hidden sm:block transition-colors duration-300"
              style={{ color: "var(--tx2)" }}
            >
              Albert Molano
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono-custom text-xs tracking-[0.1em] uppercase transition-colors duration-200 hover:text-[var(--tx)]"
                style={{ color: "var(--tx2)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-mono-custom text-xs tracking-[0.1em] uppercase px-4 py-2 rounded-sm transition-all duration-200 hover:bg-[rgba(0,245,212,0.08)]"
              style={{ border: "1px solid var(--neon)", color: "var(--neon)" }}
            >
              Hire Me
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="w-9 h-9 rounded-sm flex items-center justify-center transition-colors duration-200 hover:bg-[var(--bg2)]"
              style={{ border: "1px solid var(--bd2)", color: "var(--tx2)" }}
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden flex flex-col justify-center px-10"
            style={{ backgroundColor: "var(--bg)" }}
          >
            <nav className="flex flex-col">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.25 }}
                  className="font-display font-extrabold py-4 border-b transition-colors duration-150 hover:text-[var(--neon)]"
                  style={{
                    fontSize: "clamp(1.8rem, 8vw, 2.4rem)",
                    color: "var(--tx)",
                    borderColor: "var(--bd)",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={close}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.055 + 0.05, duration: 0.25 }}
                className="mt-8 font-mono-custom text-sm tracking-wider uppercase px-6 py-3.5 rounded-sm text-center"
                style={{ backgroundColor: "var(--neon)", color: "var(--bg)" }}
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
