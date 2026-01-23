import { Button } from "@/components/ui/button";
import type { Option, Question } from "@/lib/types";

interface QuestionCardProps {
  question: Question;
  onAnswer: (option?: Option) => void;
}

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  if (question.type === "info") {
    return (
      <div className="mx-auto w-full max-w-2xl rounded-xl border border-gray-100 bg-white p-8 text-center shadow-lg md:p-12">
        <h2 className="mb-10 font-bold text-2xl text-gray-800 leading-relaxed">
          {question.text}
        </h2>
        <Button
          className="min-w-30 py-6 text-lg"
          onClick={() => onAnswer()}
          size="lg"
        >
          {question.buttonText || "ต่อไป"}
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-xl border border-gray-100 bg-white p-6 shadow-lg md:p-8">
      <h2 className="mb-6 font-bold text-2xl text-gray-800">{question.text}</h2>
      <div className="flex flex-col gap-4">
        {question.options?.map((option) => (
          <Button
            className="h-auto w-full justify-start border-gray-200 px-6 py-4 text-left text-lg transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            key={option.id}
            onClick={() => onAnswer(option)}
            variant="outline"
          >
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
