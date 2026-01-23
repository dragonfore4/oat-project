import { personalities } from "./questions";
import type { PersonalityType } from "./types";

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: <explanation>
export function calculatePersonality(
  totalScores: Record<string, number>
): PersonalityType {
  // Logic to determine personality based on scores
  // This is a simplified logic mapping dominant traits to personalities

  // Find the trait with the highest score
  let maxScore = -1;
  let dominantTrait = "";

  for (const [trait, score] of Object.entries(totalScores)) {
    if (score > maxScore) {
      maxScore = score;
      dominantTrait = trait;
    }
  }

  // Map traits to personalities logic
  // Extrovert/Feeling -> Diplomat
  // Introvert/Thinking -> Analyst
  // Sensing/Perceiving -> Explorer
  // Judging/Intuition -> Sentinel
  // Fallback if mixed

  if (
    (dominantTrait === "feeling" ||
      (totalScores.extrovert || 0) > (totalScores.introvert || 0)) &&
    (totalScores.feeling || 0) > (totalScores.thinking || 0)
  ) {
    return personalities.find((p) => p.id === "diplomat") || personalities[0];
  }

  if (
    dominantTrait === "thinking" ||
    (totalScores.thinking || 0) > (totalScores.feeling || 0)
  ) {
    return personalities.find((p) => p.id === "analyst") || personalities[1];
  }

  if (
    dominantTrait === "perceiving" ||
    (totalScores.perceiving || 0) > (totalScores.judging || 0)
  ) {
    return personalities.find((p) => p.id === "explorer") || personalities[2];
  }

  if (
    dominantTrait === "judging" ||
    (totalScores.judging || 0) > (totalScores.perceiving || 0)
  ) {
    return personalities.find((p) => p.id === "sentinel") || personalities[3];
  }

  // Fallback to max score trait match loosely or default
  if (dominantTrait === "extrovert") {
    return personalities.find((p) => p.id === "diplomat") || personalities[0];
  }
  if (dominantTrait === "introvert") {
    return personalities.find((p) => p.id === "analyst") || personalities[1];
  }
  if (dominantTrait === "sensing") {
    return personalities.find((p) => p.id === "explorer") || personalities[2];
  }
  if (dominantTrait === "intuition") {
    return personalities.find((p) => p.id === "sentinel") || personalities[3];
  }

  return personalities[0];
}
