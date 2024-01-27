
import React, { lazy } from 'react';
import Home from '../screens/homeScreen/Home';
import VideoConsult from '../screens/videoconsult/VideoConsult';
import Medicine from '../screens/medicine/Medicine';
import LabTest from '../screens/labtest/LabTest';
import EditProfile from '../screens/editProfile/EditProfile';
import Surgeries from '../screens/surgeries/surgeries';
import About from '../screens/about/about';
import Contact from '../screens/contact/contact';
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
  {
    path: '/videoConsult',
    element: <VideoConsult />,
  },
  {
    path: '/medicine',
    element: <Medicine />,
  },
  {
    path: '/labTest',
    element: <LabTest />,
  },
  {
    path: '/surgeries',
    element: <Surgeries />,
  },
  {
    path: '/edit/profile',
    element: <EditProfile />,
  },
  {
    path: '/about_us',
    element: <About />,
  },
  {
    path: '/contact_us',
    element: <Contact />,
  },
];

export default commonroutes;