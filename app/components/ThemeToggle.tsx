"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "dark" | "light") ?? "dark";
    setTheme(saved);
  }, []);

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const next = theme === "dark" ? "light" : "dark";
    const x = e.clientX;
    const y = e.clientY;
    const root = document.documentElement;

    // Set ripple origin BEFORE startViewTransition so the CSS @keyframes
    // picks up the correct coordinates from frame 0 — no JS animate() gap.
    root.style.setProperty("--ripple-x", `${x}px`);
    root.style.setProperty("--ripple-y", `${y}px`);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const vt = (document as any).startViewTransition;
    if (!vt) {
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setTheme(next);
      return;
    }

    root.classList.add("theme-rippling");

    const transition = vt.call(document, () => {
      root.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      setTheme(next);
    }) as { finished: Promise<void> };

    transition.finished.then(() => root.classList.remove("theme-rippling"));
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark theme"
      className="w-9 h-9 rounded-sm flex items-center justify-center transition-colors duration-200 hover:bg-[var(--bg2)]"
      style={{ border: "1px solid var(--bd2)", color: "var(--tx3)" }}
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
