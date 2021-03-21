import { useState } from 'react';
import { Header } from '../Header';
import { MainInput } from '../Inputs';
import { CreateVacancyForm } from '../Forms';
import { MyModal } from '../Modal';
import styles from './Home.module.css';

export default function Home() {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => setIsModal(!isModal);
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <MainInput handleModal={handleModal} />
      </main>
      {isModal && (
        <MyModal title="Vacancy options" handleModal={handleModal}>
          <CreateVacancyForm />
        </MyModal>
      )}
    </div>
  );
}
