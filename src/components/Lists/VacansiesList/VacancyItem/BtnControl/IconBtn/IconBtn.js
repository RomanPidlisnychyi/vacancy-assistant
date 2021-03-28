import { useDispatch, useSelector } from 'react-redux';
import { onRefresh } from '../../../../../../store/operations/authOperations';
import { getVacancy } from '../../../../../../store/selectors/vacancySelectors';
import ownThrottle from '../../../../../../utils/ownThrottle';
import styles from './IconBtn.module.css';

export default function IconBtn({ name, handleBtn, id }) {
  const dispatch = useDispatch();
  const { status } = useSelector(state => getVacancy(state, id));
  const handleButton = () => {
    handleBtn(name);
    ownThrottle(300000) && dispatch(onRefresh());
  };
  return (
    <button
      className={
        status === name ? `${styles[name]} ${styles.active}` : styles[name]
      }
      type="button"
      onClick={handleButton}
    />
  );
}
