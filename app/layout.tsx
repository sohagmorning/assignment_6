import type { Metadata } from "next";
import { FitLogProvider } from "@/components/FitLogProvider";
import "./globals.css";

export const metadata: Metadata = { title: "FitLog | Train with intent", description: "A focused workout library and daily training log." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><FitLogProvider>{children}</FitLogProvider></body></html>;
}