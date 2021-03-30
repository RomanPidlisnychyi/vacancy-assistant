import styles from './Logo.module.css';

export default function Logo({ token }) {
  return (
    <h3 className={token ? styles.logo : `${styles.logo} ${styles.solo}`}>
      <div className={token ? styles.first : `${styles.first} ${styles.solo}`}>
        Vacancy
      </div>
      <div className={token ? styles.last : `${styles.last} ${styles.solo}`}>
        Assistant
      </div>
    </h3>
  );
}
