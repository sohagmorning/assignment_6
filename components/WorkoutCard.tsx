import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/lib/types";

export function WorkoutCard({ workout }: { workout: Workout }) {
  return <Link href={`/workout/${workout.id}`} className="workout-card"><div className="card-image"><Image src={workout.image} alt={workout.name} width={600} height={450} unoptimized /></div><div className="card-body"><div className="tags">{workout.muscleGroups.map((group) => <span className="tag" key={group}>{group}</span>)}</div><h3 className="card-title">{workout.name}</h3><p className="equipment">{workout.equipment}</p><div className="stats"><span><Clock3 /> {workout.duration} min</span><span><Flame /> {workout.caloriesBurned} kcal</span><span><Star /> {workout.rating}</span></div></div></Link>;
}