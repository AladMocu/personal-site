import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP, Syne } from "next/font/google";
import { LocaleProvider } from "./contexts/LocaleContext";
import { generatePersonSchema, generateWebsiteSchema } from "./schema";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["600", "700", "800"] });
const notoJP = Noto_Sans_JP({ variable: "--font-noto-jp", subsets: ["latin"], weight: ["400", "700", "900"], preload: false });

const baseUrl = "https://albertmolano.com";
const title = "Albert Molano — Fullstack Developer";
const description = "Systems Engineer & Fullstack Developer specializing in React, TypeScript, .NET, Flutter, and Azure cloud architecture.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "fullstack developer",
    "systems engineer",
    "mobile engineer",
    "React",
    "TypeScript",
    "Flutter",
    ".NET",
    "Azure",
    "Kubernetes",
    "Docker",
    "GraphQL",
  ],
  authors: [{ name: "Albert Molano", url: baseUrl }],
  creator: "Albert Molano",
  publisher: "Albert Molano",
  metadataBase: new URL(baseUrl),
  canonical: baseUrl,
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "profile",
    url: baseUrl,
    title,
    description,
    siteName: "Albert Molano",
    emails: ["contact@albertmolano.com"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@albertmolano",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE", // Replace with your actual verification code
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${notoJP.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="min-h-full">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
