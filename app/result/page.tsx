"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ResultSummary } from "@/components/result-summary";
import { calculateResult } from "@/lib/scoring";
import type { PersonalityResult, TopicId } from "@/lib/types";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const scoreParam = searchParams.get("score");
  const topicParam = searchParams.get("topicId");

  let personality: PersonalityResult | null = null;

  const validTopics: TopicId[] = ["finance", "health", "love", "work"];

  if (
    scoreParam &&
    topicParam &&
    (validTopics as string[]).includes(topicParam)
  ) {
    try {
      const score = Number.parseInt(scoreParam, 10);
      console.log(score);

      // 2. ใช้ "as TopicId" เพื่อยืนยันกับ TypeScript
      personality = calculateResult(topicParam as TopicId, score);
      console.log("personality:", personality);
    } catch (e) {
      console.error("Error calculating result:", e);
    }
  }

  const handleRestart = () => {
    router.push("/"); // Go back to topic selection
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
