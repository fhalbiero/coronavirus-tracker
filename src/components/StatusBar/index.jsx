import React, { useEffect, useState } from 'react';

import StatusItem from '../StatusItem';

import { useData } from '../../context/data';
import { Container } from './styles';

const StatusBar = () => {

    const [ info, setInfo ] = useState(null);
    const { data, selectedCountry } = useData();

    useEffect(() => {

        if (!data) {
            return;
        }

        const { 
            NewConfirmed,
            NewDeaths,
            NewRecovered,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered } = data;
        
        setInfo({ 
            NewConfirmed,
            NewDeaths,
            NewRecovered,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered });

    }, [ data ]);


    useEffect(() => {

        if (!selectedCountry) {
            return;
        }

        const { 
            NewConfirmed,
            NewDeaths,
            NewRecovered,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered } = selectedCountry;
        
        setInfo({ 
            NewConfirmed,
            NewDeaths,
            NewRecovered,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered });
       
    }, [selectedCountry]);


    return (
        <Container>
            <h2>{ selectedCountry 
                    ?  `${selectedCountry.Country} by total confirmed cases`
                    : `Global cases by total confirmed`
                }
            </h2>
            <div>
                { !info 
                    ?   <h1>Loading informations...</h1> 
                    :   Object.entries(info).map(entrie => (
                            <StatusItem 
                                title={entrie[0]}
                                value={entrie[1]}
                            />
                        ))
                }
            </div>
        </Container>
    );
}

export default StatusBar;
