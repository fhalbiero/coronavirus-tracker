import React from 'react';
import './App.css';

import GlobalStats from './components/GlobalStats';
import CountriesInfo from './components/CountriesInfo';
import WorldMap from './components/WorldMap';


function App() {
  return (
    <div className="App">
      <h1 className="emilly">CORONAVIRUS TRACKER</h1>
      <GlobalStats />
         <WorldMap />
      <CountriesInfo />
    </div>
  );
}

export default App;
