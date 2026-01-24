import type {
  InfoPage,
  ScaleQuestion,
  SelectionQuestion,
  TopicId,
} from "./types";

export const createQ = (
  id: string,
  topicId: TopicId,
  text: string,
  opt1: string,
  opt2: string,
  opt3: string,
  backgroundImage?: string
): SelectionQuestion => ({
  id,
  topicId,
  type: "selection",
  text,
  options: [
    { id: `${id}_1`, text: opt1, score: 1 },
    { id: `${id}_2`, text: opt2, score: 2 },
    { id: `${id}_3`, text: opt3, score: 3 },
  ],
  backgroundImage,
});

export const createScaleQ = (
  id: string,
  topicId: TopicId,
  text: string,
  startLabel = "disagree",
  endLabel = "agree",
  backgroundImage?: string
): ScaleQuestion => ({
  id,
  topicId,
  type: "scale",
  text,
  labels: { start: startLabel, end: endLabel },
  backgroundImage,
});

export const createInfo = (
  id: string,
  topicId: TopicId,
  text: string,
  backgroundImage?: string
): InfoPage => ({
  id,
  topicId,
  type: "info",
  text,
  buttonText: "ไปต่อ",
  backgroundImage,
});

export const shuffle = <T>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);
