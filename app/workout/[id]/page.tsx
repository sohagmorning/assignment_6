import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getWorkout } from "@/lib/api";
import { AppShell } from "@/components/AppShell";
import { DetailActions } from "@/components/DetailActions";

export default async function WorkoutDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let workout;
  try { workout = await getWorkout(id); } catch { return <AppShell><main className="plan-page"><div className="container empty"><h3>Workout not found</h3><Link className="button primary" href="/">Back to library</Link></div></main></AppShell>; }
  const specs = [["Equipment", workout.equipment], ["Difficulty", workout.difficulty], ["Sets", String(workout.sets)], ["Reps", workout.reps], ["Duration", `${workout.duration} min`], ["Calories", `${workout.caloriesBurned} kcal`], ["Rating", String(workout.rating)]];
  return <AppShell><main className="detail"><div className="container"><Link href="/" className="back"><ArrowLeft size={14} /> Back to library</Link><div className="detail-grid"><div className="detail-image"><Image src={workout.image} alt={workout.name} width={800} height={1000} unoptimized /></div><div><p className="eyebrow">Workout / {String(workout.id).padStart(2, "0")}</p><h1 className="detail-title">{workout.name}</h1><p className="detail-description">{workout.description}</p><div className="tags" style={{ marginTop: 22 }}>{workout.muscleGroups.map((group) => <span className="tag" key={group}>{group}</span>)}</div><div className="specs">{specs.map(([label, value]) => <div className="spec-row" key={label}><span>{label}</span><span>{value}</span></div>)}</div><section className="instructions"><h3>Instructions</h3><ol>{workout.instructions.map((step) => <li key={step}>{step}</li>)}</ol></section><DetailActions workout={workout} /></div></div></div></main></AppShell>;
}