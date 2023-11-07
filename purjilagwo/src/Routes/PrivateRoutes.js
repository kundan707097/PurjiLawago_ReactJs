
import React, { lazy } from 'react';
const HomeDashboard = lazy(() => import('../screens/dashBoardScreens/HomeDashboard'));
export const privateRoutes = [
 
  {
    path: '/homeDashhboard',
    element: <HomeDashboard />,

  },
];

export default privateRoutes;