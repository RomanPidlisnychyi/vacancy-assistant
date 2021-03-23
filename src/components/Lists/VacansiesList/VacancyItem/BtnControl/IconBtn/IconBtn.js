import styles from './IconBtn.module.css';

export default function IconBtn({ name, handleBtn }) {
  const handleButton = () => {
    handleBtn(name);
  };
  return (
    <button className={styles[name]} type="button" onClick={handleButton} />
  );
}
