import styles from './Layout.module.css';

export default function LayoutView({ children }) {
  return <div className={styles.viewContainer}>{children}</div>;
}
