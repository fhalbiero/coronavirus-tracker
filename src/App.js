import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import GlobalStats from './components/GlobalStats';
import CountriesInfo from './components/CountriesInfo';
import CountryInfo from './components/CountryInfo';
import WorldMap from './components/WorldMap';
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>CORONAVIRUS TRACKER</h1>

        <Route exact path="/" component={GlobalStats} />
        
        <Route exact path="/" component={WorldMap} />
        
        <Route exact path="/" component={CountriesInfo} />

        <Route exact path="/country" component={CountryInfo} />
        
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
