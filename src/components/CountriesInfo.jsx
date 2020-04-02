import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiArrowUnsorted } from 'react-icons/ti';

import Country from './Country';
import {sortRowsPerName} from '../utils/utils';


export default function CountriesInfo() {
  
    const [countries, setCountries] = useState([]);
    const [sortUp, setSortUp] = useState([]);

    useEffect(() => {

        axios.get('https://api.thevirustracker.com/free-api?countryTotals=ALL')
            .then(res => {

                const tempCountries = Object.values({...res.data.countryitems[0]}).map(country => {
                    
                    const { total_cases, total_deaths, total_recovered } = country;
                    let percent_recovered = ( total_recovered / total_cases ) * 100;
                    let percent_deaths = ( total_deaths / total_cases ) * 100;

                    percent_recovered = percent_recovered || 0;
                    percent_deaths = percent_deaths || 0;

                    return {
                        ...country, 
                        percent_deaths, 
                        percent_recovered
                    }
                 });

                setCountries(tempCountries);
            })
            .catch(err => console.log(err));

    }, []);

    const handleClick = (el) => {
        
        const sortedCountries = sortRowsPerName(countries, el.target.id, sortUp);
        setSortUp(!sortUp);
        setCountries(sortedCountries);
    }

    return (
        <div className="div-countries">
           <table>
            <tr>
                <th id="title" onClick={handleClick}>
                     <TiArrowUnsorted className="icon"/>
                     Country     
                </th>
                <th id="total_cases" onClick={handleClick}>
                    <TiArrowUnsorted className="icon"/>
                    Cases
                </th>
                <th id="total_recovered" onClick={handleClick}>
                    <TiArrowUnsorted className="icon"/>
                    Recovered
                </th>
                <th id="percent_recovered" onClick={handleClick}>
                    <TiArrowUnsorted className="icon"/>
                    %
                </th>
                <th id="total_deaths" onClick={handleClick}>
                    <TiArrowUnsorted className="icon"/>
                    Deaths
                </th>
                <th id="percent_deaths" onClick={handleClick}>
                    <TiArrowUnsorted className="icon"/>
                    %
                </th>
            </tr>
            <tbody>
                {
                    Object.values(countries).map(country => {
                        if (!country.ourid) {
                            return;
                        }
                        return <Country key={country.ourid} {...country}/>
                    })
                }
            </tbody>
            </table>
        </div>
    );
}
