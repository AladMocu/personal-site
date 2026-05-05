"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Link, Phone, ArrowUpRight } from "lucide-react";
import { useLocale } from "../contexts/LocaleContext";

const contactsMeta = [
  { key: "email" as const, value: "aladmocu@gmail.com", href: "mailto:aladmocu@gmail.com", icon: Mail },
  { key: "linkedin" as const, value: "/in/AladMocu", href: "https://linkedin.com/in/AladMocu", icon: Link, external: true },
  { key: "phone" as const, value: "+57 (302) 753-9385", href: "tel:+573027539385", icon: Phone },
];

export default function Contact() {
  const { t } = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-130px" });
  const contacts = contactsMeta.map((m) => ({ ...m, label: t.contact[m.key] }));

  return (
    <section
      id="contact"
      className="py-20 md:py-36"
      style={{
        backgroundColor: "var(--bg2)",
        borderTop: "1px solid var(--bd)",
      }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mb-20"
        >
          <p
            className="font-mono-custom text-xs tracking-[0.28em] uppercase mb-4"
            style={{ color: "var(--neon)" }}
          >
            {t.contact.section}
          </p>
          <h2
            className="font-display font-extrabold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", color: "var(--tx)", wordBreak: "break-word" }}
          >
            {t.contact.heading_1}
            <br />
            <span style={{ color: "var(--neon)" }}>{t.contact.heading_2}</span>
          </h2>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {contacts.map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.13 }}
                className="group card rounded-sm p-8 flex items-center justify-between"
                style={{ backgroundColor: "var(--bg)" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: "rgba(0,245,212,0.07)",
                      border: "1px solid rgba(0,245,212,0.18)",
                    }}
                  >
                    <Icon size={16} style={{ color: "var(--neon)" }} />
                  </div>
                  <div>
                    <div
                      className="font-mono-custom text-xs tracking-wider uppercase mb-1"
                      style={{ color: "var(--tx2)" }}
                    >
                      {contact.label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "var(--tx)" }}>
                      {contact.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--tx3)" }}
                />
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--bd)" }}
        >
          <div className="font-display font-bold text-xl" style={{ color: "var(--tx)" }}>
            Albert Molano<span style={{ color: "var(--neon)" }}>.</span>
          </div>
          <div
            className="font-mono-custom text-xs tracking-[0.15em]"
            style={{ color: "var(--tx2)" }}
          >
             {new Date().getFullYear()} · {t.contact.footer_role} · {t.contact.footer_location}
          </div>
          <div
            className="font-mono-custom text-xs"
            style={{ color: "var(--tx3)" }}
          >
            {t.contact.footer_built}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
