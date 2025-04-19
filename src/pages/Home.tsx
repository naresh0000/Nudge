import { useState } from 'react';
import styles from './Home.module.css';
import HistoryPanel from '../components/HistoryPanel/HistoryPanel';
import AnswerPanel from '../components/AnswerPanel/AnswerPanel';
import TranscriptPanel from '../components/TranscriptPanel/TranscriptPanel';
import Header from '../components/Header/Header';

export default function Home() {
  const [history, setHistory] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const handleSubmit = (question?: string) => {
    const q = question || currentQuestion;
    const a = 'Mock answer for: ' + q;

    setCurrentQuestion('');
    setAiAnswer(a);
    setHistory((prev) => [...prev, q]);
    setIsRecording(false);
  };

  return (
    <div>
      <div className="top-bar">
        {/* Top bar content (e.g., logo, navigation) */}
        <Header />
      </div>
      <div className="content">
        {/* Main page content */}
      <div className={styles.container}>
        <div className={styles.left}>
          <TranscriptPanel
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            onSubmit={() => handleSubmit(currentQuestion)} />
        </div>
        <div className={styles.middle}>
          <AnswerPanel question={currentQuestion} answer={aiAnswer} />
        </div>
        <div className={styles.right}>
          <HistoryPanel
            history={history}
            isRecording={isRecording}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            onSend={() => handleSubmit(currentQuestion)}
            onStart={() => handleSubmit()} />
        </div>
      </div>
      </div>
          </div>
  );
}
