import { createImageQ, createInfo, createScaleQ } from "../helpers";
import type { Question } from "../types";

const CLOUDFLARE_R2_URL = "https://oat-project-img.sirasith.net";

const f = (file: string) => `${CLOUDFLARE_R2_URL}/love/${file}`;

export const loveQuestions: Question[] = [
  createInfo("info1", "love", f("Artboard 7.png")),
  createImageQ("q2", "love", f("Artboard 8.png"), [
    { top: "55%" },
    { top: "68%" },
    { top: "83%" },
  ]),
  createInfo("info1", "love", f("Artboard 9.png")),
  createImageQ("q4", "love", f("Artboard 10.png"), [
    { top: "41%" },
    { top: "57%" },
    { top: "76%" },
  ]),
  createInfo("info1", "love", f("Artboard 11.png")),
  createImageQ("q6", "love", f("Artboard 12.png"), [
    { top: "43%" },
    { top: "58%" },
    { top: "74%" },
  ]),
  createInfo("info1", "love", f("Artboard 13.png")),
  createScaleQ(
    "q_scale_1",
    "love",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard 14.png"),
    "52%",
  ),
  createInfo("info1", "love", f("Artboard 15.png")),
  createScaleQ(
    "q_scale_2",
    "love",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard 16.png"),
    "54%",
  ),
  createInfo("info1", "love", f("Artboard 17.png")),
  createImageQ("q14", "love", f("Artboard 18.png"), [
    { top: "60%" },
    { top: "72%" },
    { top: "84%" },
  ]),
  createInfo("info1", "love", f("Artboard 19.png")),
  createImageQ("q14", "love", f("Artboard 20.png"), [
    { top: "39%" },
    { top: "54%" },
    { top: "70%" },
  ]),
  createInfo("info1", "love", f("Artboard 21.png")),
  createScaleQ(
    "q_scale_3",
    "love",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard 22.png"),
    "72%",
  ),
  createInfo("info1", "love", f("Artboard 23.png")),
];
