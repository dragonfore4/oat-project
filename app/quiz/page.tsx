import { redirect } from "next/navigation";
import { questions } from "@/lib";
import { shuffle } from "@/lib/helpers";
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

  // Filter and shuffle questions on the server
  const filtered = questions.filter((q) => q.topicId === topicId);

  if (filtered.length === 0) {
    redirect("/");
  }

  const initialQuestions = filtered.map((q) => {
    if (q.type === "selection") {
      return { ...q, options: shuffle([...q.options]) };
    }
    return q;
  });

  return <QuizClient initialQuestions={initialQuestions} topicId={topicId} />;
}
