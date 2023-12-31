
import React, { lazy } from 'react';
import Home from '../screens/homeScreen/Home';
const HomeDashboard = lazy(() => import('../screens/dashBoardScreens/HomeDashboard'));
export const privateRoutes = [
 
  {
    path: '/homeDashhboard',
    element: <HomeDashboard />,

  },
  {
    path: '/',
    element: <Home />,
  },
];

export default privateRoutes;