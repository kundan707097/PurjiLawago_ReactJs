
import React, { lazy } from 'react';
import Home from '../screens/homeScreen/Home';
const Dashboard = lazy(() => import('../screens/dashBoardScreens'));

export const privateRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: "/dashboard/*",
    element: <Dashboard />,
  },

];

export default privateRoutes;