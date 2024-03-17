import React, { useEffect } from 'react'
import Landing from './Landing'
import DoctorService from './DoctorService';
import TopDoctors from './TopDoctors';
import DoctorSpecialist from './DoctorSpecialist';
import DoctorTreatment from './DoctorTreatment';
import LiveCounter from '../../components/LiveCounter';
import Footer from '../../components/Footer';
import FandQ from './FandQ';
import HowGetADoctor from '../../components/HowGetADoctor';
import OurServices from './OurServices';

const EyeCare = () => {

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
            <DoctorService />
            <HowGetADoctor />
            <DoctorTreatment />
            <FandQ />
            <LiveCounter />
            <Footer />

        </>
    )
}

export default EyeCare