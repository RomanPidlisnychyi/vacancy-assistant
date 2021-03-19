import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import { authOperations } from '../../../store/operations';
import styles from './SingUpForm.module.css';

export default function SingUpForm(props) {
  const dispatch = useDispatch();

  // const isLoading = useSelector(loadingSelector);
  const isLoading = false;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const nameValid = name !== '';

  const emailValid = email.includes('@') && email.includes('.');

  const passwordValid = password !== '' && password.length > 7;

  const confirmPasswordValid =
    password === confirmPassword && confirmPassword !== '';

  const btnActive =
    nameValid && emailValid && passwordValid && confirmPasswordValid;

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations({ name, email, password })).then(response => {
      if (response.password) {
        setTimeout(() => {
          props.history.push('/login');
        }, 1000);
      }
    });
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <Form.Group className={styles.formGroup} controlId="formBasicName">
        <Form.Label className={styles.userLabel} />
        <Form.Control
          className={styles.input}
          isValid={nameValid}
          type="text"
          placeholder="User name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </Form.Group>
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
      <Form.Group
        className={styles.formGroup}
        controlId="formBasicConfirmPassword"
      >
        <Form.Label className={styles.passwordLabel} />
        <Form.Control
          className={styles.input}
          isValid={confirmPasswordValid}
          type="password"
          placeholder="Confirm password"
          onChange={e => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        {!confirmPasswordValid && confirmPassword && (
          <span className={styles.span}>Passwords do not match!</span>
        )}
      </Form.Group>
      <Button
        className={styles.button}
        variant="outline-primary"
        type="submit"
        disabled={!btnActive || isLoading}
      >
        {!isLoading ? 'SingIn' : <Loader color="#fff" height={22} width={45} />}
      </Button>
      <Link className={styles.link} to="/login">
        SingIn
      </Link>
    </Form>
  );
}
