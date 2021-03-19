import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../../store/operations';
import { authSelectors } from '../../store/selectors';
import styles from './styles.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getName);

  const onLogout = () => dispatch(authOperations.onLogout());

  return (
    <div>
      <span className={styles.span}>{name}</span>
      <button className={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
