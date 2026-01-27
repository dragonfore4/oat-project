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
  backgroundImage?: string,
  sliderTop?: string
): ScaleQuestion => ({
  id,
  topicId,
  type: "scale",
  labels: { start: startLabel, end: endLabel },
  backgroundImage,
  sliderTop
});

export const createInfo = (
  id: string,
  topicId: TopicId,
  backgroundImage?: string
): InfoPage => ({
  id,
  topicId,
  type: "info",
  buttonText: "ไปต่อ",
  backgroundImage,
});

export const createImageQ = (
  id: string,
  topicId: TopicId,
  imagePath: string,
  customConfig?: { top: string; }[]
): SelectionQuestion => ({
  id,
  topicId,
  type: "selection",
  backgroundImage: imagePath,
  customConfig,
  options: [
    { id: "opt1", text: "Option 1", score: 3 },
    { id: "opt2", text: "Option 2", score: 2 },
    { id: "opt3", text: "Option 3", score: 1 },
  ],
});

export const shuffle = <T>(array: T[]): T[] =>
  [...array].sort(() => Math.random() - 0.5);
