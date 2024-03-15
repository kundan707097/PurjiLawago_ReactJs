import React, { useEffect } from 'react'
import Landing from './Landing';
import TopDoctors from './TopDoctors';
import Process from './Process';
import HealthyTeeth from './HealthyTeeth';
import Structure from './Structure';
import LiveCounter from '../../components/LiveCounter';
import Footer from '../../components/Footer';
import HowGetADoctor from '../../components/HowGetADoctor';
import FandQ from './FandQ';
import OurServices from './OurServices';

const Dentist = () => {


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
            <Process />
            <HealthyTeeth />
            <HowGetADoctor />
            <Structure />
            <FandQ />
            <LiveCounter />
            <Footer />
        </>
    )
}

export default Dentist