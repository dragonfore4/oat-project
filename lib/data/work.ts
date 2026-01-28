import { createImageQ, createInfo, createScaleQ } from "../helpers";
import type { Question } from "../types";

const CLOUDFLARE_R2_URL = "https://oat-project-img.sirasith.net";

const f = (file: string) => `${CLOUDFLARE_R2_URL}/work/${file}`;

export const workQuestions: Question[] = [
  createInfo("info1", "work", f("Artboard 1.png")),
  createImageQ("q2", "work", f("Artboard 2.png"), [
    { top: "42%" },
    { top: "58%" },
    { top: "75%" },
  ]),
  createInfo("info1", "work", f("Artboard 3.png")),
  createImageQ("q4", "work", f("Artboard 4.png"), [
    { top: "41%" },
    { top: "57%" },
    { top: "74%" },
  ]),
  createInfo("info1", "work", f("Artboard 5.png")),
  createImageQ("q6", "work", f("Artboard 6.png"), [
    { top: "37%" },
    { top: "54%" },
    { top: "70%" },
  ]),
  createInfo("info1", "work", f("Artboard 7.png")),
  createImageQ("q8", "work", f("Artboard 8.png"), [
    { top: "38%" },
    { top: "54%" },
    { top: "71%" },
  ]),
  createInfo("info1", "work", f("Artboard 9.png")),
  createScaleQ(
    "q_scale_1",
    "work",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard 10.png"),
    "56%",
  ),
  createInfo("info1", "work", f("Artboard 11.png")),
  createScaleQ(
    "q_scale_2",
    "work",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard 12.png"),
    "54%",
  ),
  createInfo("info1", "work", f("Artboard 13.png")),
  createImageQ("q14", "work", f("Artboard 14.png"), [
    { top: "34%" },
    { top: "50%" },
    { top: "67%" },
  ]),
  createInfo("info1", "work", f("Artboard 15.png")),
  createScaleQ(
    "q_scale_3",
    "work",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard 16.png"),
    "52%",
  ),
  createInfo("info1", "work", f("Artboard 17.png")),
];
