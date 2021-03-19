import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../store/selectors';

export default function PublicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const isAuthenticated = useSelector(authSelectors.getToken);

  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated || (isAuthenticated && !restricted) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
