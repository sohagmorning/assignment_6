"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { WorkoutCard } from "@/components/WorkoutCard";
import { getWorkouts } from "@/lib/api";
import { Workout } from "@/lib/types";

export default function HomePage() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [sort, setSort] = useState("duration");
  const [loading, setLoading] = useState(true);
  useEffect(() => { getWorkouts().then(setWorkouts).finally(() => setLoading(false)); }, []);
  const sorted = [...workouts].sort((a, b) => sort === "rating" ? b.rating - a.rating : sort === "calories" ? b.caloriesBurned - a.caloriesBurned : a.duration - b.duration);
  return <AppShell><main><section className="hero"><div className="container hero-grid"><div><p className="eyebrow">Workout Library</p><h1>Train with intent.<br />Log every set.</h1><p className="hero-copy">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the week&apos;s work add up.</p><Link className="button primary" href="#library">Browse workouts <ArrowDownRight size={16} /></Link></div><div className="hero-image"><Image src="/banner.png" alt="Athlete training with a barbell" fill priority /></div></div></section><section className="section" id="library"><div className="container"><div className="section-head"><div><p className="section-kicker">01 / The collection</p><h2>The library</h2><p className="section-sub">Twelve lifts covering every major muscle group.</p></div><label className="sort">Sort by <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="duration">Duration</option><option value="calories">Calories</option><option value="rating">Rating</option></select><ChevronDown size={13} /></label></div>{loading ? <div className="loading">Loading workouts...</div> : <div className="workout-grid">{sorted.map((workout) => <WorkoutCard key={workout.id} workout={workout} />)}</div>}</div></section></main></AppShell>;
}