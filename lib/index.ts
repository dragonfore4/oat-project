import { leisureQuestions } from "./data/leisure";
import { loveQuestions } from "./data/love";
import { socialQuestions } from "./data/social";
import { workQuestions } from "./data/work";
import type { Question, Topic } from "./types";

export const topics: Topic[] = [
  {
    id: "work",
    title: "ตัวตนในการทำงาน",
    description: "ค้นหาสไตล์การทำงานที่แท้จริงของคุณ",
    icon: "briefcase",
  },
  {
    id: "social",
    title: "การเข้าสังคม",
    description: "คุณเป็นคนแบบไหนเมื่ออยู่ในกลุ่มเพื่อน",
    icon: "users",
  },
  {
    id: "love",
    title: "ความรักความสัมพันธ์",
    description: "สไตล์ความรักของคุณเป็นแบบไหน",
    icon: "heart",
  },
  {
    id: "leisure",
    title: "ไลฟ์สไตล์",
    description: "การใช้เวลาว่างบอกความเป็นคุณ",
    icon: "coffee",
  },
];

export const questions: Question[] = [
  ...workQuestions,
  ...socialQuestions,
  ...loveQuestions,
  ...leisureQuestions,
];
