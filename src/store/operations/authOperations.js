import { authActions } from '../actions';
import { register, login, logout, current } from '../../utils/apiUtils';

const onRegister = credentials => async dispatch => {
  dispatch(authActions.registerReauest());

  const payload = await register(credentials);

  if (payload.name) {
    dispatch(authActions.registerSuccess(payload));
    return payload;
  }

  dispatch(authActions.registerError(payload));
};

const onLogin = credentials => async dispatch => {
  dispatch(authActions.loginReauest());
  const payload = await login(credentials);
  if (payload.user) {
    dispatch(authActions.loginSuccess(payload));
    return;
  }

  dispatch(authActions.loginError(payload));
};

const onLogout = () => dispatch => {
  logout();
  dispatch(authActions.logoutSuccess());
};

const onCurrent = () => async dispatch => {
  dispatch(authActions.currentReauest());
  const payload = await current();

  if (payload.user) {
    dispatch(authActions.currentSuccess(payload));
    return;
  }

  dispatch(authActions.currentError(payload));
};

const authOperations = {
  onRegister,
  onLogin,
  onLogout,
  onCurrent,
};

export default authOperations;
