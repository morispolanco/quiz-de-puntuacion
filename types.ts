
export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  feedback: string;
}
