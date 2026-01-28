"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

  const topicQuestions = initialQuestions;
  const currentQuestion = topicQuestions[currentQuestionIndex];

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

  useEffect(() => {
    console.log("Current total score:", totalScore);
  });

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <main className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-zinc-900">
      <div className="absolute inset-0 z-0">
        {currentQuestion.backgroundImage && (
          <Image
            alt="Background Effect"
            className="scale-110 animate-fade object-cover blur-2xl brightness-[0.4]"
            fill
            key={currentQuestion.backgroundImage}
            priority
            src={currentQuestion.backgroundImage}
            unoptimized={true}
          />
        )}
      </div>

      <div
        className="relative z-10 overflow-hidden bg-black shadow-2xl"
        style={{
          aspectRatio: "9/16",
          height: "min(100dvh, 100vw * 16 / 9)",
          width: "min(100vw, 100dvh * 9 / 16)",
        }}
      >
        <div className="absolute inset-0 z-0">
          {currentQuestion.backgroundImage && (
            <Image
              alt="Question Content"
              className="animate-fade object-cover transition-all"
              fill
              key={currentQuestion.backgroundImage}
              priority
              src={currentQuestion.backgroundImage}
              unoptimized={true}
            />
          )}
        </div>

        <QuestionCard
          key={currentQuestion.id}
          onAnswer={handleAnswer}
          question={currentQuestion}
        />
      </div>
    </main>
  );
}
