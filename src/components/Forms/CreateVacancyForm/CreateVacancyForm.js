import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { MyInput } from '../../Inputs';
import { getVacancy } from '../../../store/selectors/vacancySelectors';
import { inputs } from '../../../inputs';
import styles from './CreateVacancyForm.module.css';

export default function CreateVacancyForm({ id = null }) {
  const vacancy = useSelector(state => getVacancy(state, id));

  const [value, setValue] = useState(false);

  const handleInput = () => setValue(!value);

  useEffect(() => {
    if (vacancy) {
      setValue(vacancy.task);
    }
  }, [vacancy]);

  const myInputs = inputs.filter(
    input =>
      input.name !== 'name' &&
      input.name !== 'email' &&
      input.name !== 'password' &&
      input.name !== 'confirmPassword'
  );

  return (
    <Form className={styles.form}>
      <label>
        Test task:
        <input
          name="task"
          type="checkbox"
          checked={value}
          value={value}
          onChange={handleInput}
        />
      </label>
      {myInputs.map(input => (
        <MyInput key={input.name} {...input} vacancy={vacancy} />
      ))}
    </Form>
  );
}
