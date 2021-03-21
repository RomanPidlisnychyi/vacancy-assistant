import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { onLogin } from '../../../store/operations/authOperations';
import { getEmail, getPass } from '../../../store/selectors/authSelectors';
import { MyInput } from '../../Inputs';
import { MyButton } from '../../MyButton';
import { validator } from '../../../utils/validator';
import styles from '../SingUpForm/SingUpForm.module.css';

export default function SingInForm() {
  const dispatch = useDispatch();
  const login = useSelector(getEmail);
  const pass = useSelector(getPass);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (login && pass) {
      setEmail(login);
      setPassword(pass);
    }
  }, [dispatch, login, pass]);

  const handleEmail = e => setEmail(e.target.value);

  const handlePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(onLogin({ email, password }));
  };

  const emailValid = validator('email', email);

  const passwordValid = validator('password', password);

  const btnActive = emailValid && passwordValid;

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <MyInput
        type="email"
        value={email}
        handleValue={handleEmail}
        valid={emailValid}
        placeholder="email@example.com"
        message="Incorrect email!"
      />
      <MyInput
        type="password"
        value={password}
        handleValue={handlePassword}
        valid={passwordValid}
        placeholder="Password"
        message="Pass length must be > 7!"
      />
      <MyButton title="SingIn" btnActive={btnActive} />
      <Link className={styles.link} to="/register">
        SingUp
      </Link>
    </Form>
  );
}
