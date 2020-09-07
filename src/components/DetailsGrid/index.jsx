import React, { useState, useEffect } from 'react';
import { TiArrowUnsorted } from 'react-icons/ti';

import { useData } from '../../context/data';
import CountriesDetail from '../CountriesDetail';
import { sortRowsPerName } from '../../utils/utils';

import { Container } from './styles';


const DetailsGrid = () => {
  
    const [countriesData, setCountriesData] = useState([]);
    const [sortUp, setSortUp] = useState([]);

    const { data } = useData();
    

    useEffect(() => {
        data && setCountriesData(data.countries);
    }, [data]);


    const handleClick = (el) => {     
        const sortedCountries = sortRowsPerName(countriesData, el.target.id, sortUp);
        setSortUp(!sortUp);
        setCountriesData(sortedCountries);
    }

    return (
        <Container>
            <div>
                <table>
                    <thead>
                        <tr> 
                            <th id="Country" onClick={handleClick}>
                                <TiArrowUnsorted className="icon"/>
                                Country     
                            </th>
                            <th id="TotalConfirmed" onClick={handleClick}>
                                <TiArrowUnsorted className="icon"/>
                                Cases
                            </th>
                            <th id="TotalRecovered" onClick={handleClick}>
                                <TiArrowUnsorted className="icon"/>
                                Recovered
                            </th>
                            <th id="PercentRecovered" onClick={handleClick}>
                                <TiArrowUnsorted className="icon"/>
                                %
                            </th>
                            <th id="TotalDeaths" onClick={handleClick}>
                                <TiArrowUnsorted className="icon"/>
                                Deaths
                            </th>
                            <th id="PercentDeaths" onClick={handleClick}>
                                <TiArrowUnsorted className="icon"/>
                                %
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { !countriesData 
                            ?   <h1>Loading informations...</h1> 
                            :   (Object.values(countriesData).map(country => (
                                    <CountriesDetail {...country}/>
                                )))  
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
}

export default DetailsGrid;
