import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyInput } from '../../Inputs';
import { MyButton } from '../../MyButton';
import { onLogin } from '../../../store/operations/authOperations';
import { inputsOnValidation } from '../../../utils/validator';
import { inputs } from '../../../inputs';
import styles from '../SingUpForm/SingUpForm.module.css';

export default function SingInForm() {
  const dispatch = useDispatch();

  const myInputs = inputs.filter(
    input => input.name === 'email' || input.name === 'password'
  );

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = inputsOnValidation;

    if (!email || !password) {
      return;
    }

    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      credantials = { ...credantials, [name]: value };
    });

    dispatch(onLogin(credantials));
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      {myInputs.map(input => (
        <MyInput key={input.name} {...input} />
      ))}
      <MyButton title="SingIn" btnActive={true} />
      <Link className={styles.link} to="/register">
        SingUp
      </Link>
    </Form>
  );
}
