import { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { LayoutApp } from './Layout';
import { PublicRoute, PrivateRoute } from './Routes';
import routes from './../routes';

export default function App() {
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
