
import React, { lazy } from 'react';
import Home from '../screens/homeScreen/Home';
import ProtectedRoute from "./ProtectedRoute";
const Login = lazy(() => import('../screens/loginScreen/Login'));
const DoctorDetails = lazy(() => import('../screens/doctorInformationScreen/DoctorsDetails'));
const DoctorList = lazy(() => import('../screens/doctorInformationScreen/DoctorList'));
const HomeDashboard = lazy(() => import('../screens/dashBoardScreens/HomeDashboard'));
const DoctorAppointment = lazy(() => import('../screens/doctorInformationScreen/DoctorAppointment'));
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
    element: <ProtectedRoute>
       <HomeDashboard />
     </ProtectedRoute>,
    showHeader: false,
    showFooter: false,
  },
  {
    path: '/doctorAppointment',
    element: <DoctorAppointment />,
    showHeader: true,
    showFooter: true,
  },
];

export default routevalues;