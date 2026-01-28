import { createImageQ, createInfo, createScaleQ } from "../helpers";
import type { Question } from "../types";

const BASEURL = "https://pub-89a7d3afd9574669a02c5f4fce069c51.r2.dev";

export const financeQuestions: Question[] = [
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 2.png`),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 3.png`),
  createImageQ("q3", "finance", `${BASEURL}/finance/Artboard 4.png`, [
    { top: "49%" },
    { top: "64%" },
    { top: "82%" },
  ]),
  createImageQ("q4", "finance", `${BASEURL}/finance/Artboard 5.png`, [
    { top: "46%" },
    { top: "62%" },
    { top: "79%" },
  ]),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 6.png`),
  createImageQ("q6", "finance", `${BASEURL}/finance/Artboard 7.png`, [
    { top: "36%" },
    { top: "53%" },
    { top: "69%" },
  ]),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 8.png`),
  createScaleQ(
    "q_scale_1",
    "finance",
    "คำถาม...",
    "disagree",
    "agree",
    `${BASEURL}/finance/Artboard 9.png`,
    "70%",
  ),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 10.png`),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 11.png`),
  createScaleQ(
    "q_scale_1",
    "finance",
    "คำถาม...",
    "disagree",
    "agree",
    `${BASEURL}/finance/Artboard 12.png`,
    "58%",
  ),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 13.png`),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 14.png`),
  createImageQ("q14", "finance", `${BASEURL}/finance/Artboard 15.png`, [
    { top: "31%" },
    { top: "47%" },
    { top: "62%" },
  ]),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 16.png`),
  createImageQ("q16", "finance", `${BASEURL}/finance/Artboard 17.png`, [
    { top: "34%" },
    { top: "49%" },
    { top: "63%" },
  ]),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 18.png`),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 19.png`),
  createScaleQ(
    "q_scale_1",
    "finance",
    "คำถาม...",
    "disagree",
    "agree",
    `${BASEURL}/finance/Artboard 20.png`,
    "58%",
  ),
  createInfo("info1", "finance", `${BASEURL}/finance/Artboard 21.png`),
];
