import React from 'react';

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

function Home() {
    return (
        <>
            <Landing />
            <InfoBanner />
            <Specialities />
            <GetADoctor />
            <AboutUs />
            <VideoCalling />
            <WhyUs />
            <BookingSystem />
            <MobileAppBanner />
            <LiveCounter />
            <Footer />

        </>
    );
}

export default Home;
