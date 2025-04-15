import styles from './RecordButton.module.css';

export default function RecordButton() {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button}>🎙️ Start Recording</button>
    </div>
  );
}
