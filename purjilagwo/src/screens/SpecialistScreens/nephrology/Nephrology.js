import React from 'react'
import Landing from './Landing'
import TopDoctors from './TopDoctors'
import HowGetADoctor from '../../../components/HowGetADoctor'
import FandQ from './FandQ'
import LiveCounter from '../../../components/LiveCounter'
import Footer from '../../../components/Footer'
import KidneyStokeSymptomps from './KidneyStokeSymptomps'
import Banner from './Banner'

const Nephrology = () => {
    return (
        <>
            <Landing />
            <TopDoctors />
            <KidneyStokeSymptomps />
            <Banner />
            <HowGetADoctor />
            <FandQ />
            <LiveCounter />
            <Footer />
        </>
    )
}

export default Nephrology