import type { Translations } from "./en";

const es: Translations = {
  nav: {
    about: "Sobre mí", skills: "Habilidades", work: "Trabajo",
    projects: "Proyectos", contact: "Contacto", hire: "Contrátame",
  },
  hero: {
    eyebrow: "Ingeniero de Sistemas · Bogotá, Colombia",
    roles: ["Desarrollador Fullstack", "Ingeniero Mobile", "Arquitecto Cloud", "Ingeniero de Sistemas"],
    description: "Construyendo sistemas escalables con React, .NET, Flutter y Azure. De apps móviles a infraestructura cloud — entrego resultados.",
    cta_work: "Ver Proyectos",
    cta_hello: "Contactar",
    scroll: "Desplazar",
  },
  stats: [
    { label: "Años de Experiencia", sub: "Desde 2019" },
    { label: "Empresas", sub: "Distintas industrias" },
    { label: "Apps Publicadas", sub: "En Play Store" },
    { label: "Tecnologías", sub: "Profundidad fullstack" },
  ],
  skills: { section: "02 / Habilidades", heading: "Arsenal Técnico" },
  experience: {
    section: "03 / Experiencia",
    heading: "Experiencia Laboral",
    present: "Presente",
    entries: [
      {
        role: "Desarrollador Fullstack", type: "Tiempo completo",
        points: [
          "Desarrollo web fullstack con React/TypeScript — arquitectura frontend modular y escalable",
          "Desarrollo de APIs backend con .NET para servicios seguros y de alto rendimiento",
          "Gestión de infraestructura en Azure: despliegue, monitoreo y mantenimiento de entornos",
          "Pipelines CI/CD con Azure DevOps — compilaciones, pruebas y despliegues automatizados",
          "Observabilidad con Grafana: dashboards, alertas y seguimiento de confiabilidad del servicio",
          "Azure Service Bus: configuración de colas/tópicos, mensajería y resolución de problemas distribuidos",
        ],
      },
      {
        role: "Desarrollador Fullstack", type: "Tiempo completo",
        points: [
          "Desarrollo fullstack con React/Vite (TypeScript) para una UI rápida, modular y escalable",
          "APIs backend con .NET y Django — servicios seguros y de fácil mantenimiento",
          "Diseño y gestión de bases de datos: optimización de esquemas, indexación y ajuste de rendimiento",
          "Contenedorización con Docker para consistencia entre entornos",
          "Orquestación con Kubernetes integrado en CI/CD para despliegues automatizados",
        ],
      },
      {
        role: "Instructor de Desarrollo Web", type: "Tiempo parcial",
        points: [
          "Enseñanza de desarrollo web introductorio a participantes externos",
          "Diseño de materiales del curso, ejercicios prácticos y proyectos aplicados",
          "Adaptación del contenido a estudiantes con distintos niveles técnicos",
        ],
      },
      {
        role: "Desarrollador Mobile", type: "Tiempo completo",
        points: [
          "Apps móviles multiplataforma con Flutter — UX eficiente e intuitiva",
          "Desarrollo de aplicaciones web con React para arquitecturas escalables y mantenibles",
          "Modelado de datos con GraphQL y gestión optimizada de bases de datos",
          "Adquisición y procesamiento de datos médicos/de salud con estándares de cumplimiento",
          "Pipelines CI/CD automatizados para despliegue en tiendas de aplicaciones",
          "Flujos de ingeniería de datos: pipelines de análisis EOD y bajo demanda",
        ],
      },
      {
        role: "Desarrollador Mobile", type: "Tiempo completo",
        points: [
          "Desarrollo de app móvil multiplataforma con Flutter",
          "Arquitectura cloud-native en GCP: escalable, segura y optimizada en costos",
          "Migración y modernización de cargas de trabajo de AWS a GCP",
          "Aplicaciones web fullstack con Next.js siguiendo principios orientados a servicios",
          "Almacenamiento distribuido y caché con Azure Blob, SQL Server y Redis",
        ],
      },
      {
        role: "Analista QA", type: "Tiempo completo",
        points: [
          "Aseguramiento de calidad para garantizar confiabilidad y UX en todos los entornos",
          "Monitoreo y gestión de incidentes con Google Error Reporting",
        ],
      },
      {
        role: "Desarrollador Freelance", type: "Freelance",
        points: [
          "Diseño y gestión de herramientas de software para flujos de transmisión de video",
          "Configuración de servicio de correo con SMTP para comunicación segura",
          "Diseño y gestión de base de datos MsSQL con .NET Entity Framework",
        ],
      },
    ],
    education: {
      degree: "Ing. Sistemas y Computación",
      thesis: "Implementación de un prototipo IPS para dispositivos IoT OneM2M usando Machine Learning",
    },
  },
  projects: {
    section: "04 / Proyectos",
    heading: "Trabajo Destacado",
    personal_label: "Proyecto Personal",
    featured: [
      {
        type: "Plataforma Web",
        description: "Plataforma web B2B construida con React/Vite, .NET y Django. Contenedorizada con Docker y orquestada con Kubernetes y pipelines CI/CD automatizados.",
      },
      {
        type: "App Móvil",
        description: "App de streaming musical disponible en Play Store. App Flutter multiplataforma respaldada por arquitectura GCP con caché Redis y web en Next.js.",
      },
      {
        type: "Suite de Apps · 3 Apps",
        description: "Suite de tres apps de salud (Florenz Health, Monaco, VitalLog) con Flutter. Manejo de datos médicos con estándares de cumplimiento para entornos de salud.",
      },
    ],
    personal: [
      { description: "Sistema privado de alarma de emergencia para personal médico capacitado y primeros respondientes." },
      { description: "Planificador de dieta con recetas personalizadas para transiciones vegetarianas/veganas." },
      { description: "Servicio de monitoreo de sitios que verifica disponibilidad de múltiples dominios con notificaciones en tiempo real." },
    ],
  },
  contact: {
    section: "05 / Contacto",
    heading_1: "Construyamos",
    heading_2: "algo.",
    footer_role: "Ingeniero de Sistemas",
    footer_location: "Bogotá, Colombia",
    footer_built: "Construido con Next.js y Framer Motion",
    email: "Correo", linkedin: "LinkedIn", phone: "Teléfono",
  },
};

export default es;
