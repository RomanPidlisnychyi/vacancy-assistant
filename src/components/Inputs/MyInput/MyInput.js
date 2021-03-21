import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { IncorrectInputValue } from '../../Messages';
import styles from './MyInput.module.css';

export default function MyInput({
  type,
  value,
  handleValue,
  valid,
  placeholder,
  message,
}) {
  //type: text, email, password
  return (
    <Form.Group className={styles.formGroup}>
      <Form.Label className={styles[type]} />
      <Form.Control
        className={styles.input}
        isValid={valid}
        isInvalid={!valid}
        type={type}
        placeholder={placeholder}
        onChange={handleValue}
        value={value}
      />
      {!valid && value && message && <IncorrectInputValue title={message} />}
    </Form.Group>
  );
}
