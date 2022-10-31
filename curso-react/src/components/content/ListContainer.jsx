import React, {useState, useContext} from 'react';
import { CarritoContext } from '../../context/CarritoContext';

const ListContainer = ({producto}) => {
  const [cantidad, setCantidad] = useState(1)
  
  const {agregarProducto} = useContext (CarritoContext)

  const cantProducto = (operacion) => {
    if(operacion == "+") {
      if (cantidad < producto[1].stock) {
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
      <img src={producto[1].imagen} className="img-fluid rounded-start" alt={producto.nombre} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{producto[1].nombre}</h5>
        <p className="card-text">{producto[1].detalle}</p>
        <p className="card-text"> $ {producto[1].precio}</p>
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
