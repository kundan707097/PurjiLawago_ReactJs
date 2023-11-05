
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
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/doctorsdetails/:id',
    element: <DoctorDetails />,
  },
  {
    path: '/doctorlist/:location',
    element: <DoctorList />,
  },
  {
    path: '/homeDashhboard',
    element: <HomeDashboard />,
  },
];

export default routevalues;