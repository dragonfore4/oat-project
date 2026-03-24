import { createImageQ, createInfo, createScaleQ } from "../helpers";
import { CLOUDFLARE_R2_URL, type Question } from "../types";

const f = (file: string) => `${CLOUDFLARE_R2_URL}/health/${file}`;

export const healthQuestions: Question[] = [
  createInfo("info1", "health", f("Artboard1.png")),
  createInfo("info1", "health", f("Artboard2.png")),
  createInfo("info1", "health", f("Artboard3.png")),
  createImageQ("q4", "health", f("Artboard4.png"), [
    { top: "35%" },
    { top: "51%" },
    { top: "67%" },
  ]),
  createInfo("info1", "health", f("Artboard5.png")),
  createImageQ("q6", "health", f("Artboard6.png"), [
    { top: "34%" },
    { top: "50%" },
    { top: "65%" },
  ]),
  createInfo("info1", "health", f("Artboard7.png")),
  createInfo("info1", "health", f("Artboard8.png")),
  createScaleQ(
    "q_scale_1",
    "health",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard9.png"),
    "54%"
  ),
  createInfo("info1", "health", f("Artboard10.png")),
  createImageQ("q11", "health", f("Artboard11.png"), [
    { top: "31%" },
    { top: "48%" },
    { top: "65%" },
  ]),
  createInfo("info1", "health", f("Artboard12.png")),
  createImageQ("q13", "health", f("Artboard13.png"), [
    { top: "30%" },
    { top: "45%" },
    { top: "60%" },
  ]),
  createInfo("info1", "health", f("Artboard14.png")),
  createScaleQ(
    "q_scale_2",
    "health",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard15.png"),
    "52%"
  ),
  createInfo("info1", "health", f("Artboard16.png")),
  createImageQ("q17", "health", f("Artboard17.png"), [
    { top: "37%" },
    { top: "53%" },
    { top: "69%" },
  ]),
  createInfo("info1", "health", f("Artboard18.png")),
  createScaleQ(
    "q_scale_3",
    "health",
    "คำถาม...",
    "disagree",
    "agree",
    f("Artboard19.png"),
    "55%"
  ),
  createInfo("info1", "health", f("Artboard20.png")),
  createInfo("info1", "health", f("Artboard21.png")),
];
