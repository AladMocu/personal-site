import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP, Syne } from "next/font/google";
import { LocaleProvider } from "./contexts/LocaleContext";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["600", "700", "800"] });
const notoJP = Noto_Sans_JP({ variable: "--font-noto-jp", subsets: ["latin"], weight: ["400", "700", "900"], preload: false });

export const metadata: Metadata = {
  title: "Albert Molano — Fullstack Developer",
  description: "Systems Engineer & Fullstack Developer specializing in React, TypeScript, .NET, Flutter, and Azure cloud architecture.",
  keywords: ["fullstack developer", "mobile engineer", "React", "Flutter", ".NET", "Azure"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} ${notoJP.variable} h-full antialiased`}
      suppressHydrationWarning
    >
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
