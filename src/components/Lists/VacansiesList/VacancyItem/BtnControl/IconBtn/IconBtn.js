import { useDispatch } from 'react-redux';
import { onRefresh } from '../../../../../../store/operations/authOperations';
import ownThrottle from '../../../../../../utils/ownThrottle';
import styles from './IconBtn.module.css';

export default function IconBtn({ name, handleBtn }) {
  const dispatch = useDispatch();

  const handleButton = () => {
    handleBtn(name);
    ownThrottle(300000) && dispatch(onRefresh());
  };
  return (
    <button className={styles[name]} type="button" onClick={handleButton} />
  );
}
