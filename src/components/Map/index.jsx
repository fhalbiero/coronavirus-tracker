import React, { useState } from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import { useData } from '../../context/data';
import StatusBar from '../StatusBar';
import { Container } from './styles';

//const svgUrl = "https://raw.githubusercontent.com/flekschas/simple-world-map/master/world-map.svg";
const svgFile = 'coronavirus-tracker/world.svg';//"/coronavirus-tracker/globalMap.svg";



const Map = () => {

    const { data, handleSelectCountry } = useData();


    const handleClick = (country) => {
        handleSelectCountry(country);
    }


    const calculatedColor = (TotalConfirmed) => {
        if (TotalConfirmed === 0) {
            return `fill: rgba( 253, 203, 223, 1); fill-rule:evenodd`;
        }

        const baseGreen = 203;
        const percentCases = (TotalConfirmed / data.maxCases).toFixed(2);

        const colorLevel = Math.trunc(baseGreen * percentCases);

        const green = baseGreen - colorLevel + 17;

        return `fill: rgba( 253, ${green}, 203, 1); fill-rule:evenodd`;
    }

    return (
      <Container>
        <SvgLoader path={svgFile}>
            <SvgProxy 
                selector="path" 
                strokeWidth="1" 
                stroke="#222" 
            />
            {
                data && Object.values(data.countries).map(country => {
                    if (!country.CountryCode) return;
          
                    const rgbColor = calculatedColor(country.TotalConfirmed);

                    return <SvgProxy
                        key={country.CountryCode}
                        id={country.CountryCode}
                        selector={`#${country.CountryCode}`} 
                        fill="#fff"
                        style={rgbColor}
                        onClick={() => handleClick(country)}
                    />
                })
            }
            
            </SvgLoader> 
        </Container>   
  );
}

export default Map;
