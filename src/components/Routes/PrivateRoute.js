import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../store/selectors';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useSelector(authSelectors.getToken);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
