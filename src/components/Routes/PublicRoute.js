import { Route, Redirect } from 'react-router-dom';
import { isLocalTokens } from '../../utils/apiUtils';

export default function PublicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        !isLocalTokens || (isLocalTokens && !restricted) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}
