"use client";

import { useRouter } from "next/navigation";
import { ResultSummary } from "@/components/result-summary";
import type { PersonalityResult } from "@/lib/types";

interface ResultClientProps {
  personality: PersonalityResult;
}

export function ResultClient({ personality }: ResultClientProps) {
  const router = useRouter();

  const handleRestart = () => {
    router.push("/"); // Go back to topic selection
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <ResultSummary onRestart={handleRestart} personality={personality} />
    </div>
  );
}
