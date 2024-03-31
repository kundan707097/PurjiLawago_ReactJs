import React, { useEffect } from 'react'
import Landing from './Landing'
import TopDoctors from './TopDoctors'
import DoctorSpecialist from './DoctorSpecialist'
import HowGetADoctor from '../../../components/HowGetADoctor'
import FandQ from './FandQ'
import LiveCounter from '../../../components/LiveCounter'
import Footer from '../../../components/Footer'
import Steps from './Steps'
import OurServices from './OurServices'

const Paediatric = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  }, [])

  return (
    <>
      <Landing />
      <TopDoctors />
      <OurServices />
      <DoctorSpecialist />
      <Steps />
      <HowGetADoctor />
      <FandQ />
      <LiveCounter />
      <Footer />
      </>

  )
}

export default Paediatric