import { createImageQ, createInfo, createScaleQ } from "../helpers";
import { CLOUDFLARE_R2_URL, type Question } from "../types";

const f = (file: string) => `${CLOUDFLARE_R2_URL}/love/${file}`;

export const loveQuestions: Question[] = [
  createInfo("info1", "love", f("Artboard1.png")),
  createImageQ("q2", "love", f("Artboard2.png"), [
    { top: "55%" },
    { top: "68%" },
    { top: "83%" },
  ]),
  createInfo("info1", "love", f("Artboard3.png")),
  createImageQ("q4", "love", f("Artboard4.png"), [
    { top: "41%" },
    { top: "57%" },
    { top: "76%" },
  ]),
  createInfo("info1", "love", f("Artboard5.png")),
  createImageQ("q6", "love", f("Artboard6.png"), [
    { top: "43%" },
    { top: "58%" },
    { top: "74%" },
  ]),
  createInfo("info1", "love", f("Artboard7.png")),
  createScaleQ(
    "q_scale_1",
    "love",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard8.png"),
    "52%"
  ),
  createInfo("info1", "love", f("Artboard9.png")),
  createScaleQ(
    "q_scale_2",
    "love",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard10.png"),
    "54%"
  ),
  createInfo("info1", "love", f("Artboard11.png")),
  createImageQ("q14", "love", f("Artboard12.png"), [
    { top: "60%" },
    { top: "72%" },
    { top: "84%" },
  ]),
  createInfo("info1", "love", f("Artboard13.png")),
  createImageQ("q14", "love", f("Artboard14.png"), [
    { top: "39%" },
    { top: "54%" },
    { top: "70%" },
  ]),
  createInfo("info1", "love", f("Artboard15.png")),
  createScaleQ(
    "q_scale_3",
    "love",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard16.png"),
    "72%"
  ),
  createInfo("info1", "love", f("Artboard17.png")),
  createInfo("info1", "love", f("Artboard18.png")),
];
