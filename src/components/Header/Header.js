import { useSelector } from 'react-redux';
import { Logo } from '../Logo';
import { UserMenu } from '../UserMenu';
import { getName } from '../../store/selectors/authSelectors';
import styles from './Header.module.css';

export default function Header() {
  const name = useSelector(getName);
  return (
    <header className={styles.header}>
      <Logo />
      {name && <UserMenu />}
    </header>
  );
}
