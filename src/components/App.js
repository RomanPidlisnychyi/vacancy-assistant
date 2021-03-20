import { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../store/selectors/authSelectors';
import { onCurrent } from '../store/operations/authOperations';
import { LayoutApp } from './Layout';
import { PublicRoute, PrivateRoute } from './Routes';
import routes from './../routes';

export default function App() {
  const dispatch = useDispatch();

  const token = useSelector(getToken);

  useEffect(() => {
    if (token) {
      dispatch(onCurrent());
    }
  }, [dispatch, token]);
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
