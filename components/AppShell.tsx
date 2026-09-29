"use client";

import Image from "next/image";
import Link from "next/link";
import { ClipboardList, Bookmark } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFitLog } from "./FitLogProvider";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();
  return <div className="shell"><header className="nav"><div className="container nav-inner"><Link href="/" className="brand"><Image src="/logo.png" alt="" width={28} height={28} /> FITLOG</Link><nav className="nav-links"><Link className={`nav-link ${pathname === "/" ? "active" : ""}`} href="/">Workout</Link><Link className={`nav-link ${pathname === "/my-plan" ? "active" : ""}`} href="/my-plan">My Plan</Link></nav><div className="badges"><Link href="/my-plan" className="badge plan"><ClipboardList size={13} /> Plan <strong>{plan.length}</strong></Link><Link href="/my-plan" className="badge"><Bookmark size={13} /> Saved <strong>{saved.length}</strong></Link></div></div></header>{children}<footer className="footer"><div className="container"><div className="brand"><Image src="/logo.png" alt="" width={22} height={22} /> FITLOG</div><p>© 2026 FitLog — Workout Library. Train hard, log honest.</p></div></footer></div>;
}