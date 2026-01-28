import { ResultSummary } from "@/components/result-summary";
import { calculateResult } from "@/lib/scoring";
import type { PersonalityResult, TopicId } from "@/lib/types";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const scoreParam = (await searchParams).score as string
  const topicParam = (await searchParams).topicId as string

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


  if (!personality) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500 text-xl">กำลังประมวลผล...</p>
      </div>
    );
  }

  return (
    <div className="flex max-h-screen min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <ResultSummary personality={personality} />
    </div>
  );
}
