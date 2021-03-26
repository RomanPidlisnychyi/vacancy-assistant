import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { onLogout } from '../../store/operations/authOperations';
import { getName } from '../../store/selectors/authSelectors';
import { isLoading } from '../../store/selectors/loadingSelectots';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(getName);
  const loading = useSelector(isLoading);

  const logout = () => dispatch(onLogout());

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader color="#79879a" height={24} width={45} />
      ) : (
        <span className={styles.name}>{name}</span>
      )}
      <button className={styles.button} type="button" onClick={logout}>
        <span className={styles.buttonTitle}>Logout</span>
      </button>
    </div>
  );
}
