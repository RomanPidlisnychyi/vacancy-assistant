import { authActions } from '../actions';
import { login, register } from '../../utils/apiUtils';

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

const onLogout = () => dispatch => {};

const authOperations = {
  onRegister,
  onLogin,
  onLogout,
};

export default authOperations;
