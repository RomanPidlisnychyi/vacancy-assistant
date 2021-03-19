import { lazy } from 'react';

const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    pablic: false,
    restricted: false,
    component: lazy(() =>
      import('./view/HomeView' /* webpackChunkName: "home-view" */)
    ),
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/LoginView' /* webpackChunkName: "login-view" */)
    ),
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/RegisterView' /* webpackChunkName: "register-view" */)
    ),
  },
  {
    path: '/recovery',
    label: 'Recovery',
    exact: true,
    pablic: true,
    restricted: true,
    component: lazy(() =>
      import('./view/RecoveryView' /* webpackChunkName: "recovery-view" */)
    ),
  },
  {
    path: '/:vacancyId',
    label: 'VacancyDetails',
    exact: true,
    pablic: false,
    restricted: false,
    component: lazy(() =>
      import(
        './view/VacancyDetailsView' /* webpackChunkName: "vacancy-details-view" */
      )
    ),
  },
];

export default routes;
