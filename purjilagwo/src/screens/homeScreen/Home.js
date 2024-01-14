import React from 'react';

import Landing from './Landing';
import InfoBanner from './InfoBanner';
import Services from './Services';
import TopDoctors from './TopDoctors';
import LiveCounter from './LiveCounter';
import Call from './Call';

function Home() {
    return (
        <>

            <Landing />
            <InfoBanner />
            <Services />
            <TopDoctors />
            <LiveCounter />
            <Call />

        </>
    );
}

export default Home;
