"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { QuestionCard } from "@/components/question-card";
import { Button } from "@/components/ui/button";
import type { Option, Question } from "@/lib/types";

interface QuizClientProps {
  initialQuestions: Question[];
  topicId: string;
}

export function QuizClient({ initialQuestions, topicId }: QuizClientProps) {
  const router = useRouter();
  const [scores, setScores] = useState<number[]>([]);

  const topicQuestions = initialQuestions;
  const currentQuestionIndex = scores.length;
  const currentQuestion = topicQuestions[currentQuestionIndex];

  const handleAnswer = (option?: Option) => {
    const score = option?.score || 0;

    // Calculate potential new total score
    const currentTotalScore = scores.reduce((a, b) => a + b, 0) + score;

    if (currentQuestionIndex < topicQuestions.length - 1) {
      setScores((prev) => [...prev, score]);
    } else {
      router.push(`/result?topicId=${topicId}&score=${currentTotalScore}`);
    }
  };

  const handleBack = () => {
    setScores((prev) => prev.slice(0, -1));
  };

  useEffect(() => {
    const imageUrls = initialQuestions
      .map((q) => q.backgroundImage)
      .filter((url): url is string => !!url);

    for (const url of imageUrls) {
      const img = new window.Image();
      img.src = url;
    }
  }, [initialQuestions]);

  // Calculate total score for debugging/display if needed
  const totalScore = scores.reduce((a, b) => a + b, 0);
  console.log("Current total score:", totalScore);

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
        {scores.length > 0 && (
          <Button
            className="absolute top-4 left-4 z-50 rounded-full bg-black/20 text-white hover:bg-black/40"
            onClick={handleBack}
            size="icon"
            variant="ghost"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
        )}
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
