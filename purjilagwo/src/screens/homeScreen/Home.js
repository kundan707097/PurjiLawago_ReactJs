import React, { useEffect } from 'react';

import Landing from './Landing';
import InfoBanner from './InfoBanner';
import Specialities from './Specialities';
import GetADoctor from './GetADoctor';
import AboutUs from './AboutUs';
import WhyUs from './WhyUs';
import BookingSystem from './BookingSystem';
import LiveCounter from '../../components/LiveCounter';
import Footer from '../../components/Footer';
import MobileAppBanner from '../../components/MobileAppBanner';
import VideoCalling from './VideoCalling';
import HotOffer from './HotOffer';
import Doctors from './Doctors';

function Home() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Add smooth scrolling effect
        });
    }, [])

    return (
        <>
            <Landing />
            {/* <InfoBanner /> */}
            <AboutUs />
            <Specialities />
            <GetADoctor />
            <Doctors/>
            {/* <HotOffer /> */}
            {/* <VideoCalling /> */}
            {/* <WhyUs /> */}
            {/* <BookingSystem /> */}
            {/* <MobileAppBanner /> */}
            <LiveCounter />
            <Footer />

        </>
    );
}

export default Home;
