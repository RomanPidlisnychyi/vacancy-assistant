import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { IncorrectInputValue } from '../../Messages';
import { validator } from '../../../utils/validator';
import styles from './MyInput.module.css';

export default function MyInput({
  type,
  name,
  value,
  validation,
  placeholder,
  message,
}) {
  const [input, setInput] = useState('');

  if (value) {
    setInput(value);
  }

  const handleInput = e => setInput(e.target.value);

  let isValid, notValid;

  if (validation) {
    isValid = validator(name, input);
    notValid = !isValid;
  }

  //type: text, email, password
  //name: company, user, location, phone, url, position, stack
  return (
    <Form.Group className={styles.formGroup}>
      <Form.Label className={styles[name]} />
      <Form.Control
        className={styles.input}
        name={name}
        isValid={isValid}
        isInvalid={notValid}
        type={type}
        placeholder={placeholder}
        onChange={handleInput}
        value={input}
      />
      {notValid && value && message && <IncorrectInputValue title={message} />}
    </Form.Group>
  );
}
