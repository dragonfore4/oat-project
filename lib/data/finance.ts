import { createImageQ, createInfo, createScaleQ } from "../helpers";
import { CLOUDFLARE_R2_URL, type Question } from "../types";

export const financeQuestions: Question[] = [
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard1.png`),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard2.png`),
  createImageQ("q3", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard3.png`, [
    { top: "49%" },
    { top: "64%" },
    { top: "82%" },
  ]),
  createImageQ("q4", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard4.png`, [
    { top: "46%" },
    { top: "62%" },
    { top: "79%" },
  ]),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard5.png`),
  createImageQ("q6", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard6.png`, [
    { top: "36%" },
    { top: "53%" },
    { top: "69%" },
  ]),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard7.png`),
  createScaleQ(
    "q_scale_1",
    "finance",
    "คำถาม...",
    "disagree",
    "agree",
    `${CLOUDFLARE_R2_URL}/finance/Artboard8.png`,
    "70%"
  ),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard9.png`),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard10.png`),
  createScaleQ(
    "q_scale_1",
    "finance",
    "คำถาม...",
    "disagree",
    "agree",
    `${CLOUDFLARE_R2_URL}/finance/Artboard11.png`,
    "58%"
  ),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard12.png`),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard13.png`),
  createImageQ(
    "q14",
    "finance",
    `${CLOUDFLARE_R2_URL}/finance/Artboard14.png`,
    [{ top: "31%" }, { top: "47%" }, { top: "62%" }]
  ),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard15.png`),
  createImageQ(
    "q16",
    "finance",
    `${CLOUDFLARE_R2_URL}/finance/Artboard16.png`,
    [{ top: "34%" }, { top: "49%" }, { top: "63%" }]
  ),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard17.png`),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard18.png`),
  createScaleQ(
    "q_scale_1",
    "finance",
    "คำถาม...",
    "disagree",
    "agree",
    `${CLOUDFLARE_R2_URL}/finance/Artboard19.png`,
    "58%"
  ),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard20.png`),
  createInfo("info1", "finance", `${CLOUDFLARE_R2_URL}/finance/Artboard21.png`),
];
