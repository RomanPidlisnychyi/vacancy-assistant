import { Form } from 'react-bootstrap';
import { IncorrectInputValue } from '../../Messages';
import { validator } from '../../../utils/validator';
import styles from './MyInput.module.css';

export default function MyInput({
  type,
  name,
  value,
  setValue,
  validation,
  placeholder,
  message,
}) {
  let isValid, notValid;

  if (validation) {
    isValid = validator(name, value);
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
        onChange={setValue}
        value={value}
      />
      {notValid && value && message && <IncorrectInputValue title={message} />}
    </Form.Group>
  );
}
