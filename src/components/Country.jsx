import React from 'react';

// import { Container } from './styles';

export default function Country(props) {

    const { title, total_cases, total_recovered, total_deaths,
            percent_recovered, percent_deaths } = props;

    return (
        <tr>
            <td>{title}</td>
            <td>{parseInt(total_cases).toLocaleString()}</td>
            <td className="td_recovered">{parseInt(total_recovered).toLocaleString()}</td>
            <td className="td_recovered">{percent_recovered.toFixed(2)}</td>
            <td className="td_death">{parseInt(total_deaths).toLocaleString()}</td>
            <td className="td_death">{percent_deaths.toFixed(2)}</td>
        </tr>
    );
}
