import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SvgLoader, SvgProxy } from 'react-svgmt';

const svgUrl = "https://raw.githubusercontent.com/flekschas/simple-world-map/master/world-map.svg";


export default function WorldMap() {

    const [countries, setCountries] = useState([]);
    const [max, setMax] = useState(0);

    useEffect(() => {

        axios.get('https://thevirustracker.com/free-api?countryTotals=ALL')
            .then(res => {

                let _max = 0;

                const tempCountries = Object.values({...res.data.countryitems[0]}).map(country => {
                    
                    if (_max < country.total_cases) {
                        _max = country.total_cases;
                    }
                    
                    return {
                        ...country
                    }
                 });

                setCountries(tempCountries);
                setMax(_max);
            })
            .catch(err => console.log(err));

    }, []);

    const handleClick = ({title, total_cases}) => {
        alert( title + '   ' + total_cases);
    }


  return (
      <div className="map-box">
        <SvgLoader path={svgUrl} >
            <SvgProxy 
                selector="path" 
            />

            {
                Object.values(countries).map(country => {

                    if (!country.ourid) {
                        return;
                    }

                    const redDif = 255 - Math.trunc(max / 1000);
                    const vlAux = Math.trunc(country.total_cases / 1000);

               
                    let vl = vlAux + redDif;

                    vl = vl + ((255 - vl)/100);

                    if (vl < 10) {
                        vl = vl + 20;
                    } else if (vl < 100) {
                        vl = vl + 80;
                    } else if (vl < 150) {
                        vl = vl + 80;
                    }

                    if (vl > 255) {
                        vl = 255;
                    } 

                   


                    const r = vl;
                    const g = 255 - vl;
                    const b = 155 - vl;

                    console.log(country.code, country.total_cases, r, g, b)

                    const color = `rgb(${r}, ${g}, ${b})`;

                    return (<SvgProxy 
                                className="svg-map"
                                id={country.code}
                                selector={`#${country.code.toLowerCase()}`} 
                                fill={color}
                                onClick={() => handleClick(country)}
                            />)
                })
            }
            
        </SvgLoader> 
      </div>
   
  );
}
