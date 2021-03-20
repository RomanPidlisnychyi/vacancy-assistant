import { useDispatch, useSelector } from 'react-redux';
import { onLogout } from '../../store/operations/authOperations';
import { getName } from '../../store/selectors/authSelectors';
import styles from './styles.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(getName);

  const logout = () => dispatch(onLogout());

  return (
    <div>
      <span className={styles.span}>{name}</span>
      <button className={styles.button} type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
