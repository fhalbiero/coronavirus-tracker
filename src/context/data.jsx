import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

import api from '../services/api';

const DataContext = createContext({});

const DataProvider = ({children}) => {
    
    const [ data, setData ] = useState(null);
    const [ selectedCountry, setSelectedCountry ] = useState(null);

    const handleData = useEffect(() => {
        api.get('summary')
            .then( response => {
                const { 
                    NewConfirmed,
                    NewDeaths,
                    NewRecovered,
                    TotalConfirmed,
                    TotalDeaths,
                    TotalRecovered } = response.data.Global;

                const countries = Object.values({...response.data.Countries});

                let maxCases = 0;
                for (const findCountry of countries) {
                    if (findCountry.TotalConfirmed > maxCases) {
                        maxCases = findCountry.TotalConfirmed;
                    }
                    findCountry.PercentRecovered = ( findCountry.TotalRecovered / findCountry.TotalConfirmed ) * 100;
                    findCountry.PercentDeaths = ( findCountry.TotalDeaths / findCountry.TotalConfirmed ) * 100;
                }

                setData({
                    TotalConfirmed,
                    TotalDeaths,
                    TotalRecovered,
                    NewConfirmed,
                    NewDeaths,
                    NewRecovered, 
                    maxCases,
                    countries  
                });
            })
            .catch(err => console.log(err));
    }, [data]);


    const handleSelectCountry = useCallback((country) => {
        setSelectedCountry(country);
    }, [setSelectedCountry]);


    return (
        <DataContext.Provider value={{ data, handleData, selectedCountry, handleSelectCountry }}>
            {children}
        </DataContext.Provider>
    )
}


const useData = () => {
    const context = useContext(DataContext);

    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }

    return context;
}


export { DataProvider, useData }

