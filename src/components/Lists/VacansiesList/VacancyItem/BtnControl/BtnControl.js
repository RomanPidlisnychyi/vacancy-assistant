import { Button } from 'react-bootstrap';
import { IconBtn } from './IconBtn';
import { inputs } from '../../../../../inputs';
import styles from './BtnControl.module.css';

export default function BtnControl() {
  const myBtn = inputs.filter(
    input =>
      input.name !== 'name' &&
      input.name !== 'email' &&
      input.name !== 'password' &&
      input.name !== 'confirmPassword'
  );

  const handleBtn = name => {
    console.log('name', name);
  };
  return (
    <div className={styles.container}>
      {myBtn.map(btn => (
        <IconBtn key={btn.name} handleBtn={handleBtn} name={btn.name} />
      ))}
    </div>
  );
}
