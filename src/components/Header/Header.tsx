import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Nudge</div>
    </header>
  );
};

export default Header;
