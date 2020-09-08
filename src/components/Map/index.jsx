import React, { useEffect, useState } from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';

import { useData } from '../../context/data';
import { Container } from './styles';


import SVGMap from '../../assets/world.svg';


const Map = () => {

    const { data, handleSelectCountry } = useData();
    const [ quantityRange, setQuantityRange ] = useState([]);


    useEffect(() => {
        if (!data) {
            return;
        }

        const { maxCases } = data;
        const casesRange = [];
        casesRange.push(maxCases);
        for (let i = 0; i <= 100; i = i + 16) {
            const percentToSubtract = Math.trunc((i * maxCases)/100); 
            const numberOfCases = maxCases - percentToSubtract;
            casesRange.push(numberOfCases);
        }
        casesRange.push(0);

        setQuantityRange(casesRange);
    }, [data]);


    const handleClick = (country) => {
        handleSelectCountry(country);
    }


    const calculatedColor = (TotalConfirmed) => {

        const colorRange = quantityRange.findIndex( amount => TotalConfirmed >= amount );

        const baseGreen = 0;
        const baseBlue = 60;

        const colorLevel = Math.trunc(colorRange * 16);

        const green = baseGreen + colorLevel;
        const blue  = baseBlue + colorLevel;

        return `fill: rgba( 255, ${green}, ${blue}, 0.8); fill-rule:evenodd`;
    }

    return (
      <Container>
        <SvgLoader path={SVGMap}>
            <SvgProxy 
                selector="path" 
                strokeWidth="1" 
                stroke="#222" 
            />
            {
                quantityRange.length && Object.values(data.countries).map(country => {
                    if (!country.CountryCode) return;
          
                    const rgbColor = calculatedColor(country.TotalConfirmed);

                    return <SvgProxy
                        key={country.CountryCode}
                        id={country.CountryCode}
                        selector={`#${country.CountryCode}`} 
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
