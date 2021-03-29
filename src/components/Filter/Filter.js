import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BtnControl } from '../Lists/VacansiesList/VacancyItem/BtnControl';
import {
  getFilterFavorite,
  getFilterStatus,
} from '../../store/selectors/filterSelectors';
import { getStatuses } from '../../store/selectors/statusesSelectors';
import {
  setFilterFavorite,
  setFilterStatus,
} from '../../store/actions/filterActions';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const [isList, setIsList] = useState(false);

  const favorite = useSelector(getFilterFavorite);
  const statuses = useSelector(getStatuses);
  const status = useSelector(getFilterStatus);

  const handleIsList = () => setIsList(!isList);

  const handleListItem = e => {
    const { name } = e.target;

    if (name !== status && name !== 'unSet') {
      dispatch(setFilterStatus(name));
    }

    if (name === 'unSet') {
      dispatch(setFilterStatus(null));
    }

    setIsList();
  };

  const handleFavorite = () => {
    dispatch(setFilterFavorite(!favorite));
  };

  const favoriteStatus = favorite ? 'favoriteActive' : 'favorite';
  return (
    <div className={styles.container}>
      <BtnControl myBtn={[favoriteStatus]} handleIconKey={handleFavorite} />
      <div className={styles.btnContainer}>
        <button
          type="button"
          className={
            isList
              ? `${styles.mainBtn} ${styles[status]}`
              : `${styles.mainBtn} ${styles[status]} ${styles.notAtive}`
          }
          onClick={handleIsList}
        >
          {status ? status : 'select satus for filter'}
        </button>
        {isList && (
          <div className={styles.btnWrap}>
            {status && (
              <button
                name="unSet"
                onClick={handleListItem}
                className={`${styles.batton}`}
              >
                Unset filter
              </button>
            )}
            {statuses.map(status => (
              <button
                key={status}
                name={status}
                onClick={handleListItem}
                className={`${styles.batton} ${styles[status]}`}
              >
                {status}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
