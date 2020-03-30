import React, {useState, useEffect} from 'react';
import axios from   'axios';
import GlobalStatsItem from './GlobalStatsItem';

export default function GlobalStats() {

    const [stats, setStats] = useState([]);

    useEffect(() => {

        axios.get('https://thevirustracker.com/free-api?global=stats')
            .then( res => {
                const {total_cases, total_recovered, total_deaths, 
                       total_new_cases_today, total_new_deaths_today} = res.data.results[0]
                setStats({
                    cases: total_cases,
                    recovered: total_recovered,
                    deaths: total_deaths,
                    cases_today: total_new_cases_today,
                    deaths_today: total_new_deaths_today
                });
            })
            .catch(err => console.log(err));
    }, []);


  return (
    <div className="div-globalinfo-box">
        {
            (stats.cases === undefined) ?
            <h4>Loading informations...</h4> 
            :
            Object.entries(stats).map(entrie => (
                    <GlobalStatsItem 
                        title={entrie[0]}
                        value={entrie[1]}
                    />
            ))
            
        }
    </div>
  );
}
