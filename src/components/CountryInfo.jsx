import React from 'react'

export default function CountryInfo(props) {

    const { title, total_cases, total_recovered, total_deaths,
            total_new_cases_today, total_new_deaths_today,
            total_active_cases, total_serious_cases } = props;

    return (
        <div className="country-info-box">
            <h2>{title}</h2>
            <div className="country-info-box-inside">
                <div className="country-info-div">
                    <h3>{parseInt(total_cases).toLocaleString()}</h3>
                    <span>Total cases</span>
                </div> 
                <div className="country-info-div">
                    <h3>{parseInt(total_recovered).toLocaleString()}</h3>
                    <span>Total recovered</span>
                </div>
                <div className="country-info-div">
                    <h3>{parseInt(total_deaths).toLocaleString()}</h3>
                    <span>Total deaths</span>
                </div>
                <div className="country-info-div">
                    <h3>{parseInt(total_new_cases_today).toLocaleString()}</h3>
                    <span>New cases today</span>
                </div>
                <div className="country-info-div">
                    <h3>{parseInt(total_new_deaths_today).toLocaleString()}</h3>
                    <span>New deaths today</span>
                </div>
                <div className="country-info-div">
                    <h3>{parseInt(total_active_cases).toLocaleString()}</h3>
                    <span>Total active cases</span>
                </div>
                <div className="country-info-div">
                    <h3>{parseInt(total_serious_cases).toLocaleString()}</h3>
                    <span>Total serious cases</span>
                </div>
            </div>
           
        </div>
    )
    
}
