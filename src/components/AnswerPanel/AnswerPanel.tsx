import { AnswerPanelProps } from '../../types/types';
import  styles from './AnswerPanel.module.css';

const AnswerPanel: React.FC<AnswerPanelProps> = ({ answer }) => (
    <div className={styles.answerBubble}>
    <p><strong>A:</strong> {answer}</p>
  </div>
  
);

export default AnswerPanel;
