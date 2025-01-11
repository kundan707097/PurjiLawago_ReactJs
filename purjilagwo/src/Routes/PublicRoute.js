
import React, { lazy } from 'react';
// import Register from '../screens/register/Register';
const RegisterScreen = lazy(() => import('../screens/register/Register'));

const Login = lazy(() => import('../screens/loginScreen/Login'));
export const routevalues = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <RegisterScreen/>,
  }
];

export default routevalues;