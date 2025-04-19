import styles from './TranscriptPanel.module.css';
import { TranscriptPanelProps } from '../../types/types';

const TranscriptPanel: React.FC<TranscriptPanelProps> = ({ currentQuestion, setCurrentQuestion, onSubmit }) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (currentQuestion.trim()) {
        onSubmit(currentQuestion);
        setCurrentQuestion('');
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        value={currentQuestion}
        onChange={(e) => setCurrentQuestion(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your question..."
      />
    </div>
  );
};

export default TranscriptPanel;
