import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SvgLoader, SvgProxy } from 'react-svgmt';

//const svgUrl = "https://raw.githubusercontent.com/flekschas/simple-world-map/master/world-map.svg";
const svgFile = "/globalMap.svg";

export default function WorldMap() {

    const [countries, setCountries] = useState([]);
    const [maxCountryCases, setMaxCountryCases] = useState(0);

    useEffect(() => {

        axios.get('https://thevirustracker.com/free-api?countryTotals=ALL')
            .then(res => {
                let _maxCountryCases = 0;

                const tempCountries = Object.values({...res.data.countryitems[0]}).map(country => {
                    
                    if (_maxCountryCases < country.total_cases) {
                        _maxCountryCases = country.total_cases;
                    }
                    
                    return {
                        ...country
                    }
                 });

                setCountries(tempCountries);
                setMaxCountryCases(_maxCountryCases);
            })
            .catch(err => console.log(err));

    }, []);


    const handleClick = (country) => {

        return <Link to="/country" />
    }


    const calcRGBColor = (total_cases) => {

        if (total_cases < 100) {
            return "rgb( 180, 180, 180)";
        }

        const redDif = 255 - Math.trunc(maxCountryCases / 1000);
        const totalCases = total_cases / 1000;

        let aux = 0;

        aux = totalCases + redDif; 
        const addVl = (((255 - totalCases)*(totalCases*3))/100); 

        //redux the color diference between country
        aux = aux + addVl;

        aux = Math.trunc(aux);

        if (aux > 255) {
            aux = 255;
        }

        return `rgb( 138, ${195 - aux}, ${180 - aux})`;
    }


  return (
      <div className="map-box">
        <SvgLoader path={svgFile} >
            <SvgProxy selector="path" fill="#6f6f6f"/>
            {
                Object.values(countries).map(country => {

                    if (!country.ourid) return;
          
                    const rgbColor = calcRGBColor(country.total_cases);

                    return (<SvgProxy
                                key={country.ourid}
                                className="svg-map"
                                id={country.code}
                                selector={`#${country.code}`} 
                                fill={rgbColor}
                                onClick={() => handleClick(country)}
                            />)
                })
            }
            
        </SvgLoader> 
      </div>
   
  );
}
