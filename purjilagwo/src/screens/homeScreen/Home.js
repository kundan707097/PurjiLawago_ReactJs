import React from 'react';

import Landing from './Landing';
import InfoBanner from './InfoBanner';
import Services from './Services';
import TopDoctors from './TopDoctors';
import LiveCounter from './LiveCounter';
import AppBanner from './AppBanner';

function Home() {
    return (
        <>

            <Landing />
            <InfoBanner />
            <Services />
            <TopDoctors />
            <AppBanner />
            <LiveCounter />

        </>
    );
}

export default Home;
