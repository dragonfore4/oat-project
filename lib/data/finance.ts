import { createImageQ, createInfo, createQ, createScaleQ } from "../helpers";
import type { Question } from "../types";

export const financeQuestions: Question[] = [
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 2.png"
  ),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 3.png"
  ),
  createImageQ("q3", "finance", "/finance/Artboard 4.png", [
    { top: "49%"},
    { top: "64%" },
    { top: "82%" } 
  ]),
  createImageQ("q4", "finance", "/finance/Artboard 5.png", [
    { top: "46%" },
    { top: "62%" },
    { top: "79%" } 
  ]),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 6.png"
  ),
  createImageQ("q6", "finance", "/finance/Artboard 7.png", [
    { top: "36%" },
    { top: "53%" },
    { top: "69%" } 
  ]),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 8.png"
  ),
  createScaleQ(
    "q_scale_1",
    "finance",
    "คำถาม...",
    "disagree",
    "agree",
    "/finance/Artboard 9.png",
    "70%"
  ),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 10.png"
  ),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 11.png"
  ),
  createScaleQ(
    "q_scale_1",
    "finance",
    "คำถาม...",
    "disagree",
    "agree",
    "/finance/Artboard 12.png",
    "58%"
  ),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 13.png"
  ),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 14.png"
  ),
  createImageQ("q14", "finance", "/finance/Artboard 15.png", [
    { top: "31%" },
    { top: "47%" },
    { top: "62%" } 
  ]),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 16.png"
  ),
  createImageQ("q16", "finance", "/finance/Artboard 17.png", [
    { top: "34%" },
    { top: "49%" },
    { top: "63%" }
  ]),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 18.png"
  ),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 19.png"
  ),
  createScaleQ(
    "q_scale_1",
    "finance",
    "คำถาม...",
    "disagree",
    "agree",
    "/finance/Artboard 20.png",
    "58%"
  ),
  createInfo(
    "info1",
    "finance",
    "/finance/Artboard 21.png"
  ),
];
