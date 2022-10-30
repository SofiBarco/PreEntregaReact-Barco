import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductos } from '../../utils/firebase';
const Category = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    useEffect(() => {
        getProductos().then(productos => {
            const itemCategory = productos.filter(producto => producto[1].categoria == (category) )
            console.log(itemCategory)
            const cardProducto = itemCategory.map(producto =>
                <div className="card card_productos" key={producto[0]} style={{ width: '18rem' }}>
                    <img src={producto[1].imagen} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{producto[1].nombre}</h5>
                        <p className="card-text">{producto[1].detalle}</p>
                    </div>
                    <h6>${producto[1].precio}</h6>
                    <button className="btn btn-primary"><Link className='nav-link' to={"/ItemList/" + producto[0]}>Ver Producto</Link></button>
                </div>)
            setProductos(cardProducto)
        })

    }, [category]);
    return (
        <>
            <div className="row grid_area">
                {productos}
            </div>
        </>
    );
}

export default Category;
