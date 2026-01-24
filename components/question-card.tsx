import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Option, Question } from "@/lib/types";

interface QuestionCardProps {
  question: Question;
  onAnswer: (option?: Option) => void;
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [sliderValue, setSliderValue] = useState(2);

  if (question.type === "info") {
    return (
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-orange-100 bg-white/90 p-8 text-center shadow-lg backdrop-blur-sm md:p-12">
        <h2 className="mb-10 font-bold text-2xl text-stone-800 leading-relaxed">
          {question.text}
        </h2>
        <Button
          className="min-w-32 rounded-full bg-stone-600 px-8 py-3 text-lg text-white hover:bg-stone-700"
          onClick={() => onAnswer()}
          size="lg"
        >
          {question.buttonText || "ต่อไป"}
        </Button>
      </div>
    );
  }

  if (question.type === "scale") {
    return (
      <div className="mx-auto w-full max-w-md rounded-3xl border border-orange-100 bg-[#FFFDF5] p-8 shadow-xl">
        <h2 className="mb-8 text-center font-medium text-stone-900 text-xl leading-relaxed">
          {question.text}
        </h2>

        <div className="mb-8 px-4">
          <input
            className="h-3 w-full cursor-pointer appearance-none rounded-full bg-orange-200 accent-orange-500"
            max="3"
            min="1"
            onChange={(e) => setSliderValue(Number(e.target.value))}
            step="1"
            type="range"
            value={sliderValue}
          />
          <div className="mt-4 flex justify-between font-medium text-sm text-stone-600">
            <span>{question.labels?.start || "disagree"}</span>
            <span>unsure</span>
            <span>{question.labels?.end || "agree"}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            className="min-w-32 rounded-full bg-orange-400 px-8 py-2 text-white hover:bg-orange-500"
            onClick={() => {
              onAnswer({
                id: `${question.id}_scale`,
                text: String(sliderValue),
                score: sliderValue,
              });
            }}
          >
            NEXT
          </Button>
        </div>
      </div>
    );
  }

  // Selection type
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8">
      {/* Question Text Bubble */}
      <div className="relative rounded-3xl bg-[#FFFDF5]/90 px-8 py-6 text-center shadow-md backdrop-blur-sm">
        <h2 className="font-bold text-stone-900 text-xl md:text-2xl">
          {question.text}
        </h2>
      </div>

      <div className="flex w-full flex-col gap-4 px-4">
        {question.options?.map((option) => (
          <Button
            className="h-auto w-full justify-center rounded-full border-2 border-orange-100 bg-[#FFFDF5] px-6 py-4 text-center text-lg text-stone-800 shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50"
            key={option.id}
            onClick={() => onAnswer(option)}
            variant="ghost"
          >
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
