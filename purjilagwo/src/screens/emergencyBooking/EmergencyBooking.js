import React, { useEffect } from 'react'
import Landing from './Landing'
import LiveCounter from '../../components/LiveCounter'
import Footer from '../../components/Footer'
import TreatmentWay from './TreatmentWay'
import DoctorService from './DoctorService'
import HowGetADoctor from './HowGetADoctor'
import AppointmentService from './AppointmentService'
import EmergencyCallBanner from './EmergencyCallBanner'

const EmergencyBooking = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling effect
    });
  }, [])
  
    return (
        <>
            <Landing />
            <TreatmentWay />
            <DoctorService />
            <HowGetADoctor />
            <AppointmentService />
            <EmergencyCallBanner />
            <LiveCounter />
            <Footer />
        </>
    )
}

export default EmergencyBooking