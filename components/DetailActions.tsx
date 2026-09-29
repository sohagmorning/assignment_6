"use client";
import { Bookmark, ClipboardPlus } from "lucide-react";
import { Workout } from "@/lib/types";
import { useFitLog } from "./FitLogProvider";
export function DetailActions({ workout }: { workout: Workout }) { const { addToPlan, saveWorkout } = useFitLog(); return <div className="detail-actions"><button className="button primary" onClick={() => addToPlan(workout)}><ClipboardPlus size={16} /> Add to today&apos;s plan</button><button className="button secondary" onClick={() => saveWorkout(workout)}><Bookmark size={16} /> Save for later</button></div>; }