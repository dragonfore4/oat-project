import { createImageQ, createInfo, createQ, createScaleQ } from "../helpers";
import type { Question } from "../types";

export const loveQuestions: Question[] = [
  createInfo(
    "info1",
    "love",
    "/love/Artboard 7.png"
  ),
  createImageQ("q2", "love", "/love/Artboard 8.png", [
      { top: "55%"},
      { top: "68%" },
      { top: "83%" } 
  ]),
  createInfo(
    "info1",
    "love",
    "/love/Artboard 9.png"
  ),
  createImageQ("q4", "love", "/love/Artboard 10.png", [
      { top: "41%"},
      { top: "57%" },
      { top: "76%" } 
  ]),
  createInfo(
    "info1",
    "love",
    "/love/Artboard 11.png"
  ),
  createImageQ("q6", "love", "/love/Artboard 12.png", [
      { top: "43%"},
      { top: "58%" },
      { top: "74%" } 
  ]),
  createInfo(
    "info1",
    "love",
    "/love/Artboard 13.png"
  ),
  createScaleQ(
    "q_scale_1",
    "love",
    "คำถาม...",
    "disagree",
    "agree",
    "/love/Artboard 14.png",
    "52%"
  ),
  createInfo(
    "info1",
    "love",
    "/love/Artboard 15.png"
  ),
  createScaleQ(
    "q_scale_2",
    "love",
    "คำถาม...",
    "disagree",
    "agree",
    "/love/Artboard 16.png",
    "54%"
  ),
  createInfo(
    "info1",
    "love",
    "/love/Artboard 17.png"
  ),
  createImageQ("q14", "love", "/love/Artboard 18.png", [
      { top: "60%"},
      { top: "72%" },
      { top: "84%" } 
  ]),
  createInfo(
    "info1",
    "love",
    "/love/Artboard 19.png"
  ),
  createImageQ("q14", "love", "/love/Artboard 20.png", [
      { top: "39%"},
      { top: "54%" },
      { top: "70%" } 
  ]),
  createInfo(
    "info1",
    "love",
    "/love/Artboard 21.png"
  ),
  createScaleQ(
    "q_scale_3",
    "love",
    "คำถาม...",
    "disagree",
    "agree",
    "/love/Artboard 22.png",
    "72%"
  ),
  createInfo(
    "info1",
    "love",
    "/love/Artboard 23.png"
  ),
];
