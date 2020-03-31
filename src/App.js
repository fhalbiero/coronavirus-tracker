import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import MainPage from './components/MainPage';
import CountryInfo from './components/CountryInfo';
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>CORONAVIRUS TRACKER</h1>

          <Route exact path="/" component={MainPage} />       

          <Route exact path="/country" component={CountryInfo} />
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
