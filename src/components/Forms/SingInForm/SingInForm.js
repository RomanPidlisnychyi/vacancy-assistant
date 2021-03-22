import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { onLogin } from '../../../store/operations/authOperations';
import { getEmail, getPass } from '../../../store/selectors/authSelectors';
import { MyInput } from '../../Inputs';
import { MyButton } from '../../MyButton';
import { inputs } from '../../../inputs';
import { onInputs, inputsOnValid } from '../../../utils/onInputs';
import styles from '../SingUpForm/SingUpForm.module.css';

export default function SingInForm() {
  const dispatch = useDispatch();

  const login = useSelector(getEmail);
  const pass = useSelector(getPass);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  useEffect(() => {
    if (login && pass) {
      setEmail(login);
      setPassword(pass);
    }
  }, [dispatch, login, pass]);

  const handleEmail = e => setEmail(e.target.value);
  const handlePassword = e => setPassword(e.target.value);

  useEffect(() => {
    handleBtnActive();
  }, [email, password]);

  const handleBtnActive = () => {
    const allInputs = document.querySelectorAll('input');

    allInputs.forEach(input => {
      onInputs(input.name, input.classList['value'].includes('is-valid'));
    });

    setBtnActive(inputsOnValid.email && inputsOnValid.password);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(onLogin({ email, password }));
  };

  return (
    <Form className={styles.form} onSubmit={handleSubmit}>
      {inputs.map(input => {
        if (input.name === 'email') {
          return (
            <MyInput
              key={input.name}
              {...input}
              value={email}
              setValue={handleEmail}
            />
          );
        }
        if (input.name === 'password') {
          return (
            <MyInput
              key={input.name}
              {...input}
              value={password}
              setValue={handlePassword}
            />
          );
        }
        return false;
      })}
      <MyButton title="SingIn" btnActive={btnActive} />
      <Link className={styles.link} to="/register">
        SingUp
      </Link>
    </Form>
  );
}
