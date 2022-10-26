import React, { useState, useEffect } from 'react';
import ListContainer from './ListContainer';
import { getProducto } from '../../utils/firebase';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        getProducto(id).then(prod => {
            setProducto(prod)
        })
               
        
            


    }, [])

    if (producto.length != 0 ) {
        return (
        
           <div className="card mb-3" style={{ maxWidth: '540px' }}>
                
                <ListContainer producto={producto}/>
                
            </div>
        
    );
    }

    
}

export default ItemList;
