import React from 'react';
import styles from './HistoryPanel.module.css';
import { HistoryPanelProps } from '../../types/types';

const HistoryPanel: React.FC<HistoryPanelProps> = ({ history, isRecording, onStart, onSend }) => {
  return (
    <div className={styles.panel}>
      <ul className={styles.list}>
        {[...history].reverse().map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
      <div className={styles.controls}>
        <button onClick={onStart}>
          🎤 {isRecording ? 'Stop' : 'Start'}
        </button>
        <button onClick={onSend}>🚀 Send</button>
      </div>
    </div>
  );
};

export default HistoryPanel;
