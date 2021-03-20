import { useState } from 'react';
import { UserMenu } from '../UserMenu';
import { Input } from '../Input';
import { BSModal } from '../Modal';
import styles from './Home.module.css';

export default function Home() {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => setIsModal(!isModal);
  return (
    <section className={styles.container}>
      <UserMenu />
      <Input handleModal={handleModal} />
      {isModal && <BSModal handleModal={handleModal} />}
    </section>
  );
}
