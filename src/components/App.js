import { Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Header } from './Header';
import { LayoutApp, LayoutView } from './Layout';
import { PublicRoute, PrivateRoute } from './Routes';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getName } from '../store/selectors/authSelectors';
import { onCurrent } from '../store/operations/authOperations';
import routes from './../routes';

export default function App() {
  const dispatch = useDispatch();

  const name = useSelector(getName);
  const token = useSelector(getToken);

  useEffect(() => {
    if (!name && token) {
      dispatch(onCurrent());
    }
  }, [dispatch, name, token]);
  return (
    <LayoutApp>
      <LayoutView>
        <Header />
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
      </LayoutView>
    </LayoutApp>
  );
}
