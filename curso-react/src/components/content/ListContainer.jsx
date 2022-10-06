import React, {useState} from 'react';


const ListContainer = ({producto}) => {
  const [cantidad, setCantidad] = useState(1)
  const carrito = []
  
  const agregarCarrito = (prod, cant) => {
        let indice = carrito.findIndex(producto => producto.id == prod.id)

      
if(indice != -1) {
    carrito [indice].cantidad = cant
    
      } else {
        const prodCarrito = {id: prod.id, cantidad: cant}
        carrito.push (prodCarrito)
      }
      console.log(carrito)
  }  
  
  const cantProducto = (operacion) => {
    if(operacion == "+") {
      if (cantidad < producto.stock) {
        setCantidad (cantidad+1)
      }
    } else {
      if(cantidad == "-") {
        setCantidad (cantidad-1)
      }
      
    }
  }
  return (
        <>
        
  <div className="row g-0 card_productos">
    <div className="col-md-4">
      <img src={`../Img/${producto.img}`} className="img-fluid rounded-start" alt={producto.nombre} />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text">{producto.description}</p>
        <p className="card-text"> $ {producto.precio}</p>
        <p className='card-text'>{cantidad}</p>
        <button className="btn btn-primary" onClick={()=> cantProducto("+")}>+</button>
        <button className="btn btn-primary" onClick={()=> cantProducto("-")}>-</button>
        <button className="btn btn-primary" onClick={()=> agregarCarrito (producto, cantidad)}>Comprar</button>
      </div>
    </div>
  </div>

        </>
    );
}

export default ListContainer;
