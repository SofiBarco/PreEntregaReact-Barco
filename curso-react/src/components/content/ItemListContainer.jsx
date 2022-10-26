import React, { useState, useEffect, useContext } from 'react';
import { getProductos } from '../../utils/firebase';
import { Link } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos().then(productos => {
        const cardProducto = productos.map(producto =>
            <div className="card card_productos shadow-lg p-3 mb-5 bg-body rounded" key={producto[0]} style={{ width: '18rem' }}>
                <img src={producto[1].imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto[1].nombre}</h5>
                    <p className="card-text">{producto[1].detalle}</p>
                    <p className="card-text">Stock: {producto[1].stock}</p>
                </div>
                <h6>${producto[1].precio}</h6>
                <button className="btn btn-primary"><Link className='nav-link' to={"/ItemList/" + producto[0]}>Ver Producto</Link></button>
            </div>)
            setProductos(cardProducto)
        })
        
    }, []);
    
return (

    <body className='Home'>
      <div className="row grid_area">
        
        {productos}
        
    </div>  
    </body>
    


);
}

export default ItemListContainer;
