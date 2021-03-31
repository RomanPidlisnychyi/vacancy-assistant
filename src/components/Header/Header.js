import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import Loader from 'react-loader-spinner';
import { Logo } from '../Logo';
import { UserMenu } from '../UserMenu';
import { Pinotify } from '../Pinotify';
import {
  getName,
  getToken,
  getError,
} from '../../store/selectors/authSelectors';
import { isLoading } from '../../store/selectors/loadingSelectots';
import { onCleanErr } from '../../store/operations/authOperations';
import styles from './Header.module.css';
import fade from '../Pinotify/Pinotify.module.css';

export default function Header() {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const loading = useSelector(isLoading);
  const token = useSelector(getToken);
  const err = useSelector(getError);

  useEffect(() => {
    if (err) {
      dispatch(onCleanErr());
    }
  }, [dispatch, err]);

  return (
    <header
      className={token ? styles.header : `${styles.header} ${styles.solo}`}
    >
      <Logo token={token} />
      {loading && token && !name && (
        <Loader color="#79879a" height={24} width={45} />
      )}
      {name && token && <UserMenu />}
      <CSSTransition in={!!err} classNames={fade} timeout={250} unmountOnExit>
        <Pinotify err={err} />
      </CSSTransition>
    </header>
  );
}
