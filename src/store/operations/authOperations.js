import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutSuccess,
  currentRequest,
  currentSuccess,
  currentError,
  refreshRequest,
  refreshSuccess,
  refreshError,
} from '../actions/authActions';
import { getAllVacancies, getStatuses } from '../actions/vacancyActions';
import {
  register,
  login,
  logout,
  current,
  refresh,
  vacancies,
} from '../../utils/apiUtils';

export const onRegister = credentials => async dispatch => {
  dispatch(registerRequest());

  const payload = await register(credentials);

  if (payload.name) {
    dispatch(registerSuccess(payload));
    return payload;
  }

  dispatch(registerError(payload));
};

export const onLogin = credentials => async dispatch => {
  dispatch(loginRequest());
  const payload = await login(credentials);
  if (payload.user) {
    dispatch(loginSuccess(payload));
    const { vacancies: userVacancies, statuses } = await vacancies();
    dispatch(getAllVacancies(userVacancies));
    dispatch(getStatuses(statuses));
    return;
  }

  dispatch(loginError(payload));
};

export const onLogout = () => dispatch => {
  logout();
  dispatch(logoutSuccess());
};

export const onCurrent = () => async dispatch => {
  dispatch(currentRequest());
  const payload = await current();
  if (payload.user) {
    dispatch(currentSuccess(payload));
    const { vacancies: userVacancies, statuses } = await vacancies();
    dispatch(getAllVacancies(userVacancies));
    dispatch(getStatuses(statuses));
    return;
  }

  dispatch(currentError(payload));
};

export const onRefresh = () => async dispatch => {
  dispatch(refreshRequest());
  const payload = await refresh();

  if (payload || payload === undefined) {
    dispatch(refreshSuccess(payload));
    return;
  }

  dispatch(refreshError(payload));
};
