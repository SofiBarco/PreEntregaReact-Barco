import React, { useContext, useEffect, useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom'


const Carrito = () => {
    const { carrito, agregarProducto, quitarProducto, vaciarCarrito, sumaTotalProductos } = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);

    useEffect(() => {
        const productoMostrar = carrito.map(producto =>
            <div className="card card_productos" key={producto.id} style={{ width: '18rem' }}>
                <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <h6>Precio: ${producto.precio}</h6>
                    <p className="card-text">Cantidad: {producto.cantidad}</p>
                </div>
                <h6>Precio Total: ${producto.precio * producto.cantidad}</h6>
                <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar Producto</button>

            </div>

        )


        setCarritoLocal(productoMostrar)



    }, [carrito]);

    if (carrito.length != 0) {
        return (
            <>
            <body className='Home'>
                <div className="row grid_area">
                    {carritoLocal}

                </div>
            </body>
                

            </>

        )
    } else {
        return (
            <>
                
                  <div className="card text-center">
                        <div className="card-body">
                        <h1 className="card-title">El carrito está vacío!</h1>
                        <p className="card-text">Si desea seguir viendo productos haga click en el siguiente botón</p>
                        <Link className="nav-link active" to='/'><button className='btn btn-primary'>Volver a Home</button></Link>
                    </div>
                </div>  
                
                
              
                
            </>
        )
    }




}

export default Carrito;
