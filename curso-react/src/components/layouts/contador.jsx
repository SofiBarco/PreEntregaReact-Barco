import React, {useState} from 'react';

const Contador = () => {
   const [contador, setContador] = useState(0);
   function modificarContador(operacion) {
    if (operacion == '+') {
        setContador(contador+1)
    } else  {
        if (contador > 0) {
            setContador(contador-1)   
        }
        
    }
    
   } 
   return (
        
        <>
        <button onClick={()=> modificarContador('+')} className='btn btn-dark'>Sumar</button>        
        <h1>{contador}</h1> 
        <button onClick={()=> modificarContador('-')} className='btn btn-light'>Restar</button>
        
        
        </>
    );
}

export default Contador;
