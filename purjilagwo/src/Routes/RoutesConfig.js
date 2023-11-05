
import React, { lazy } from 'react';

const Login = lazy(() => import('../screens/loginScreen/Login'));
const Home = lazy(() => import('../screens/homeScreen/Home'));
const DoctorDetails = lazy(() => import('../screens/doctorInformationScreen/DoctorsDetails'));
const DoctorList = lazy(() => import('../screens/doctorInformationScreen/DoctorList'));
const HomeDashboard = lazy(() => import('../screens/dashBoardScreens/HomeDashboard'));

export const routevalues = [
  {
    path: '/login',
    element: <Login />,
    showHeader: true,
    showFooter: true,
  },
  {
    path: '/',
    element: <Home />,
    showHeader: true,
    showFooter: true,
  },
  {
    path: '/doctorsdetails/:id',
    element: <DoctorDetails />,
    showHeader: true,
    showFooter: true,
  },
  {
    path: '/doctorlist/:location',
    element: <DoctorList />,
    showHeader: true,
    showFooter: true,
  },
  {
    path: '/homeDashhboard',
    element: <HomeDashboard />,
    showHeader: false,
    showFooter: false,
  },
];

export default routevalues;