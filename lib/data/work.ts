import { createImageQ, createInfo, createScaleQ } from "../helpers";
import type { Question } from "../types";

export const workQuestions: Question[] = [
  createInfo("info1", "work", "/work/Artboard 1.png"),
  createImageQ("q2", "work", "/work/Artboard 2.png", [
    { top: "42%" },
    { top: "58%" },
    { top: "75%" },
  ]),
  createInfo("info1", "work", "/work/Artboard 3.png"),
  createImageQ("q4", "work", "/work/Artboard 4.png", [
    { top: "41%" },
    { top: "57%" },
    { top: "74%" },
  ]),
  createInfo("info1", "work", "/work/Artboard 5.png"),
  createImageQ("q6", "work", "/work/Artboard 6.png", [
    { top: "37%" },
    { top: "54%" },
    { top: "70%" },
  ]),
  createInfo("info1", "work", "/work/Artboard 7.png"),
  createImageQ("q8", "work", "/work/Artboard 8.png", [
    { top: "38%" },
    { top: "54%" },
    { top: "71%" },
  ]),
  createInfo("info1", "work", "/work/Artboard 9.png"),
  createScaleQ(
    "q_scale_1",
    "work",
    "คำถาม...",
    "disagree",
    "agree",
    "/work/Artboard 10.png",
    "56%"
  ),
  createInfo("info1", "work", "/work/Artboard 11.png"),
  createScaleQ(
    "q_scale_2",
    "work",
    "คำถาม...",
    "disagree",
    "agree",
    "/work/Artboard 12.png",
    "54%"
  ),
  createInfo("info1", "work", "/work/Artboard 13.png"),
  createImageQ("q14", "work", "/work/Artboard 14.png", [
    { top: "34%" },
    { top: "50%" },
    { top: "67%" },
  ]),
  createInfo("info1", "work", "/work/Artboard 15.png"),
  createScaleQ(
    "q_scale_3",
    "work",
    "คำถาม...",
    "disagree",
    "agree",
    "/work/Artboard 16.png",
    "52%"
  ),
  createInfo("info1", "work", "/work/Artboard 17.png"),
];
