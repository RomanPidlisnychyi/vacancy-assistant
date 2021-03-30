import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MyInput } from '../../Inputs';
import { MyButton } from '../../MyButton';
import { onRecovery } from '../../../store/operations/authOperations';
import { getEmail } from '../../../store/selectors/authSelectors';
import { logoutSuccess } from '../../../store/actions/authActions';
import { inputsOnValidation } from '../../../utils/validator';
import { inputs } from '../../../inputs';
import styles from '../SingUpForm/SingUpForm.module.css';

export default function RecoveryForm(props) {
  const dispatch = useDispatch();
  const emailInRedux = useSelector(getEmail);

  const emailInput = inputs.find(input => input.name === 'email');

  const myInputs = inputs.filter(
    input =>
      input.name === 'email' ||
      input.name === 'recovery' ||
      input.name === 'password' ||
      input.name === 'confirmPassword'
  );

  const validation = () => {
    if (emailInRedux) {
      const { name, email, password, confirmPassword } = inputsOnValidation;

      if (!name || !email || !password || !confirmPassword) {
        return false;
      }

      return true;
    }

    const { email } = inputsOnValidation;

    return email;
  };

  const handleLink = () => {
    if (emailInRedux) {
      dispatch(logoutSuccess());
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (!validation()) {
      return;
    }

    let credantials;

    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      const { name, value } = input;
      credantials = { ...credantials, [name]: value };
    });

    delete credantials.confirmPassword;

    dispatch(onRecovery(credantials));
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      {emailInRedux ? (
        myInputs.map(input => <MyInput key={input.name} {...input} />)
      ) : (
        <MyInput key={emailInput.name} {...emailInput} />
      )}
      <MyButton title="Next" btnActive={true} />
      <Link className={styles.link} onClick={handleLink} to="/login">
        SingIn
      </Link>
    </Form>
  );
}
