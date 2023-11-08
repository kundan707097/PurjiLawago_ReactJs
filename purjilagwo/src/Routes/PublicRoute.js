
import React, { lazy } from 'react';

const Login = lazy(() => import('../screens/loginScreen/Login'));
export const routevalues = [
  {
    path: '/login',
    element: <Login />,
  }
];

export default routevalues;