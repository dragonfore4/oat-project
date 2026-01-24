"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ProgressBar } from "@/components/progress-bar";
import { QuestionCard } from "@/components/question-card";
import type { Option, Question } from "@/lib/types";

interface QuizClientProps {
  initialQuestions: Question[];
  topicId: string;
}

export function QuizClient({ initialQuestions, topicId }: QuizClientProps) {
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // Use initialQuestions directly since they are already prepared on the server
  const topicQuestions = initialQuestions;

  const handleAnswer = (option?: Option) => {
    let currentTotalScore = totalScore;

    if (option) {
      setTotalScore((prev) => prev + option.score);
      currentTotalScore += option.score;
    }

    if (currentQuestionIndex < topicQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      router.push(`/result?topicId=${topicId}&score=${currentTotalScore}`);
    }
  };

  if (topicQuestions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        No questions found for this topic.
      </div>
    );
  }

  const currentQuestion = topicQuestions[currentQuestionIndex];

  return (
    <div
      className="fade-out flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4 transition-all duration-1000"
      style={{
        backgroundImage: currentQuestion.backgroundImage
          ? `url(${currentQuestion.backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-8 w-full max-w-2xl">
        <ProgressBar
          current={currentQuestionIndex}
          total={topicQuestions.length}
        />
      </div>

      <main className="flex w-full justify-center">
        <QuestionCard onAnswer={handleAnswer} question={currentQuestion} />
      </main>
    </div>
  );
}
