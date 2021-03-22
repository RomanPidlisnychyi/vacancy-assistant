import { Form } from 'react-bootstrap';
import { MyInput } from '../../Inputs';
import { inputs } from '../../../inputs';
import styles from './CreateVacancyForm.module.css';

export default function CreateVacancyForm() {
  const myInputs = inputs.filter(
    input =>
      input.name !== 'name' &&
      input.name !== 'email' &&
      input.name !== 'password' &&
      input.name !== 'confirmPassword'
  );
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form className={styles.form}>
      {myInputs.map(input => (
        <MyInput key={input.name} {...input} />
      ))}
    </Form>
  );
}
