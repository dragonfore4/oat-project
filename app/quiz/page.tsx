"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ProgressBar } from "@/components/progress-bar";
import { QuestionCard } from "@/components/question-card";
import { questions } from "@/lib/questions";
import type { Option } from "@/lib/types";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleAnswer = (option?: Option) => {
    let currentScores = scores;

    // Update scores only if option provided
    if (option) {
      const newScores = { ...scores };
      Object.entries(option.scores).forEach(([trait, value]) => {
        newScores[trait] = (newScores[trait] || 0) + value;
      });
      setScores(newScores);
      currentScores = newScores;
    }

    // Move to next question or finish
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Save scores to localStorage to retrieve in result page
      // In a real app, you might use context or a state management library, or pass via query params (if small)
      // Here we'll use query params for simplicity but encoded
      const scoresParam = encodeURIComponent(JSON.stringify(currentScores));
      router.push(`/result?scores=${scoresParam}`);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="mb-8 w-full max-w-2xl">
        <ProgressBar current={currentQuestionIndex} total={questions.length} />
      </div>

      <main className="flex w-full justify-center">
        <QuestionCard onAnswer={handleAnswer} question={currentQuestion} />
      </main>
    </div>
  );
}
