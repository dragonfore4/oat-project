import type { PersonalityType, Question } from "./types";

export const questions: Question[] = [
  {
    id: "q1",
    text: "เวลาเจอปัญหา คุณมักจะ...",
    options: [
      {
        id: "opt1",
        text: "ขอคำปรึกษาจากคนรอบข้างทันที",
        scores: { extrovert: 2, feeling: 1 },
      },
      {
        id: "opt2",
        text: "เก็บไปคิดหาทางแก้คนเดียวเงียบๆ",
        scores: { introvert: 2, thinking: 1 },
      },
      {
        id: "opt3",
        text: "ลงมือทดลองแก้ปัญหาดูเลย",
        scores: { sensing: 2, perceiving: 1 },
      },
    ],
  },
  {
    id: "q2",
    text: "ในงานปาร์ตี้หรือที่คนเยอะๆ คุณมักจะ...",
    options: [
      {
        id: "opt1",
        text: "ทักทายคนใหม่ๆ พูดคุยสนุกสนาน",
        scores: { extrovert: 3 },
      },
      {
        id: "opt2",
        text: "คุยกับเพื่อนสนิทกลุ่มเดิม",
        scores: { introvert: 1 },
      },
      {
        id: "opt3",
        text: "หาที่สงบๆ นั่งเล่นโทรศัพท์",
        scores: { introvert: 3 },
      },
    ],
  },
  {
    id: "info1",
    type: "info",
    text: "พักหายใจสักครู่... คำถามต่อไปจะเริ่มเข้มข้นขึ้นแล้วนะ!",
    buttonText: "ไปต่อเลย",
  },
  {
    id: "q3",
    text: "เมื่อต้องตัดสินใจเรื่องสำคัญ...",
    options: [
      {
        id: "opt1",
        text: "ใช้เหตุผลและข้อมูลเป็นหลัก",
        scores: { thinking: 3 },
      },
      {
        id: "opt2",
        text: "ใช้ความรู้สึกและผลกระทบต่อคนอื่นเป็นหลัก",
        scores: { feeling: 3 },
      },
    ],
  },
  {
    id: "q4",
    text: "คุณชอบวางแผนหรือไม่?",
    options: [
      {
        id: "opt1",
        text: "ชอบวางแผนล่วงหน้า มีตารางชัดเจน",
        scores: { judging: 3 },
      },
      {
        id: "opt2",
        text: "ชอบความยืดหยุ่น ปรับเปลี่ยนตามสถานการณ์",
        scores: { perceiving: 3 },
      },
    ],
  },
  {
    id: "q5",
    text: "คุณสนใจเรื่องอะไรมากกว่ากัน?",
    options: [
      {
        id: "opt1",
        text: "ทฤษฎี ความเป็นไปได้ อนาคต",
        scores: { intuition: 3 },
      },
      {
        id: "opt2",
        text: "ความเป็นจริง รายละเอียด ปัจจุบัน",
        scores: { sensing: 3 },
      },
    ],
  },
];

export const personalities: PersonalityType[] = [
  {
    id: "diplomat",
    name: "นักประนีประนอม (Diplomat)",
    description:
      "คุณเป็นคนที่ให้ความสำคัญกับความรู้สึกของผู้อื่น เข้าใจผู้อื่นได้ดี และชอบช่วยเหลือสังคม",
    traits: ["ขี้เกรงใจ", "รับฟังเก่ง", "อ่อนโยน"],
  },
  {
    id: "analyst",
    name: "นักวิเคราะห์ (Analyst)",
    description: "คุณเป็นคนชอบใช้เหตุผล ชอบวางแผน และมองหาทางแก้ปัญหาที่มีประสิทธิภาพที่สุด",
    traits: ["มีเหตุผล", "ช่างสังเกต", "วางแผนเก่ง"],
  },
  {
    id: "explorer",
    name: "นักสำรวจ (Explorer)",
    description: "คุณชอบความท้าทาย ชอบลองอะไรใหม่ๆ และปรับตัวเก่งในทุกสถานการณ์",
    traits: ["กล้าหาญ", "ยืดหยุ่น", "แก้ปัญหาเฉพาะหน้าเก่ง"],
  },
  {
    id: "sentinel",
    name: "ผู้พิทักษ์ (Sentinel)",
    description: "คุณเป็นคนที่มีระเบียบวินัย รักษาคำพูด และเป็นที่พึ่งพาได้ของคนรอบข้าง",
    traits: ["รับผิดชอบ", "ซื่อสัตย์", "ขยัน"],
  },
];
