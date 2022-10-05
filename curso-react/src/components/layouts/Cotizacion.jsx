import React, {useState} from 'react';

const Cotizacion = () => {

        const [dolar, setDolar] = useState([]);

 const consultarAPI = () => {
    fetch('https://criptoya.com/api/dolar')
    .then(response => response.json())
    .then(({blue, ccb, ccl, mep}) => {
        setDolar(Object.entries({blue, ccb, ccl, mep}).map(moneda => <p>Tipo: {moneda[0]} - $ {moneda[1]} </p> ))
    })


 }
    
    consultarAPI()

    return (
        <>
           {dolar}
        </>
    );
}

export default Cotizacion;
