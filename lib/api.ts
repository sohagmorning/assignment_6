import { Workout } from "./types";

export const API_URL = "https://api.abcz.workers.dev/api/fitlog";
export const FALLBACK_API_URL = "https://api.api-store.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  try {
    const response = await fetch(API_URL, { next: { revalidate: 300 } });
    if (!response.ok) throw new Error("Primary API failed");
    return response.json();
  } catch {
    const response = await fetch(FALLBACK_API_URL, { next: { revalidate: 300 } });
    if (!response.ok) throw new Error("Workout API unavailable");
    return response.json();
  }
}

export async function getWorkout(id: string): Promise<Workout> {
  try {
    const response = await fetch(`${API_URL}/${id}`, { next: { revalidate: 300 } });
    if (!response.ok) throw new Error("Primary API failed");
    return response.json();
  } catch {
    const response = await fetch(`${FALLBACK_API_URL}/${id}`, { next: { revalidate: 300 } });
    if (!response.ok) throw new Error("Workout not found");
    return response.json();
  }
}