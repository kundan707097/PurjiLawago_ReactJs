import React from 'react';

import Landing from './Landing';
import InfoBanner from './InfoBanner';
import Services, { Specialities } from './Services';
import TopDoctors from './TopDoctors';
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
            {/* <Services /> */}
            <Specialities />
            <GetADoctor />
            <AboutUs />
            <WhyUs />
            <BookingSystem />
            {/* <TopDoctors /> */}
            <LiveCounter />
            <Footer />

        </>
    );
}

export default Home;
