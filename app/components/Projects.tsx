"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Code2 } from "lucide-react";
import { useLocale } from "../contexts/LocaleContext";

const featuredMeta = [
  { name: "Octapus",          icon: Globe,      accent: "#00f5d4", tech: ["React", "TypeScript", ".NET", "Django", "Docker", "Kubernetes"],   links: [{ label: "octapus.io", url: "https://octapus.io" }] },
  { name: "La Totuga",        icon: Smartphone, accent: "#8b5cf6", tech: ["Flutter", "Dart", "GCP", "Next.js", "Redis"],                       links: [{ label: "Play Store", url: "https://play.google.com/store/apps/details?id=app.totuga.totugamusic" }] },
  { name: "Singularity Health", icon: Smartphone, accent: "#60a5fa", tech: ["Flutter", "Dart", "GraphQL", "Medical Data", "CI/CD"],           links: [{ label: "Florenz", url: "https://play.google.com/store/apps/details?id=health.singularity.florenzhealth" }, { label: "Monaco", url: "https://play.google.com/store/apps/details?id=health.singularity.monaco" }, { label: "VitalLog", url: "https://play.google.com/store/apps/details?id=health.singularity.vitalLog" }] },
];

const personalMeta = [
  { name: "Health & Help", accent: "#fb7185", icon: Code2, tech: ["Mobile", "Emergency Systems"] },
  { name: "VBox",          accent: "#34d399", icon: Code2, tech: ["Web App", "Nutrition"] },
  { name: "CMSites",       accent: "#f59e0b", icon: Code2, tech: ["Node.js", "SMTP", "Monitoring"] },
];

export default function Projects() {
  const { t } = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-130px" });

  const featured = featuredMeta.map((m, i) => ({ ...m, type: t.projects.featured[i].type, description: t.projects.featured[i].description }));
  const personal = personalMeta.map((m, i) => ({ ...m, description: t.projects.personal[i].description }));

  return (
    <section id="projects" className="py-20 md:py-36" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mb-20"
        >
          <p
            className="font-mono-custom text-xs tracking-[0.28em] uppercase mb-3"
            style={{ color: "var(--neon)" }}
          >
            {t.projects.section}
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--tx)" }}
          >
            {t.projects.heading}
          </h2>
        </motion.div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {featured.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.13 }}
                className="card rounded-sm p-8 flex flex-col"
                style={{ backgroundColor: "var(--bg2)" }}
              >
                {/* Icon + type */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center"
                    style={{
                      backgroundColor: `${project.accent}12`,
                      border: `1px solid ${project.accent}28`,
                    }}
                  >
                    <Icon size={18} style={{ color: project.accent }} />
                  </div>
                  <span
                    className="font-mono-custom text-xs tracking-wider uppercase"
                    style={{ color: "var(--tx2)" }}
                  >
                    {project.type}
                  </span>
                </div>

                <h3
                  className="font-display font-bold text-xl mb-3"
                  style={{ color: "var(--tx)" }}
                >
                  {project.name}
                </h3>

                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: "var(--tx2)" }}
                >
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono-custom text-xs px-2.5 py-1 rounded-sm"
                      style={{
                        backgroundColor: "var(--bg3)",
                        color: "var(--tx2)",
                        border: "1px solid var(--bd)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono-custom text-xs tracking-wider uppercase transition-opacity hover:opacity-70"
                      style={{ color: project.accent }}
                    >
                      {link.label}
                      <ExternalLink size={10} />
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Personal projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {personal.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.25 + i * 0.1 }}
                className="card rounded-sm p-7"
                style={{ backgroundColor: "var(--bg2)" }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon size={14} style={{ color: project.accent }} />
                  <span
                    className="font-mono-custom text-xs tracking-wider uppercase"
                    style={{ color: "var(--tx2)" }}
                  >
                    {t.projects.personal_label}
                  </span>
                </div>
                <h3
                  className="font-display font-bold text-lg mb-2"
                  style={{ color: "var(--tx)" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-xs leading-relaxed mb-3"
                  style={{ color: "var(--tx2)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono-custom text-xs px-2 py-0.5 rounded-sm"
                      style={{
                        backgroundColor: "var(--bg3)",
                        color: "var(--tx2)",
                        border: "1px solid var(--bd)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
