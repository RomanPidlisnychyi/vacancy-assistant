import {
  registerReauest,
  registerSuccess,
  registerError,
  loginReauest,
  loginSuccess,
  loginError,
  logoutSuccess,
  currentReauest,
  currentSuccess,
  currentError,
} from '../actions/authActions';
import { getAllVacancies } from '../actions/vacancyActions';
import {
  register,
  login,
  logout,
  current,
  vacancies,
} from '../../utils/apiUtils';

export const onRegister = credentials => async dispatch => {
  dispatch(registerReauest());

  const payload = await register(credentials);

  if (payload.name) {
    dispatch(registerSuccess(payload));
    return payload;
  }

  dispatch(registerError(payload));
};

export const onLogin = credentials => async dispatch => {
  dispatch(loginReauest());
  const payload = await login(credentials);
  if (payload.user) {
    dispatch(loginSuccess(payload));
    const allVacancies = await vacancies();
    dispatch(getAllVacancies(allVacancies));
    return;
  }

  dispatch(loginError(payload));
};

export const onLogout = () => dispatch => {
  logout();
  dispatch(logoutSuccess());
};

export const onCurrent = () => async dispatch => {
  dispatch(currentReauest());
  const payload = await current();

  if (payload.user) {
    dispatch(currentSuccess(payload));
    const allVacancies = await vacancies();
    dispatch(getAllVacancies(allVacancies));
    return;
  }

  dispatch(currentError(payload));
};
