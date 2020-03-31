import React, { createContext } from 'react'

const dataContext = createContext({});

export default function dataContext() {
    return (
        <div>
            
        </div>
    )
}
/*
//dividir pelo maximo vai me dar a porcentagem exata até 100
max = 200.000
ex: (100.000 * 100) / 200.000 = 50% 255 = 125
ex: (10.000 * 100) / 2000.000 = 5% 255 = 12
ex: (1.000 * 100) / 2000.000 = 0,5% 255 = 1


a diferença do meu vl pro maximo


1 caso = 0,001

10 casos = 0,01

100 casos = 0,1

1000 casos = 1

10.000 casos = 10 

100.000 casos = 100

cons a  = 255 / 100
*/