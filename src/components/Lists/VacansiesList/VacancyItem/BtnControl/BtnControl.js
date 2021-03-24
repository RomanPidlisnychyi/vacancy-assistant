import { useDispatch } from 'react-redux';
import { IconBtn } from './IconBtn';
import { onDeleteVacancy } from '../../../../../store/operations/vacancyOperations';
import styles from './BtnControl.module.css';

export default function BtnControl({ myBtn, id }) {
  const dispatch = useDispatch();

  const handleBtn = name => {
    console.log('name', name);
    if (name === 'delete') {
      dispatch(onDeleteVacancy(id));
    }
  };
  return (
    <div className={styles.container}>
      {myBtn.map(name => (
        <IconBtn key={name} handleBtn={handleBtn} name={name} />
      ))}
    </div>
  );
}
