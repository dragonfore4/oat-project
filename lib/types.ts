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

export interface BaseQuestion {
  id: string;
  topicId: TopicId;
  text: string;
  backgroundImage?: string;
}

export interface SelectionQuestion extends BaseQuestion {
  type: "selection";
  options: Option[];
}

export interface ScaleQuestion extends BaseQuestion {
  type: "scale";
  labels?: {
    start: string;
    end: string;
  };
}

export interface InfoPage extends BaseQuestion {
  type: "info";
  buttonText?: string;
}

export type Question = SelectionQuestion | ScaleQuestion | InfoPage;

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
