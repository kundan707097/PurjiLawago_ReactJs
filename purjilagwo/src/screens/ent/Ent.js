import React, { useEffect } from 'react'
import Landing from './Landing'
import TopDoctors from './TopDoctors';
import Category from './Category';
import NoseTreatment from './NoseTreatment';
import BookingSystem from './BookingSystem';
import Banner from './Banner';
import FandQ from './FandQ';
import LiveCounter from '../../components/LiveCounter';
import Footer from '../../components/Footer';
import OurServices from './OurServices';

const Ent = () => {

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
            <Category />
            <NoseTreatment />
            <BookingSystem />
            <Banner />
            <FandQ />
            <LiveCounter/>
            <Footer />
        </>
    )
}

export default Ent
