import { Logo } from '../Logo';
import { UserMenu } from '../UserMenu';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <UserMenu />
    </header>
  );
}
