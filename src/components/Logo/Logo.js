import styles from './Logo.module.css';

export default function Logo() {
  return (
    <h3 className={styles.logo}>
      V<span className={styles.title}>acancy</span> A
      <span className={styles.title}>ssistant</span>
    </h3>
  );
}
