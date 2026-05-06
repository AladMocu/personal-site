const en = {
  nav: {
    about: "About", skills: "Skills", work: "Work",
    projects: "Projects", contact: "Contact", hire: "Hire Me",
  },
  hero: {
    eyebrow: "Systems and Computing Engineer · Bogotá, Colombia",
    roles: ["Fullstack Developer", "Mobile Developer", "Cloud Architect", "Systems and Computing Engineer"],
    description: "Building scalable systems with React, .NET, Flutter & Azure. From mobile apps to cloud infrastructure — I ship.",
    cta_work: "View Work",
    cta_hello: "Say Hello",
    scroll: "Scroll",
  },
  stats: [
    { label: "Years Experience", sub: "Since 2019" },
    { label: "Companies", sub: "Across industries" },
    { label: "Apps in Stores", sub: "Play Store shipped" },
    { label: "Technologies", sub: "Full-stack depth" },
  ],
  skills: { section: "02 / Skills", heading: "Technical Arsenal" },
  experience: {
    section: "03 / Experience",
    heading: "Work History",
    present: "Present",
    entries: [
      {
        role: "Fullstack Developer", type: "Full-time",
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
        role: "Fullstack Developer", type: "Full-time",
        points: [
          "Full-stack with React/Vite (TypeScript) for fast, modular, scalable front-end",
          "Backend APIs using .NET and Django — secure and maintainable services",
          "Database design and management: schema optimization, indexing, performance tuning",
          "Containerization with Docker ensuring environment consistency",
          "Kubernetes orchestration integrated with CI/CD for automated builds and deployments",
        ],
      },
      {
        role: "Web Dev Lecturer", type: "Part-time",
        points: [
          "Taught introductory web development to external participants",
          "Designed course material, practical exercises, and hands-on projects",
          "Adapted content for students with diverse technical backgrounds",
        ],
      },
      {
        role: "Fullstack Developer", type: "Full-time",
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
        role: "Mobile Developer", type: "Full-time",
        points: [
          "Cross-platform mobile app development with Flutter",
          "Cloud-native architecture on GCP: scalable, secure, cost-optimized",
          "Migration and modernization of workloads from AWS to GCP",
          "Full-stack web apps with Next.js following service-oriented principles",
          "Distributed storage and caching with Azure Blob, SQL Server, and Redis",
        ],
      },
      {
        role: "QA Analyst", type: "Full-time",
        points: [
          "Quality assurance ensuring reliability and UX across all environments",
          "Incident monitoring and management via Google Error Reporting",
        ],
      },
      {
        role: "Freelance Developer", type: "Freelance",
        points: [
          "Design and management of software tools for video broadcasting workflows",
          "Mail service configuration using SMTP for secure communication",
          "MsSQL database design and management via .NET Entity Framework",
        ],
      },
    ],
    education: {
      degree: "B.S. Systems and Computing Engineering",
      thesis: "Implementation of an IPS prototype for OneM2M IoT devices using Machine Learning",
    },
  },
  projects: {
    section: "04 / Projects",
    heading: "Featured Work",
    personal_label: "Personal Project",
    featured: [
      {
        type: "Web Platform",
        description: "B2B web platform built with React/Vite, .NET, and Django. Containerized with Docker and orchestrated via Kubernetes with automated CI/CD pipelines.",
      },
      {
        type: "Mobile App",
        description: "Music streaming mobile app live on the Play Store. Cross-platform Flutter app backed by GCP cloud architecture with Redis caching and Next.js web.",
      },
      {
        type: "App Suite · 3 Apps",
        description: "Suite of three health & medical apps (Florenz Health, Monaco, VitalLog) built with Flutter. Compliance-grade data handling for healthcare environments.",
      },
    ],
    personal: [
      { description: "Private emergency alarm system for trained medical personnel and first responders." },
      { description: "Diet planner and scheduler providing personalized recipes for vegetarian/vegan transitions." },
      { description: "Site monitoring service checking availability and status of multiple domains with real-time notifications." },
    ],
  },
  contact: {
    section: "05 / Contact",
    heading_1: "Let's build",
    heading_2: "something.",
    footer_role: "Systems Engineer",
    footer_location: "Bogotá, Colombia",
    footer_built: "Built with Next.js & Framer Motion",
    email: "Email", linkedin: "LinkedIn", phone: "Phone",
  },
};

export default en;
export type Translations = typeof en;
