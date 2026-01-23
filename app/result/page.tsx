"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ResultSummary } from "@/components/result-summary";
import { calculatePersonality } from "@/lib/scoring";
import type { PersonalityType } from "@/lib/types";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [personality, setPersonality] = useState<PersonalityType | null>(null);

  useEffect(() => {
    const scoresParam = searchParams.get("scores");
    if (scoresParam) {
      try {
        const scores = JSON.parse(decodeURIComponent(scoresParam));
        const result = calculatePersonality(scores);
        setPersonality(result);
      } catch (e) {
        console.error("Error parsing scores:", e);
        // Handle error or redirect home
      }
    }
  }, [searchParams]);

  const handleRestart = () => {
    router.push("/quiz");
  };

  if (!personality) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500 text-xl">กำลังประมวลผล...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <ResultSummary onRestart={handleRestart} personality={personality} />
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
