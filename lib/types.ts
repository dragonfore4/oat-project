// 1. กำหนด Literal Types เพื่อป้องกันการพิมพ์ผิด (Typo)
export type TopicId = "work" | "social" | "love" | "leisure";
export type GroupId = "A" | "B" | "C";

export interface Topic {
  id: TopicId;
  title: string;
  description: string;
  icon?: string;
}

export interface Option {
  id: string;
  text: string;
  score: number;
}

export interface QuizQuestion {
  id: string;
  topicId: TopicId;
  type: "question";
  text: string;
  options: Option[];
}

export interface InfoPage {
  id: string;
  topicId: TopicId;
  type: "info";
  text: string;
  buttonText?: string;
}

export type Question = QuizQuestion | InfoPage;

// 2. โครงสร้างข้อมูลสำหรับ resultData (Raw Content)
export interface ResultItem {
  name: string;
  desc: string;
}

/** * Mapping สำหรับ resultData:
 * Topic -> Group -> รายการคำบรรยาย 4 แบบ
 */
export type ResultContentMap = Record<TopicId, Record<GroupId, ResultItem[]>>;

// 3. ผลลัพธ์สุดท้ายที่จะใช้แสดงผลในหน้า Result Page
export interface PersonalityResult {
  topicId: TopicId;
  groupId: GroupId;
  variantId: number; // 1-4
  name: string;
  description: string;
  traits: string[];
}
