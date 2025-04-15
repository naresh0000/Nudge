import styles from './AnswerPanel.module.css';

export default function AnswerPanel() {
  return (
    <div className={styles.panel}>
      <h2>Answer</h2>
      <div className={styles.answerBox}>
        <p>
          Sure! I'm a passionate software engineer specializing in frontend development.
          I love building intuitive user interfaces and collaborating across teams to
          bring impactful products to life.
        </p>
      </div>
    </div>
  );
}
