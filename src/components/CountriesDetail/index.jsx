import React from 'react';

import { Container } from './styles';

const CountryDetail = ({
        CountryCode,
        Country, 
        TotalConfirmed,
        TotalDeaths,
        TotalRecovered,
        NewConfirmed,
        NewDeaths,
        NewRecovered, 
        PercentRecovered, 
        PercentDeaths
    }) => (
    <Container key={CountryCode}>
        <td>{Country}</td>
        <td className="value">{parseInt(TotalConfirmed).toLocaleString()}</td>
        <td className="value green">{parseInt(TotalRecovered).toLocaleString()}</td>
        <td className="value green">{PercentRecovered.toFixed(2)}</td>
        <td className="value red">{parseInt(TotalDeaths).toLocaleString()}</td>
        <td className="value red">{PercentDeaths.toFixed(2)}</td>
    </Container>
);

export default CountryDetail;