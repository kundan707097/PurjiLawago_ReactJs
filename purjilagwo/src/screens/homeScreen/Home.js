import React from 'react';

import Landing from './Landing';
import InfoBanner from './InfoBanner';
import Services from './Services';
import TopDoctors from './TopDoctors';
import LiveCounter from './LiveCounter';

function Home() {
    return (
        <>

            <Landing />
            <InfoBanner />
            <Services />
            <TopDoctors />
            <LiveCounter />

        </>
    );
}

export default Home;
