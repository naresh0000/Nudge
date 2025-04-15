import styles from './HistoryPanel.module.css';

const history = [
  "Tell me about yourself",
  "What are your strengths?",
  "Explain a challenging project you worked on",
];

export default function HistoryPanel() {
  return (
    <div className={styles.panel}>
      <h2>History Panel</h2>
      <ul className={styles.list}>
        {history.map((question, idx) => (
          <li key={idx}>{question}</li>
        ))}
      </ul>
    </div>
  );
}
