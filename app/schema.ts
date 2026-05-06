export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Albert Molano",
    jobTitle: "Systems Engineer & Fullstack Developer",
    url: "https://albertmolano.com",
    description:
      "Fullstack developer specializing in React, TypeScript, .NET, Flutter, and Azure cloud architecture. Building scalable systems and mobile applications.",
    sameAs: [
      "https://linkedin.com/in/albertmolano",
      "https://github.com/albertmolano",
      "https://twitter.com/albertmolano",
    ],
    skills: [
      "React",
      "TypeScript",
      ".NET",
      "Flutter",
      "Dart",
      "Azure",
      "Docker",
      "Kubernetes",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "Node.js",
      "Django",
      "GCP",
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Albert Molano — Fullstack Developer",
    url: "https://albertmolano.com",
    description:
      "Systems Engineer & Fullstack Developer specializing in React, TypeScript, .NET, Flutter, and Azure cloud architecture.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://albertmolano.com/?q={search_term_string}",
      },
      query_input: "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
