import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SvgLoader, SvgProxy } from 'react-svgmt';

//const svgUrl = "https://raw.githubusercontent.com/flekschas/simple-world-map/master/world-map.svg";
const svgFile = "/coronavirus-tracker/globalMap.svg";

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

        if (maxCountryCases === 0) return;

        if (total_cases < 10) {
            return "rgb( 255, 250, 245)";
        }

        if (total_cases < 1000) {
            return "rgb( 255, 200, 195)";
        }

        const percent = Math.trunc((total_cases * 100) / maxCountryCases);
        const diferenceReducer = (100 + (percent*2)) * ((100 - percent)/100);
        const aux = Math.trunc((245 * percent)/100 + diferenceReducer);

        return `rgb( 255, ${250 - aux}, ${245 - aux})`;
    }


  return (
      <div className="map-box">
        <SvgLoader path={svgFile} id="map">
            <SvgProxy 
                selector="path" 
                fill="#6f6f6f" 
                strokeWidth="1" 
                stroke="#222" 
            />
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
