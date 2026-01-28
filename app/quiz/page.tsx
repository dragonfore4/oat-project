import { redirect } from "next/navigation";
import { questions } from "@/lib";
import { QuizClient } from "./components/quiz-client";

export default async function QuizPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const topicId = resolvedParams.topicId;

  if (!topicId || typeof topicId !== "string") {
    redirect("/");
  }

  const filtered = questions.filter((q) => q.topicId === topicId);

  if (filtered.length === 0) {
    redirect("/");
  }
  const initialQuestions = filtered;

  return <QuizClient initialQuestions={initialQuestions} topicId={topicId} />;
}
