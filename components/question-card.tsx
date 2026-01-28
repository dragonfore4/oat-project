"use client";

import { useState } from "react";
import type { Option, Question } from "@/lib/types";

interface QuestionCardProps {
  question: Question;
  onAnswer: (option?: Option) => void;
}

const DEFAULT_POSITIONS = [
  { top: "40%" }, // ปุ่ม 1
  { top: "55%" }, // ปุ่ม 2
  { top: "70%" }  // ปุ่ม 3
];

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [sliderValue, setSliderValue] = useState(2);

  if (question.type === "info") {
    return (
        <button 
            onClick={() => onAnswer()} 
            className="absolute inset-0 h-full w-full cursor-pointer z-20"
        />
    );
  }

  if (question.type === "scale") {
    const topPos = question.sliderTop || "62%";

   return (
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center w-full h-full">
        <div className="absolute w-[80%] px-4" style={{ top: topPos }}>
          <input
            type="range"
            min="1" max="3" step="1"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-3 bg-white/50 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:bg-white/80 transition-all"
          />
        </div>
        
        <button
            onClick={() => onAnswer({ id: "scale", text: String(sliderValue), score: sliderValue })}
            className="absolute bottom-[10%] bg-white text-pink-600 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
        >
            ยืนยัน (NEXT)
        </button>
      </div>
    );
  }

  const pos1 = question.customConfig?.[0] || DEFAULT_POSITIONS[0];
  const pos2 = question.customConfig?.[1] || DEFAULT_POSITIONS[1];
  const pos3 = question.customConfig?.[2] || DEFAULT_POSITIONS[2];

 return (
    <div className="absolute inset-0 z-20 flex flex-col w-full h-full">
      
      {/* ปุ่มที่ 1 */}
      <button
        onClick={() => onAnswer(question.options?.[0])}
        style={{ top: pos1.top, }} 
        className="absolute left-0 w-full h-[12%] bg-red-500 opacity-50 transition-opacity"
      />

      {/* ปุ่มที่ 2 */}
      <button
        onClick={() => onAnswer(question.options?.[1])}
        style={{ top: pos2.top }}
        className="absolute left-0 w-full h-[12%] bg-green-500 opacity-50 transition-opacity"
      />

      {/* ปุ่มที่ 3 */}
      <button
        onClick={() => onAnswer(question.options?.[2])}
        style={{ top: pos3.top }}
        className="absolute left-0 w-full h-[12%] bg-blue-500 opacity-50 transition-opacity"
      />
    </div>
  );
}