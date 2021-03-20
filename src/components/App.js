import { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onCurrent } from '../store/operations/authOperations';
import { LayoutApp } from './Layout';
import { PublicRoute, PrivateRoute } from './Routes';
import routes from './../routes';
import { isLocalTokens } from '../utils/apiUtils';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLocalTokens) {
      dispatch(onCurrent());
    }
  }, [dispatch]);
  return (
    <LayoutApp>
      <Suspense fallback={false}>
        <Switch>
          {routes.map(route =>
            route.pablic ? (
              <PublicRoute key={route.label} {...route} />
            ) : (
              <PrivateRoute key={route.label} {...route} />
            )
          )}
        </Switch>
      </Suspense>
    </LayoutApp>
  );
}
