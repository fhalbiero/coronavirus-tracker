import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { DataProvider } from './context/data';
import Header from './components/Header';
import MainPage from './components/MainPage';
import StatusBar from './components/StatusBar';
import DetailsGrid from './components/DetailsGrid';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

const App = () => (
  <>
    <BrowserRouter>
      <DataProvider>
        <Header />
            <Route exact path="/coronavirus-tracker" component={MainPage} />        
            <Route exact path="/" component={MainPage} />       
            <Route exact path="/country" component={StatusBar} />
            <Route exact path="/details" component={DetailsGrid} /> 
        <Footer />
      </DataProvider>
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
