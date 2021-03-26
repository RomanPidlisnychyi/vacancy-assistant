import { useDispatch } from 'react-redux';
import { IconBtn } from './IconBtn';
import { onDeleteVacancy } from '../../../../../store/operations/vacancyOperations';
import styles from './BtnControl.module.css';

export default function BtnControl({ myBtn, id, handleIconKey, URL }) {
  const dispatch = useDispatch();

  const handleBtn = name => {
    handleIconKey(name);
    // if (name === 'delete') {
    //   dispatch(onDeleteVacancy(id));
    // }
  };
  return (
    <div className={styles.container}>
      {myBtn.map(name =>
        URL ? (
          <a href={URL} target="_blanck" key={name}>
            <IconBtn handleBtn={handleBtn} name={name} />
          </a>
        ) : (
          <IconBtn key={name} handleBtn={handleBtn} name={name} />
        )
      )}
    </div>
  );
}
