export interface Option {
  id: string;
  text: string;
  scores: Record<string, number>; // e.g., { introvert: 1, creative: 2 }
}

export interface Question {
  id: string;
  type?: 'question' | 'info';
  text: string;
  options?: Option[];
  buttonText?: string;
}

export interface PersonalityType {
  id: string;
  name: string;
  description: string;
  traits: string[];
}
