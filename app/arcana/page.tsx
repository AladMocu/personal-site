import type { Metadata } from "next";
import LunarArcanumTool from "./LunarArcanumTool";

export const metadata: Metadata = {
  title: "Lunar Arcanum Trade Card",
  description: "Create a Genshin-inspired Lunar Arcanum trade image.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LunarArcanumPage() {
  return <LunarArcanumTool />;
}
