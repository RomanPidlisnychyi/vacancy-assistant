import { Route, Redirect } from 'react-router-dom';
import { isLocalTokens } from '../../utils/apiUtils';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLocalTokens ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
