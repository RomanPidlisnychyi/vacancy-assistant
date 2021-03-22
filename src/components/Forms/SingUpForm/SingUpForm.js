import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { onRegister } from '../../../store/operations/authOperations';
import { MyInput } from '../../Inputs';
import { MyButton } from '../../MyButton';
import { inputsOnValidation } from '../../../utils/validator';
import { inputs } from '../../../inputs';
import styles from './SingUpForm.module.css';

export default function SingUpForm(props) {
  const dispatch = useDispatch();

  const myInputs = inputs.filter(
    input =>
      input.name === 'name' ||
      input.name === 'email' ||
      input.name === 'password' ||
      input.name === 'confirmPassword'
  );

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = inputsOnValidation;

    if (!name || !email || !password || !confirmPassword) {
      return;
    }

    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      credantials = { ...credantials, [name]: value };
    });

    delete credantials.confirmPassword;

    dispatch(onRegister(credantials)).then(response => {
      if (response && response.password) {
        setTimeout(() => {
          props.history.push('/login');
        }, 1000);
      }
    });
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      {myInputs.map(input => (
        <MyInput key={input.name} {...input} />
      ))}
      <MyButton title="SingUp" btnActive={true} />
      <Link className={styles.link} to="/login">
        SingIn
      </Link>
    </Form>
  );
}
