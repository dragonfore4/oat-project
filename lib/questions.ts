import { financeQuestions } from "./data/finance";
import { healthQuestions } from "./data/health";
import { loveQuestions } from "./data/love";
import { workQuestions } from "./data/work";
import type { Question } from "./types";

export const questions: Question[] = [
  ...financeQuestions,
  ...healthQuestions,
  ...loveQuestions,
  ...workQuestions,
];
