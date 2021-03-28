import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Logo } from '../Logo';
import { UserMenu } from '../UserMenu';
import { getName, getToken } from '../../store/selectors/authSelectors';
import { isLoading } from '../../store/selectors/loadingSelectots';
import styles from './Header.module.css';

export default function Header() {
  const name = useSelector(getName);
  const loading = useSelector(isLoading);
  const token = useSelector(getToken);
  return (
    <header className={styles.header}>
      <Logo />
      {loading && token && !name && (
        <Loader color="#79879a" height={24} width={45} />
      )}
      {name && <UserMenu />}
    </header>
  );
}
