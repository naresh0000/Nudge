// src/types.ts

export type TranscriptPanelProps = {
    currentQuestion: string;
    setCurrentQuestion: (q: string) => void;
    onSubmit: (q: string) => void;
  };
  

export type AnswerPanelProps = {
  question: string;
  answer: string;
};

export interface HistoryPanelProps {
  history: string[];
  isRecording: boolean;
  currentQuestion: string;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<string>>;
  onSend: () => void;
  onStart: () => void;
}