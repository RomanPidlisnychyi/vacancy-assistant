import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { getEmail, getPass } from '../../../store/selectors/authSelectors';
import { getFilter } from '../../../store/selectors/filterSelectors';
import { IncorrectInputValue } from '../../Messages';
import { validator } from '../../../utils/validator';
import styles from './MyInput.module.css';

export default function MyInput({
  type,
  name,
  validation,
  placeholder,
  message,
}) {
  const dispatch = useDispatch();

  const email = useSelector(getEmail);
  const password = useSelector(getPass);
  const filter = useSelector(getFilter);

  const [input, setInput] = useState('');

  useEffect(() => {
    if (name === 'email' && email) {
      setInput(email);
    }
    if (name === 'password' && password) {
      setInput(password);
    }
    if (name === 'companyName' && filter) {
      setInput(filter);
    }
  }, [dispatch, email, password, filter, name]);

  const handleInput = e => setInput(e.target.value);

  let isValid, notValid;

  if (validation) {
    isValid = validator(name, input);
    notValid = !isValid;
  }
  //name: email, password, confirmPassword, user, company, location, phone, url, position, stack
  return (
    <Form.Group className={styles.formGroup}>
      <Form.Label className={styles[name]} />
      <Form.Control
        className={styles.input}
        name={name}
        isValid={isValid}
        isInvalid={notValid}
        type={type}
        placeholder={placeholder ? placeholder : name}
        onChange={handleInput}
        value={input}
      />
      {notValid && input && message && <IncorrectInputValue title={message} />}
    </Form.Group>
  );
}
