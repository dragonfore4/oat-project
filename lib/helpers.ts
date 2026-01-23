import type { InfoPage, QuizQuestion, TopicId } from "./types";

export const createQ = (
  id: string,
  topicId: TopicId,
  text: string,
  opt1: string,
  opt2: string,
  opt3: string
): QuizQuestion => ({
  id,
  topicId,
  type: "question",
  text,
  options: [
    { id: `${id}_1`, text: opt1, score: 1 },
    { id: `${id}_2`, text: opt2, score: 2 },
    { id: `${id}_3`, text: opt3, score: 3 },
  ],
});

export const createInfo = (
  id: string,
  topicId: TopicId,
  text: string
): InfoPage => ({
  id,
  topicId,
  type: "info",
  text,
  buttonText: "ไปต่อ",
});

export const shuffle = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);