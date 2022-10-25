import React, {useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const ListContainer = ({producto}) => {
  const [cantidad, setCantidad] = useState(1)
  
  const {carrito, agregarProducto, quitarProducto} = useContext (CarritoContext)

  const cantProducto = (operacion) => {
    if(operacion == "+") {
      if (cantidad < producto.stock) {
        setCantidad (cantidad + 1)
      }
    } else {
      if(cantidad > 1) {
        setCantidad (cantidad - 1)
      }
      
    }
  }
  return (
        <>
        
  <div className="row g-0 card_productos">
    <div className="col-md-4">
      <img src={`${producto.img}`} className="img-fluid rounded-start" alt={producto.nombre} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.description}</p>
        <p className="card-text"> $ {producto.precio}</p>
        <p className='card-text'>{cantidad}</p>
        <button className="btn btn-primary" onClick={()=> cantProducto("-")}>-</button>
        <button className="btn btn-primary" onClick={()=> cantProducto("+")}>+</button>
        <button className="btn btn-primary" onClick={()=> agregarProducto (producto, cantidad)}>Comprar</button>
      </div>
    </div>
  </div>

        </>
    );
}

export default ListContainer;
