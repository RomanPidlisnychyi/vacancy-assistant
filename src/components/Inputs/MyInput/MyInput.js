import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { IncorrectInputValue } from '../../Messages';
import styles from './MyInput.module.css';

export default function MyInput({
  type,
  name,
  value,
  handleValue,
  valid,
  placeholder,
  message,
}) {
  let isValid, notValid;
  if (valid !== undefined) {
    isValid = valid;
    notValid = !valid;
  }
  //type: text, email, password
  //name: company, user, location, phone, url, position, stack
  return (
    <Form.Group className={styles.formGroup}>
      <Form.Label className={styles[name ? name : type]} />
      <Form.Control
        className={styles.input}
        isValid={isValid}
        isInvalid={notValid}
        type={type}
        placeholder={placeholder}
        onChange={handleValue}
        value={value}
      />
      {notValid && value && message && <IncorrectInputValue title={message} />}
    </Form.Group>
  );
}
