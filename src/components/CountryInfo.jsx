import React from 'react'

export default function CountryInfo(props) {

    console.log(props);

    const { title, total_cases, total_recovered, total_deaths,
        percent_recovered, percent_deaths } = props;

    return (
        <div className="country-info-box">
            <h2>title</h2>
            <div className="country-info-div">
                <h3></h3>
                <span></span>
            </div> 
            <div className="country-info-div">
                <h3></h3>
                <span></span>
            </div>
            <div className="country-info-div">
                <h3></h3>
                <span></span>
            </div>
            <div className="country-info-div">
                <h3></h3>
                <span></span>
            </div>
            <div className="country-info-div">
                <h3></h3>
                <span></span>
            </div>
            <div className="country-info-div">
                <h3></h3>
                <span></span>
            </div>
        </div>
    )
}
