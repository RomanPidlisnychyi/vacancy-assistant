import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

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
          <Component />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
