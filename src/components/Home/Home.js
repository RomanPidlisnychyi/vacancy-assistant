import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Header } from '../Header';
import { MainInput } from '../Inputs';
import { VacansiesList } from '../Lists';
import { CreateVacancyForm } from '../Forms';
import { MyModal } from '../Modal';
import { onCreateVacancy } from '../../store/operations/vacancyOperations';
import { setFilter } from '../../store/actions/filterActions';
import { inputsOnValidation } from '../../utils/validator';
import styles from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);

  const handleModal = () => setIsModal(!isModal);
  const handleSubmit = () => {
    const { companyName } = inputsOnValidation;

    if (!companyName) {
      return;
    }

    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      if (!value) {
        return;
      }
      credantials = { ...credantials, [name]: value };
    });

    delete credantials.main;

    dispatch(onCreateVacancy(credantials)).then(() => {
      dispatch(setFilter(''));
      handleModal();
    });
  };
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <MainInput handleModal={handleModal} />
        <VacansiesList />
      </main>
      {isModal && (
        <MyModal
          title="Vacancy options"
          handleSubmit={handleSubmit}
          handleModal={handleModal}
        >
          <CreateVacancyForm />
        </MyModal>
      )}
    </div>
  );
}
