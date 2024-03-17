import React from 'react'
import Landing from './Landing'
import LiveCounter from '../../components/LiveCounter'
import Footer from '../../components/Footer'
import TopDoctors from './TopDoctors'
import Banner from './Banner'
import HeartAttack from './HeartAttack'
import HowGetADoctor from '../../components/HowGetADoctor'
import StokeSymptoms from './StokeSymptoms'
import FandQ from './FandQ'
import OurServices from './OurServices'

const Cardiology = () => {
    return (
        <>
            <Landing />
            <TopDoctors /> 
            <OurServices />
            <Banner />
            <HeartAttack />
            <HowGetADoctor />
            <StokeSymptoms />
            <FandQ />
            <LiveCounter />
            <Footer />
        </>
    )
}

export default Cardiology