"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Workout } from "@/lib/types";

type FitLogContextValue = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => boolean;
  saveWorkout: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;
  removeSaved: (id: number) => void;
  toast: string | null;
  showToast: (message: string) => void;
};

const FitLogContext = createContext<FitLogContextValue | null>(null);

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      setPlan(JSON.parse(localStorage.getItem("fitlog-plan") || "[]"));
      setSaved(JSON.parse(localStorage.getItem("fitlog-saved") || "[]"));
    } catch {
      setPlan([]);
      setSaved([]);
    }
  }, []);

  useEffect(() => localStorage.setItem("fitlog-plan", JSON.stringify(plan)), [plan]);
  useEffect(() => localStorage.setItem("fitlog-saved", JSON.stringify(saved)), [saved]);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2600);
  };

  const value = useMemo<FitLogContextValue>(() => ({
    plan,
    saved,
    toast,
    showToast,
    addToPlan: (workout) => {
      if (plan.some((item) => item.id === workout.id)) { showToast("Already in today's plan"); return false; }
      if (plan.length >= 5) { showToast("Today's plan is full"); return false; }
      setPlan((items) => [...items, workout]); showToast("Added to today's plan"); return true;
    },
    saveWorkout: (workout) => {
      if (saved.some((item) => item.id === workout.id)) { showToast("Already saved for later"); return false; }
      setSaved((items) => [...items, workout]); showToast("Saved for later"); return true;
    },
    removeFromPlan: (id) => { setPlan((items) => items.filter((item) => item.id !== id)); showToast("Removed from today's plan"); },
    removeSaved: (id) => { setSaved((items) => items.filter((item) => item.id !== id)); showToast("Removed from saved"); },
  }), [plan, saved, toast]);

  return <FitLogContext.Provider value={value}>{children}{toast && <div className="toast">{toast}</div>}</FitLogContext.Provider>;
}

export function useFitLog() {
  const context = useContext(FitLogContext);
  if (!context) throw new Error("useFitLog must be used inside FitLogProvider");
  return context;
}