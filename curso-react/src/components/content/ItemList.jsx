import React, { useState, useEffect } from 'react';
import ListContainer from './ListContainer';
import { useParams } from 'react-router-dom';

const ItemList = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams()
    useEffect(() => {
        fetch('../json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const producto1 = productos.find(productoArray => productoArray.id == id)
                setProducto(producto1)
            })


    }, [])

    return (
        
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <ListContainer producto={producto}/>
            </div>
        
    );
}

export default ItemList;
