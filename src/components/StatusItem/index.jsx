import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container } from './styles';

const statusTitles = {
    NewConfirmed: 'New confirmed',
    NewDeaths: 'New deaths',
    NewRecovered: 'New recovered',
    TotalConfirmed: 'Total confirmed',
    TotalDeaths: 'Total deaths',
    TotalRecovered: 'Total recovered',
}

const StatusItem = ({ value, title }) => (  
    <Container>
        <div>
            <span>
                { statusTitles[title] }
            </span>
            <h4>{parseInt(value).toLocaleString()}</h4>
        </div>
    </Container> 
);

export default StatusItem;
