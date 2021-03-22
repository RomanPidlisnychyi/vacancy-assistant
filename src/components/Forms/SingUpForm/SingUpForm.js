import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { onRegister } from '../../../store/operations/authOperations';
import { MyInput } from '../../Inputs';
import { MyButton } from '../../MyButton';
import { validator } from '../../../utils/validator';
import styles from './SingUpForm.module.css';

export default function SingUpForm(props) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleName = e => setName(e.target.value);

  const handleEmail = e => setEmail(e.target.value);

  const handlePassword = e => setPassword(e.target.value);

  const handleConfirmPassword = e => setConfirmPassword(e.target.value);

  const nameValid = name;

  const emailValid = validator('email', email);
  const passwordValid = validator('password', password);

  const confirmPasswordValid = password === confirmPassword && confirmPassword;

  const btnActive =
    nameValid && emailValid && passwordValid && confirmPasswordValid;

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(onRegister({ name, email, password })).then(response => {
      if (response && response.password) {
        setTimeout(() => {
          props.history.push('/login');
        }, 1000);
      }
    });
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <MyInput
        type="text"
        name="user"
        value={name}
        handleValue={handleName}
        valid={nameValid}
        placeholder="User name"
      />
      <MyInput
        type="email"
        name="email"
        value={email}
        handleValue={handleEmail}
        valid={emailValid}
        placeholder="email@example.com"
        message="Incorrect email!"
      />
      <MyInput
        type="password"
        name="password"
        value={password}
        handleValue={handlePassword}
        valid={passwordValid}
        placeholder="Password"
        message="Pass length must be > 7!"
      />
      <MyInput
        type="password"
        name="password"
        value={confirmPassword}
        handleValue={handleConfirmPassword}
        valid={confirmPasswordValid}
        placeholder="Confirm password"
        message="Passwords do not match!"
      />
      <MyButton title="SingUp" btnActive={btnActive} />
      <Link className={styles.link} to="/login">
        SingIn
      </Link>
    </Form>
  );
}
