
import React, { lazy } from 'react';
import Home from '../screens/homeScreen/Home';
import VideoConsult from '../screens/videoconsult/VideoConsult';
import Medicine from '../screens/medicine/Medicine';
import LabTest from '../screens/labtest/LabTest';
import Surgeries from '../screens/surgeries/surgeries';
import Contact from '../screens/contact/contact';
import Cardiology from '../screens/specialistScreen s/Cardiology';
import EyeCare from '../screens/specialistScreen s/EyeCare';
import About from '../screens/about/about';
const DoctorDetails = lazy(() => import('../screens/doctorInformationScreen/DoctorsDetails'));
const DoctorList = lazy(() => import('../screens/doctorInformationScreen/DoctorList'));
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
    path: '/doctorlistbyId/:groupId',
    element: <DoctorList />,
  },
  {
    path: '/doctorlist',
    element: <DoctorList />,
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
    path: '/about_us',
    element: <About />,
  },
  {
    path: '/contact_us',
    element: <Contact />,
  },
  {
    path: '/cardiology',
    element: <Cardiology />,
  },
  {
    path: '/eyecare',
    element: <EyeCare />,
  },
];

export default commonroutes;