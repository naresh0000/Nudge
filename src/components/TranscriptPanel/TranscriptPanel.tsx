import styles from './TranscriptPanel.module.css';

const sampleTranscript = [
  "Hi, can you tell me about yourself?",
  "Sure! I'm a software engineer with 4 years of experience in frontend dev.",
  "What are your key strengths?",
  "I'm great at system design and cross-team collaboration.",
];

export default function TranscriptPanel() {
  return (
    <div className={styles.panel}>
      <h2>Transcript</h2>
      <ul className={styles.list}>
        {sampleTranscript.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
