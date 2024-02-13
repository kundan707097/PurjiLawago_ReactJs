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

function Home() {
    return (
        <>
            <Landing />
            <InfoBanner />
            <Specialities />
            <GetADoctor />
            <AboutUs />
            <WhyUs />
            <BookingSystem />
            <LiveCounter />
            <Footer />

        </>
    );
}

export default Home;
