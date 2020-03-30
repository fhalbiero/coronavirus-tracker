import React from 'react';

// import { Container } from './styles';

export default function Country(props) {

    const { title, total_cases, total_recovered, total_deaths,
            percent_recovered, percent_deaths } = props;

    return (
        <tr>
            <td>{title}</td>
            <td>{parseInt(total_cases).toLocaleString()}</td>
            <td>{parseInt(total_recovered).toLocaleString()}</td>
            <td>{percent_recovered.toFixed(2)}</td>
            <td>{parseInt(total_deaths).toLocaleString()}</td>
            <td>{percent_deaths.toFixed(2)}</td>
        </tr>
    );
}
