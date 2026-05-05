"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLocale } from "../contexts/LocaleContext";
import {
  SiReact, SiTypescript, SiNextdotjs, SiAngular, SiFlutter,
  SiDotnet, SiDjango, SiExpress, SiNodedotjs, SiGraphql,
  SiJavascript, SiPython, SiDart, SiKotlin,
  SiGooglecloud, SiDocker, SiKubernetes, SiGithubactions, SiGrafana,
  SiPostgresql, SiMysql, SiSqlite, SiRedis,
  SiGit, SiJetbrains, SiUipath,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Cloud, GitBranch, Database, Mail, Code2 } from "lucide-react";

type IconComponent = React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>;

type Skill = {
  name: string;
  icon: IconComponent;
  docs: string;
};

const categories: { name: string; accent: string; skills: Skill[] }[] = [
  {
    name: "Frontend",
    accent: "#00f5d4",
    skills: [
      { name: "React", icon: SiReact as IconComponent, docs: "https://react.dev" },
      { name: "TypeScript", icon: SiTypescript as IconComponent, docs: "https://www.typescriptlang.org/docs/" },
      { name: "Next.js", icon: SiNextdotjs as IconComponent, docs: "https://nextjs.org/docs" },
      { name: "Angular", icon: SiAngular as IconComponent, docs: "https://angular.dev/docs" },
      { name: "Flutter", icon: SiFlutter as IconComponent, docs: "https://docs.flutter.dev" },
      { name: "React Native", icon: SiReact as IconComponent, docs: "https://reactnative.dev/docs/getting-started" },
    ],
  },
  {
    name: "Backend",
    accent: "#8b5cf6",
    skills: [
      { name: ".NET / C#", icon: SiDotnet as IconComponent, docs: "https://learn.microsoft.com/en-us/dotnet/" },
      { name: "Django", icon: SiDjango as IconComponent, docs: "https://docs.djangoproject.com/" },
      { name: "Express.js", icon: SiExpress as IconComponent, docs: "https://expressjs.com/en/api.html" },
      { name: "Node.js", icon: SiNodedotjs as IconComponent, docs: "https://nodejs.org/en/docs" },
      { name: "GraphQL", icon: SiGraphql as IconComponent, docs: "https://graphql.org/learn/" },
    ],
  },
  {
    name: "Languages",
    accent: "#f59e0b",
    skills: [
      { name: "JavaScript", icon: SiJavascript as IconComponent, docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", icon: SiTypescript as IconComponent, docs: "https://www.typescriptlang.org/docs/" },
      { name: "Python", icon: SiPython as IconComponent, docs: "https://docs.python.org/3/" },
      { name: "Dart", icon: SiDart as IconComponent, docs: "https://dart.dev/guides" },
      { name: "Kotlin", icon: SiKotlin as IconComponent, docs: "https://kotlinlang.org/docs/" },
      { name: "Java", icon: FaJava as IconComponent, docs: "https://docs.oracle.com/en/java/" },
      { name: "C#", icon: SiDotnet as IconComponent, docs: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
    ],
  },
  {
    name: "Cloud & DevOps",
    accent: "#60a5fa",
    skills: [
      { name: "Azure", icon: Cloud, docs: "https://learn.microsoft.com/en-us/azure/" },
      { name: "GCP", icon: SiGooglecloud as IconComponent, docs: "https://cloud.google.com/docs" },
      { name: "Docker", icon: SiDocker as IconComponent, docs: "https://docs.docker.com/" },
      { name: "Kubernetes", icon: SiKubernetes as IconComponent, docs: "https://kubernetes.io/docs/" },
      { name: "CI/CD", icon: SiGithubactions as IconComponent, docs: "https://docs.github.com/en/actions" },
      { name: "Azure DevOps", icon: GitBranch, docs: "https://learn.microsoft.com/en-us/azure/devops/" },
      { name: "Grafana", icon: SiGrafana as IconComponent, docs: "https://grafana.com/docs/" },
    ],
  },
  {
    name: "Databases",
    accent: "#34d399",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql as IconComponent, docs: "https://www.postgresql.org/docs/" },
      { name: "MySQL", icon: SiMysql as IconComponent, docs: "https://dev.mysql.com/doc/" },
      { name: "MSSQL", icon: Database, docs: "https://learn.microsoft.com/en-us/sql/" },
      { name: "SQLite", icon: SiSqlite as IconComponent, docs: "https://www.sqlite.org/docs.html" },
      { name: "Redis", icon: SiRedis as IconComponent, docs: "https://redis.io/docs/" },
    ],
  },
  {
    name: "Tools",
    accent: "#fb7185",
    skills: [
      { name: "Git", icon: SiGit as IconComponent, docs: "https://git-scm.com/doc" },
      { name: "UiPath", icon: SiUipath as IconComponent, docs: "https://docs.uipath.com/" },
      { name: "Service Bus", icon: Cloud, docs: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/" },
      { name: "AJAX", icon: SiJavascript as IconComponent, docs: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX" },
      { name: "SMTP", icon: Mail, docs: "https://datatracker.ietf.org/doc/html/rfc5321" },
      { name: "JetBrains", icon: SiJetbrains as IconComponent, docs: "https://www.jetbrains.com/help/" },
    ],
  },
];

export default function Skills() {
  const { t } = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-130px" });

  return (
    <section id="skills" className="py-20 md:py-36" ref={ref}>
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
            {t.skills.section}
          </p>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--tx)" }}
          >
            {t.skills.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.1 }}
              className="card rounded-sm p-8"
              style={{ backgroundColor: "var(--bg2)" }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: cat.accent,
                    boxShadow: `0 0 6px ${cat.accent}`,
                  }}
                />
                <span
                  className="font-mono-custom text-xs tracking-[0.18em] uppercase font-semibold"
                  style={{ color: cat.accent }}
                >
                  {cat.name}
                </span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <a
                      key={skill.name}
                      href={skill.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono-custom text-xs px-3 py-1.5 rounded-sm transition-all duration-200 flex items-center gap-1.5"
                      style={{
                        backgroundColor: "var(--bg3)",
                        color: "var(--tx)",
                        border: "1px solid var(--bd)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = cat.accent + "66";
                        el.style.color = cat.accent;
                        el.style.backgroundColor = cat.accent + "12";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "var(--bd)";
                        el.style.color = "var(--tx)";
                        el.style.backgroundColor = "var(--bg3)";
                      }}
                    >
                      <Icon size={13} style={{ flexShrink: 0 }} />
                      {skill.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
