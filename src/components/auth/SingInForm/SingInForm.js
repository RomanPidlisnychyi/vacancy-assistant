import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
// import { authOperations, authSelectors } from '../../redux/auth';
import styles from '../SingUpForm/SingUpForm.module.css';

export default function SingInForm() {
  const dispatch = useDispatch();

  //   const isLoading = useSelector(authSelectors.getIsLoading);
  const isLoading = true;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(authOperations.logIn({ email, password }));
  };

  const emailValid = email.includes('@') && email.includes('.');

  const passwordValid = password !== '' && password.length > 7;

  const btnActive = emailValid && passwordValid;

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Form.Group className={styles.formGroup} controlId="formBasicEmail">
        <Form.Label className={styles.emailLabel} />
        <Form.Control
          className={styles.input}
          isValid={emailValid}
          type="email"
          placeholder="email@example.com"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        {!emailValid && email !== '' && (
          <span className={styles.span}>Incorrect email!</span>
        )}
      </Form.Group>

      <Form.Group className={styles.formGroup} controlId="formBasicPassword">
        <Form.Label className={styles.passwordLabel} />
        <Form.Control
          className={styles.input}
          isValid={passwordValid}
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        {!passwordValid && password !== '' && (
          <span className={styles.span}>
            the password must be at least 8 characters long!
          </span>
        )}
      </Form.Group>

      <Button
        className={styles.button}
        variant="outline-primary"
        type="submit"
        disabled={!btnActive || isLoading}
      >
        {!isLoading ? (
          'SingIn'
        ) : (
          <Loader color="#007bff" height={22} width={45} />
        )}
      </Button>
      <Link className={styles.link} to="/register">
        SingUp
      </Link>
    </Form>
  );
}
