// src/pages/Home.tsx
import styles from './Home.module.css';
import TranscriptPanel from '../components/TranscriptPanel/TranscriptPanel';
import AnswerPanel from '../components/AnswerPanel/AnswerPanel';
import RecordButton from '../components/RecordButton/RecordButton';
import HistoryPanel from '../components/HistoryPanel/HistoryPanel';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <TranscriptPanel />
      </div>

      <div className={styles.middle}>
        <AnswerPanel />
      </div>

      <div className={styles.right}>
        <div>
          <HistoryPanel />
        </div>
        <div className={styles.record}>
          <RecordButton />
        </div>
      </div>
    </div>
  );
}
