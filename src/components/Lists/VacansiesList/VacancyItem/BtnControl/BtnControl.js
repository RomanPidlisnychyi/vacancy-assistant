import { IconBtn } from './IconBtn';
import styles from './BtnControl.module.css';

export default function BtnControl({ myBtn, id = null, handleIconKey, URL }) {
  const handleBtn = name => {
    handleIconKey(name);
  };
  return (
    <div className={styles.container}>
      {myBtn.map(name =>
        name === 'URL' ? (
          <a href={URL} target="_blanck" key={name}>
            <IconBtn handleBtn={handleBtn} name={name} id={id} />
          </a>
        ) : (
          <IconBtn key={name} handleBtn={handleBtn} name={name} id={id} />
        )
      )}
    </div>
  );
}
