
import React, { lazy } from 'react';

const Login = lazy(() => import('../screens/loginScreen/Login'));
export const routevalues = [
  {
    path: '/authentication',
    element: <Login />,
  }
];

export default routevalues;