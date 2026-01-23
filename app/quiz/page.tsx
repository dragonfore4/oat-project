"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ProgressBar } from "@/components/progress-bar";
import { QuestionCard } from "@/components/question-card";
import { questions } from "@/lib";
import { shuffle } from "@/lib/helpers";
import type { Option, Question } from "@/lib/types"; // เพิ่ม Import Question type

// ฟังก์ชันสุ่มแบบสั้นๆ (ไว้นอก Component)

function QuizContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const topicId = searchParams.get("topicId");

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  // 1. ใช้ useState เก็บคำถามที่สุ่มแล้ว เพื่อล็อกลำดับไว้ถาวร
  const [topicQuestions] = useState<Question[]>(() => {
    // กรองและสุ่มตั้งแต่ตอนกำหนดค่าเริ่มต้น (Initial State)
    const filtered = questions.filter((q) => q.topicId === topicId);
    return filtered.map((q) => {
      if (q.type === "question") {
        return { ...q, options: shuffle(q.options) };
      }
      return q;
    });
  });

  useEffect(() => {
    if (!topicId || topicQuestions.length === 0) {
      router.push("/");
    }
  }, [topicId, topicQuestions.length, router]);

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

  if (!topicId || topicQuestions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  const currentQuestion = topicQuestions[currentQuestionIndex];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
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

export default function QuizPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuizContent />
    </Suspense>
  );
}
