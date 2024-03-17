
import React, { lazy } from 'react';
import Home from '../screens/homeScreen/Home';
import VideoConsult from '../screens/videoconsult/VideoConsult';
import Medicine from '../screens/medicine/Medicine';
import LabTest from '../screens/labtest/LabTest';
import Surgeries from '../screens/surgeries/surgeries';
import Contact from '../screens/contact/contact';
import About from '../screens/about/about';
import Privacy_policy from '../screens/privacypolicy/privacy'
import Terms from '../screens/terms/terms';


const EmergencyBooking = lazy(() => import('../screens/emergencyBooking/EmergencyBooking'));
const DoctorDetails = lazy(() => import('../screens/doctorInformationScreen/DoctorsDetails'));
const DoctorList = lazy(() => import('../screens/doctorInformationScreen/DoctorList'));
const EyeCare = lazy(() => import('../screens/eyeCare/EyeCare'));
const Dentist = lazy(() => import('../screens/dentist/Dentist'));
const Cardiology = lazy(() => import('../screens/cardiology/Cardiology'));
const Ent = lazy(() => import('../screens/ent/Ent'));
// const Nephrology = lazy(() => import('../screens/nephrology/Nephrology'));
// const Fertiltity = lazy(() => import('../screens/fertility/Fertiltity'));
// const Paediatric = lazy(() => import('../screens/paediatric/Paediatric'));
// const PhysicanSurgeon = lazy(() => import('../screens/physican&surgeon/Physican&Surgeon'));

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
    path: '/emergency_booking',
    element: <EmergencyBooking />,
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
  {
    path: '/dentist',
    element: <Dentist />,
  },
  {
    path: '/privacypolicy',
    element: <Privacy_policy />,
  },
    {
    path: '/terms',
    element: <Terms />,
  },
  // {
  //   path: '/nephrology',
  //   element: <Nephrology />,
  // },
  //  {
  //    path: '/fertiltity',
  //    element: <Fertiltity />,
  //  },
  //  {
  //    path: '/paediatric',
  //    element: <Paediatric />,
  //  },
  {
    path: '/ent',
    element: <Ent />,
  },
  // {
  //   path: '/physican&surgeon',
  //   element: <PhysicanSurgeon />,
  // },
];

export default commonroutes;