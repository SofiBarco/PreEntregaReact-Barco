import React, { useState, useEffect } from 'react';
import { consultarBDD } from '../../utils/functions';
import { Link } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD('./json/productos.json').then(productos => {
        const cardProducto = productos.map(producto =>
            <div className="card card_productos" key={producto.id} style={{ width: '18rem' }}>
                <img src={"./Img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.description}</p>
                </div>
                <h6>${producto.precio}</h6>
                <button className="btn btn-primary"><Link className='nav-link' to={"/ItemList/" + producto.id}>Ver Producto</Link></button>
            </div>)
            setProductos(cardProducto)
        })
        
    }, []);

return (
    <div className="row grid_area">
        {productos}
    </div>


);
}

export default ItemListContainer;
