"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Micronotes",
    role: "Fullstack Developer",
    period: "Nov 2025 – Present",
    type: "Full-time",
    url: null,
    tech: ["React", "TypeScript", ".NET", "Azure", "Grafana", "Azure DevOps", "Service Bus"],
    points: [
      "Full-stack web development with React/TypeScript — modular, scalable front-end architecture",
      "Backend API development using .NET for secure, high-performance services",
      "Azure cloud management: deployment, monitoring, and infrastructure across environments",
      "CI/CD pipelines via Azure DevOps — automated builds, testing, and deployments",
      "Observability with Grafana: dashboards, alerts, and service reliability tracking",
      "Azure Service Bus: queue/topic config, message handling, and distributed systems troubleshooting",
    ],
  },
  {
    company: "Octapus",
    role: "Fullstack Developer",
    period: "Sept 2024 – Dec 2025",
    type: "Full-time",
    url: "https://octapus.io",
    tech: ["React", "Vite", "TypeScript", ".NET", "Django", "Docker", "Kubernetes"],
    points: [
      "Full-stack with React/Vite (TypeScript) for fast, modular, scalable front-end",
      "Backend APIs using .NET and Django — secure and maintainable services",
      "Database design and management: schema optimization, indexing, performance tuning",
      "Containerization with Docker ensuring environment consistency",
      "Kubernetes orchestration integrated with CI/CD for automated builds and deployments",
    ],
  },
  {
    company: "Universidad de los Andes",
    role: "Web Dev Instructor",
    period: "Aug 2025 – Dec 2025",
    type: "Part-time",
    url: null,
    tech: ["HTML", "CSS", "JavaScript"],
    points: [
      "Taught introductory web development to external participants",
      "Designed course material, practical exercises, and hands-on projects",
      "Adapted content for students with diverse technical backgrounds",
    ],
  },
  {
    company: "Needzaio",
    role: "Mobile Developer",
    period: "Aug 2021 – Apr 2026",
    type: "Full-time",
    url: null,
    tech: ["Flutter", "React", "GraphQL", "CI/CD", "Health Data"],
    points: [
      "Cross-platform mobile apps with Flutter — performant and intuitive UX",
      "Web application development with React for scalable, maintainable architecture",
      "GraphQL-based data modeling and optimized database management",
      "Acquisition and processing of health/medical data with compliance standards",
      "Automated CI/CD pipelines for streamlined app store deployments",
      "Data engineering workflows: EOD and on-demand analytics pipelines",
    ],
  },
  {
    company: "La Totuga",
    role: "Mobile Developer",
    period: "Mar 2023 – Jun 2024",
    type: "Full-time",
    url: null,
    tech: ["Flutter", "Next.js", "GCP", "Azure Blob", "Redis", "SQL Server"],
    points: [
      "Cross-platform mobile app development with Flutter",
      "Cloud-native architecture on GCP: scalable, secure, cost-optimized",
      "Migration and modernization of workloads from AWS to GCP",
      "Full-stack web apps with Next.js following service-oriented principles",
      "Distributed storage and caching with Azure Blob, SQL Server, and Redis",
    ],
  },
  {
    company: "QDIT",
    role: "QA Analyst",
    period: "Jul 2021 – Sep 2021",
    type: "Full-time",
    url: null,
    tech: ["QA Testing", "Google Error Reporting"],
    points: [
      "Quality assurance ensuring reliability and UX across all environments",
      "Incident monitoring and management via Google Error Reporting",
    ],
  },
  {
    company: "Gamedia",
    role: "Freelance Developer",
    period: "2019 – 2020",
    type: "Freelance",
    url: null,
    tech: [".NET", "MsSQL", "Entity Framework", "SMTP"],
    points: [
      "Design and management of software tools for video broadcasting workflows",
      "Mail service configuration using SMTP for secure communication",
      "MsSQL database design and management via .NET Entity Framework",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      className="py-20 md:py-36"
      style={{ backgroundColor: "var(--bg2)" }}
    >
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
            03 / Experience
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--tx)" }}
          >
            Work History
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Static bg line */}
          <div
            className="absolute top-3 bottom-3 pointer-events-none"
            style={{
              left: "1.125rem",
              width: "1px",
              backgroundColor: "var(--bd)",
            }}
          />
          {/* Animated fill line */}
          <motion.div
            className="absolute top-3 pointer-events-none"
            style={{
              left: "1.125rem",
              width: "1px",
              background:
                "linear-gradient(to bottom, var(--neon), var(--plum), rgba(139,92,246,0.1))",
              transformOrigin: "top",
            }}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -18 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Node */}
                <div
                  className="absolute flex items-center justify-center rounded-sm"
                  style={{
                    left: 0,
                    top: "1.25rem",
                    width: "2.25rem",
                    height: "2.25rem",
                    border: "1px solid var(--neon)",
                    backgroundColor: "var(--bg2)",
                  }}
                >
                  <div
                    className="rounded-sm"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "var(--neon)",
                    }}
                  />
                </div>

                {/* Card */}
                <div
                  className="card-static rounded-sm p-5 md:p-8"
                  style={{ backgroundColor: "var(--bg)" }}
                >
                  {/* Card header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="font-display font-bold text-xl"
                          style={{ color: "var(--tx)" }}
                        >
                          {exp.company}
                        </h3>
                        {exp.url && (
                          <a
                            href={exp.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[var(--neon)]"
                            style={{ color: "var(--tx2)" }}
                          >
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                      <div
                        className="font-mono-custom text-sm"
                        style={{ color: "var(--neon)" }}
                      >
                        {exp.role}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className="font-mono-custom text-xs tracking-wider"
                        style={{ color: "var(--tx2)" }}
                      >
                        {exp.period}
                      </span>
                      <span
                        className="font-mono-custom text-xs px-2 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: "var(--bg2)",
                          color: "var(--tx2)",
                          border: "1px solid var(--bd)",
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-1.5 mb-5">
                    {exp.points.map((pt, pi) => (
                      <li
                        key={pi}
                        className="flex gap-2.5 text-sm leading-relaxed"
                        style={{ color: "var(--tx2)" }}
                      >
                        <span style={{ color: "var(--tx3)", flexShrink: 0, marginTop: "1px" }}>
                          ·
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono-custom text-xs px-2.5 py-1 rounded-sm"
                        style={{
                          backgroundColor: "rgba(0,245,212,0.05)",
                          color: "var(--neon)",
                          border: "1px solid rgba(0,245,212,0.14)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education node at bottom */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 + experiences.length * 0.1 }}
            className="relative pl-12 md:pl-16 mt-8"
          >
            <div
              className="absolute flex items-center justify-center rounded-sm"
              style={{
                left: 0,
                top: "1.25rem",
                width: "2.25rem",
                height: "2.25rem",
                border: "1px solid var(--plum)",
                backgroundColor: "var(--bg2)",
              }}
            >
              <div
                className="rounded-sm"
                style={{ width: "8px", height: "8px", backgroundColor: "var(--plum)" }}
              />
            </div>
            <div
              className="card-static rounded-sm p-6"
              style={{ backgroundColor: "var(--bg)" }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3
                    className="font-display font-bold text-xl mb-1"
                    style={{ color: "var(--tx)" }}
                  >
                    Universidad de los Andes
                  </h3>
                  <div
                    className="font-mono-custom text-sm mb-2"
                    style={{ color: "var(--plum)" }}
                  >
                    BEng. Systems and Computing Engineering
                  </div>
                  <p className="text-sm" style={{ color: "var(--tx2)" }}>
                    Thesis:{" "}
                    <em>
                      Implementation of an IPS prototype for OneM2M IoT devices using
                      Machine Learning
                    </em>
                  </p>
                </div>
                <span
                  className="font-mono-custom text-xs tracking-wider"
                  style={{ color: "var(--tx2)" }}
                >
                  2017 – 2022
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
