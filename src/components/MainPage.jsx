import React from 'react';

import GlobalStats from './GlobalStats';
import WorldMap from './WorldMap';
import CountriesInfo from './CountriesInfo';

export default function MainPage() {
    return (
        <>
            <GlobalStats />
            <WorldMap />
            <CountriesInfo />  
        </>
    )
}
