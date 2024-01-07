
import React, { lazy } from 'react';
import Home from '../screens/homeScreen/Home';
const DoctorDetails = lazy(() => import('../screens/doctorInformationScreen/DoctorsDetails'));
const DoctorList = lazy(() => import('../screens/doctorInformationScreen/DoctorList'));
const DoctorAppointment = lazy(() => import('../screens/doctorInformationScreen/DoctorAppointment'));
export const commonroutes = [
  {
    path: '/doctorsdetails/:id',
    element: <DoctorDetails />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/doctorlist/:location',
    element: <DoctorList />,
  },
  {
    path: '/doctorlist',
    element: <DoctorList />,
  },
  {
    path: '/doctorAppointment',
    element: <DoctorAppointment />,
  },
];

export default commonroutes;