"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLocale } from "../contexts/LocaleContext";

const experiencesMeta = [
  { company: "Micronotes", periodStart: "Nov 2025", periodEnd: null,       url: null,               tech: ["React", "TypeScript", ".NET", "Azure", "Grafana", "Azure DevOps", "Service Bus"] },
  { company: "Octapus",    periodStart: "Sept 2024", periodEnd: "Dec 2025", url: "https://octapus.io", tech: ["React", "Vite", "TypeScript", ".NET", "Django", "Docker", "Kubernetes"] },
  { company: "Universidad de los Andes", periodStart: "Aug 2025", periodEnd: "Dec 2025", url: null, tech: ["HTML", "CSS", "JavaScript"] },
  { company: "Needzaio",   periodStart: "Aug 2021", periodEnd: "Apr 2026",  url: null,               tech: ["Flutter", "React", "GraphQL", "CI/CD", "Health Data"] },
  { company: "La Totuga",  periodStart: "Mar 2023", periodEnd: "Jun 2024",  url: null,               tech: ["Flutter", "Next.js", "GCP", "Azure Blob", "Redis", "SQL Server"] },
  { company: "QDIT",       periodStart: "Jul 2021", periodEnd: "Sep 2021",  url: null,               tech: ["QA Testing", "Google Error Reporting"] },
  { company: "Gamedia",    periodStart: "2019",     periodEnd: "2020",      url: null,               tech: [".NET", "MsSQL", "Entity Framework", "SMTP"] },
];

type Exp = {
  company: string; periodStart: string; periodEnd: string | null;
  url: string | null; tech: string[];
  role: string; type: string; points: string[]; period: string;
};

function TimelineEntry({ exp }: { exp: Exp }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -26 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12 md:pl-16"
    >
      {/* Node */}
      <div
        className="absolute flex items-center justify-center rounded-sm"
        style={{ left: 0, top: "1.25rem", width: "2.25rem", height: "2.25rem", border: "1px solid var(--neon)", backgroundColor: "var(--bg2)" }}
      >
        <div className="rounded-sm" style={{ width: "8px", height: "8px", backgroundColor: "var(--neon)" }} />
      </div>

      {/* Card */}
      <div className="card-static rounded-sm p-5 md:p-8" style={{ backgroundColor: "var(--bg)" }}>
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display font-bold text-xl" style={{ color: "var(--tx)" }}>
                {exp.company}
              </h3>
              {exp.url && (
                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--neon)]" style={{ color: "var(--tx2)" }}>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
            <div className="font-mono-custom text-sm" style={{ color: "var(--neon)" }}>
              {exp.role}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="font-mono-custom text-xs tracking-wider" style={{ color: "var(--tx2)" }}>
              {exp.period}
            </span>
            <span className="font-mono-custom text-xs px-2 py-0.5 rounded-sm" style={{ backgroundColor: "var(--bg2)", color: "var(--tx2)", border: "1px solid var(--bd)" }}>
              {exp.type}
            </span>
          </div>
        </div>

        <ul className="space-y-1.5 mb-5">
          {exp.points.map((pt, pi) => (
            <li key={pi} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "var(--tx2)" }}>
              <span style={{ color: "var(--tx3)", flexShrink: 0, marginTop: "1px" }}>·</span>
              {pt}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span key={t} className="font-mono-custom text-xs px-2.5 py-1 rounded-sm" style={{ backgroundColor: "rgba(0,245,212,0.05)", color: "var(--neon)", border: "1px solid rgba(0,245,212,0.14)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function EducationEntry({ degree, thesis }: { degree: string; thesis: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -26 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12 md:pl-16 mt-8"
    >
      <div
        className="absolute flex items-center justify-center rounded-sm"
        style={{ left: 0, top: "1.25rem", width: "2.25rem", height: "2.25rem", border: "1px solid var(--plum)", backgroundColor: "var(--bg2)" }}
      >
        <div className="rounded-sm" style={{ width: "8px", height: "8px", backgroundColor: "var(--plum)" }} />
      </div>
      <div className="card-static rounded-sm p-6" style={{ backgroundColor: "var(--bg)" }}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display font-bold text-xl mb-1" style={{ color: "var(--tx)" }}>
              Universidad de los Andes
            </h3>
            <div className="font-mono-custom text-sm mb-2" style={{ color: "var(--plum)" }}>
              {degree}
            </div>
            <p className="text-sm" style={{ color: "var(--tx2)" }}>
              <em>{thesis}</em>
            </p>
          </div>
          <span className="font-mono-custom text-xs tracking-wider" style={{ color: "var(--tx2)" }}>
            2017 – 2022
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { t } = useLocale();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-130px" });

  const experiences = experiencesMeta.map((meta, i) => ({
    ...meta,
    role: t.experience.entries[i].role,
    type: t.experience.entries[i].type,
    points: t.experience.entries[i].points,
    period: `${meta.periodStart} – ${meta.periodEnd ?? t.experience.present}`,
  }));

  return (
    <section id="experience" className="py-20 md:py-36" style={{ backgroundColor: "var(--bg2)" }}>
      <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mb-20"
        >
          <p className="font-mono-custom text-xs tracking-[0.28em] uppercase mb-3" style={{ color: "var(--neon)" }}>
            {t.experience.section}
          </p>
          <h2 className="font-display font-bold" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--tx)" }}>
            {t.experience.heading}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Static bg line */}
          <div className="absolute top-3 bottom-3 pointer-events-none" style={{ left: "1.125rem", width: "1px", backgroundColor: "var(--bd)" }} />
          {/* Animated fill line */}
          <motion.div
            className="absolute top-3 pointer-events-none"
            style={{ left: "1.125rem", width: "1px", background: "linear-gradient(to bottom, var(--neon), var(--plum), rgba(139,92,246,0.1))", transformOrigin: "top" }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <TimelineEntry key={`${exp.company}-${i}`} exp={exp} />
            ))}
          </div>

          <EducationEntry degree={t.experience.education.degree} thesis={t.experience.education.thesis} />
        </div>
      </div>
    </section>
  );
}
