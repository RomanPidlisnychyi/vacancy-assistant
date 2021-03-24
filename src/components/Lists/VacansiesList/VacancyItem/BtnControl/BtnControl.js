import { IconBtn } from './IconBtn';
import styles from './BtnControl.module.css';

export default function BtnControl({ myBtn }) {
  const handleBtn = name => {
    console.log('name', name);
  };
  return (
    <div className={styles.container}>
      {myBtn.map(name => (
        <IconBtn key={name} handleBtn={handleBtn} name={name} />
      ))}
    </div>
  );
}
