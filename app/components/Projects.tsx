"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Code2 } from "lucide-react";

const featured = [
  {
    name: "Octapus",
    type: "Web Platform",
    icon: Globe,
    accent: "#00f5d4",
    description:
      "B2B web platform built with React/Vite, .NET, and Django. Containerized with Docker and orchestrated via Kubernetes with automated CI/CD pipelines.",
    tech: ["React", "TypeScript", ".NET", "Django", "Docker", "Kubernetes"],
    links: [{ label: "octapus.io", url: "https://octapus.io" }],
  },
  {
    name: "La Totuga",
    type: "Mobile App",
    icon: Smartphone,
    accent: "#8b5cf6",
    description:
      "Music streaming mobile app live on the Play Store. Cross-platform Flutter app backed by GCP cloud architecture with Redis caching and Next.js web.",
    tech: ["Flutter", "Dart", "GCP", "Next.js", "Redis"],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=app.totuga.totugamusic",
      },
    ],
  },
  {
    name: "Singularity Health",
    type: "App Suite · 3 Apps",
    icon: Smartphone,
    accent: "#60a5fa",
    description:
      "Suite of three health & medical apps (Florenz Health, Monaco, VitalLog) built with Flutter. Compliance-grade data handling for healthcare environments.",
    tech: ["Flutter", "Dart", "GraphQL", "Medical Data", "CI/CD"],
    links: [
      {
        label: "Florenz",
        url: "https://play.google.com/store/apps/details?id=health.singularity.florenzhealth",
      },
      {
        label: "Monaco",
        url: "https://play.google.com/store/apps/details?id=health.singularity.monaco",
      },
      {
        label: "VitalLog",
        url: "https://play.google.com/store/apps/details?id=health.singularity.vitalLog",
      },
    ],
  },
];

const personal = [
  {
    name: "Health & Help",
    accent: "#fb7185",
    icon: Code2,
    description:
      "Private emergency alarm system for trained medical personnel and first responders.",
    tech: ["Mobile", "Emergency Systems"],
  },
  {
    name: "VBox",
    accent: "#34d399",
    icon: Code2,
    description:
      "Diet planner and scheduler providing personalized recipes for vegetarian/vegan transitions.",
    tech: ["Web App", "Nutrition"],
  },
  {
    name: "CMSites",
    accent: "#f59e0b",
    icon: Code2,
    description:
      "Site monitoring service checking availability and status of multiple domains with real-time notifications.",
    tech: ["Node.js", "SMTP", "Monitoring"],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-20 md:py-36" ref={ref}>
      <div className="max-w-6xl mx-auto px-8 sm:px-16 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-20"
        >
          <p
            className="font-mono-custom text-xs tracking-[0.28em] uppercase mb-3"
            style={{ color: "var(--neon)" }}
          >
            04 / Projects
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--tx)" }}
          >
            Featured Work
          </h2>
        </motion.div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {featured.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.07 }}
                className="card rounded-sm p-7"
                style={{ backgroundColor: "var(--bg2)" }}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon size={14} style={{ color: project.accent }} />
                  <span
                    className="font-mono-custom text-xs tracking-wider uppercase"
                    style={{ color: "var(--tx2)" }}
                  >
                    Personal Project
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
