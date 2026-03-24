import { createImageQ, createInfo, createScaleQ } from "../helpers";
import { CLOUDFLARE_R2_URL, type Question } from "../types";

const f = (file: string) => `${CLOUDFLARE_R2_URL}/work/${file}`;

export const workQuestions: Question[] = [
  createInfo("info1", "work", f("Artboard1.png")),
  createImageQ("q2", "work", f("Artboard2.png"), [
    { top: "42%" },
    { top: "58%" },
    { top: "75%" },
  ]),
  createInfo("info1", "work", f("Artboard3.png")),
  createImageQ("q4", "work", f("Artboard4.png"), [
    { top: "41%" },
    { top: "57%" },
    { top: "74%" },
  ]),
  createInfo("info1", "work", f("Artboard5.png")),
  createImageQ("q6", "work", f("Artboard6.png"), [
    { top: "37%" },
    { top: "54%" },
    { top: "70%" },
  ]),
  createInfo("info1", "work", f("Artboard7.png")),
  createImageQ("q8", "work", f("Artboard8.png"), [
    { top: "38%" },
    { top: "54%" },
    { top: "71%" },
  ]),
  createInfo("info1", "work", f("Artboard9.png")),
  createScaleQ(
    "q_scale_1",
    "work",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard10.png"),
    "56%"
  ),
  createInfo("info1", "work", f("Artboard11.png")),
  createScaleQ(
    "q_scale_2",
    "work",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard12.png"),
    "54%"
  ),
  createInfo("info1", "work", f("Artboard13.png")),
  createImageQ("q14", "work", f("Artboard14.png"), [
    { top: "34%" },
    { top: "50%" },
    { top: "67%" },
  ]),
  createInfo("info1", "work", f("Artboard15.png")),
  createScaleQ(
    "q_scale_3",
    "work",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard16.png"),
    "52%"
  ),
  createInfo("info1", "work", f("Artboard17.png")),
  createInfo("info1", "work", f("Artboard18.png")),
];
