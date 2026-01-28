import { createImageQ, createInfo, createQ, createScaleQ } from "../helpers";
import type { Question } from "../types";

export const healthQuestions: Question[] = [
  createInfo(
    "info1",
    "health",
    "/health/Artboard 2.png"
  ),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 3.png"
  ),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 4.png"
  ),
  createImageQ("q4", "health", "/health/Artboard 5.png", [
      { top: "35%"},
      { top: "51%" },
      { top: "67%" } 
  ]),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 6.png"
  ),
  createImageQ("q6", "health", "/health/Artboard 7.png", [
      { top: "34%"},
      { top: "50%" },
      { top: "65%" } 
  ]),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 8.png"
  ),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 9.png"
  ),
   createScaleQ(
    "q_scale_1",
    "health",
    "คำถาม...",
    "disagree",
    "agree",
    "/health/Artboard 10.png",
    "54%"
  ),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 11.png"
  ),
  createImageQ("q11", "health", "/health/Artboard 12.png", [
      { top: "31%"},
      { top: "48%" },
      { top: "65%" } 
  ]),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 13.png"
  ),
  createImageQ("q13", "health", "/health/Artboard 14.png", [
      { top: "30%"},
      { top: "45%" },
      { top: "60%" } 
  ]),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 15.png"
  ),
  createScaleQ(
    "q_scale_2",
    "health",
    "คำถาม...",
    "disagree",
    "agree",
    "/health/Artboard 16.png",
    "52%"
  ),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 17.png"
  ),
  createImageQ("q17", "health", "/health/Artboard 18.png", [
      { top: "37%"},
      { top: "53%" },
      { top: "69%" } 
  ]),
  createInfo(
    "info1",
    "health",
    "/health/Artboard 19.png"
  ),
    createScaleQ(
    "q_scale_3",
    "health",
    "คำถาม...",
    "disagree",
    "agree",
    "/health/Artboard 20.png",
    "55%"
  ),
    createInfo(
    "info1",
    "health",
    "/health/Artboard 21.png"
  ),
];
