import { useDispatch, useSelector } from 'react-redux';
import { onLogout } from '../../store/operations/authOperations';
import { getName } from '../../store/selectors/authSelectors';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(getName);

  const logout = () => dispatch(onLogout());

  return (
    <div className={styles.container}>
      <span className={styles.name}>{name}</span>
      <button className={styles.button} type="button" onClick={logout}>
        <span className={styles.buttonTitle}>Logout</span>
      </button>
    </div>
  );
}
