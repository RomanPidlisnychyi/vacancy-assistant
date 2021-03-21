import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { onCreateVacancy } from '../../../store/operations/vacancyOperations';
import { getFilter } from '../../../store/selectors/filterSelectors';
import { setFilter } from '../../../store/actions/filterActions';
import { MyInput } from '../../Inputs';
import { validator } from '../../../utils/validator';
import styles from './CreateVacancyForm.module.css';

export default function CreateVacancyForm() {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleFilter = e => dispatch(setFilter(e.target.value));

  const [url, setUrl] = useState('');
  const [phone, setPhone] = useState('');
  const [position, setPosition] = useState('');
  const [stack, setStack] = useState('');
  const [location, setLocation] = useState('');

  const handleURL = e => setUrl(e.target.value);
  const handlePhone = e => setPhone(e.target.value);
  const handlePosition = e => setPosition(e.target.value);
  const handleStack = e => setStack(e.target.value);
  const handleLocation = e => setLocation(e.target.value);

  const urlValid = validator('url', url);

  // const nameValid = name;

  // const emailValid = validator('email', email);
  // const passwordValid = validator('password', password);

  // const confirmPasswordValid = password === confirmPassword && confirmPassword;

  // const btnActive =
  //   nameValid && emailValid && passwordValid && confirmPasswordValid;

  const handleSubmit = e => {
    e.preventDefault();

    // dispatch(onCreateVacancy({ name, email, password }));
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      <MyInput
        type="text"
        name="company"
        value={filter}
        handleValue={handleFilter}
        valid={filter}
        placeholder="Company name"
      />
      <MyInput
        type="text"
        name="url"
        value={url}
        handleValue={handleURL}
        valid={urlValid}
        placeholder="Vacancy URL"
        message="http_s://example.com"
      />
      <MyInput
        type="tel"
        name="phone"
        value={phone}
        handleValue={handlePhone}
        // valid={passwordValid}
        placeholder="Tel."
        // message="Pass length must be > 7!"
      />
      <MyInput
        type="text"
        value={position}
        handleValue={handlePosition}
        // valid={confirmPasswordValid}
        placeholder="Vacancy position"
      />
      <MyInput
        type="text"
        name="stack"
        value={stack}
        handleValue={handleStack}
        // valid={confirmPasswordValid}
        placeholder="Vacancy stack"
      />
      <MyInput
        type="text"
        name="location"
        value={location}
        handleValue={handleLocation}
        // valid={confirmPasswordValid}
        placeholder="Job location"
      />
    </Form>
  );
}
