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
  { top: "70%" }, // ปุ่ม 3
];

const playClickSound = () => {
  const audio = new Audio("/click.mp3");
  audio.volume = 0.5;
  const playPromise = audio.play();
  if (playPromise) {
    playPromise.catch((error) => {
      console.warn("Opening page sound effect playback failed", error);
    });
  }
};

export function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [sliderValue, setSliderValue] = useState(2);

  if (question.type === "info") {
    return (
      <button
        className="absolute inset-0 z-20 h-full w-full cursor-pointer"
        onClick={() => {
          playClickSound();
          onAnswer();
        }}
        type="button"
      />
    );
  }

  if (question.type === "scale") {
    const topPos = question.sliderTop || "62%";

    return (
      <div className="absolute inset-0 z-20 flex h-full w-full flex-col items-center justify-center">
        <div className="absolute w-[80%] px-4" style={{ top: topPos }}>
          <input
            className="h-3 w-full cursor-pointer appearance-none rounded-lg bg-white/50 accent-pink-500 transition-all hover:bg-white/80"
            max="3"
            min="1"
            onChange={(e) => setSliderValue(Number(e.target.value))}
            step="1"
            type="range"
            value={sliderValue}
          />
        </div>

        <button
          className="absolute bottom-[10%] rounded-full bg-white px-8 py-3 font-bold text-pink-600 shadow-lg transition-transform hover:scale-105"
          onClick={() => {
            playClickSound();
            onAnswer({
              id: "scale",
              text: String(sliderValue),
              score: sliderValue,
            });
          }}
          type="button"
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
    <div className="absolute inset-0 z-20 flex h-full w-full flex-col">
      {/* ปุ่มที่ 1 */}
      <button
        // className="absolute left-0 z-50 h-[12%] w-full cursor-pointer bg-red-500 opacity-20 transition-opacity"
        className="absolute left-0 z-50 h-[12%] w-full bg-red-500 opacity-0 transition-opacity"
        onClick={() => {
          playClickSound();
          onAnswer(question.options?.[0]);
        }}
        style={{ top: pos1.top }}
        type="button"
      />

      {/* ปุ่มที่ 2 */}
      <button
        // className="absolute left-0 z-50 h-[12%] w-full cursor-pointer bg-green-500 opacity-20 transition-opacity"
        className="absolute left-0 z-50 h-[12%] w-full bg-green-500 opacity-0 transition-opacity"
        onClick={() => {
          playClickSound();
          onAnswer(question.options?.[1]);
        }}
        style={{ top: pos2.top }}
        type="button"
      />

      {/* ปุ่มที่ 3 */}
      <button
        // className="absolute left-0 z-50 h-[12%] w-full cursor-pointer bg-blue-500 opacity-20 transition-opacity"
        className="absolute left-0 z-50 h-[12%] w-full bg-blue-500 opacity-0 transition-opacity"
        onClick={() => {
          playClickSound();
          onAnswer(question.options?.[2]);
        }}
        style={{ top: pos3.top }}
        type="button"
      />
    </div>
  );
}
