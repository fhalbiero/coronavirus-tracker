import React from 'react';
import { Link } from 'react-router-dom';

import Virus from '../../assets/virus.svg';

import { Container } from './styles';

const Header = () => (
        <Container>
            <main>
                <img src={Virus} alt="Covid-19" />
                <h1>COVID-19 Tracker</h1>
            </main>
            <div>
                <Link to="/">Home</Link>
                <Link to="/details" >Details</Link>
                <Link to="/about" >About</Link>
            </div>
        </Container>
);


export default Header;
