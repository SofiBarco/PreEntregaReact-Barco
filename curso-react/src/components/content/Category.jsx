import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../utils/functions';
const Category = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()
    useEffect(() => {
        consultarBDD('../json/productos.json').then(productos => {
            const itemCategory = productos.filter(producto => producto.category == (category) )
            console.log(itemCategory)
            const cardProducto = itemCategory.map(producto =>
                <div className="card card_productos" key={producto.id} style={{ width: '18rem' }}>
                    <img src={"../Img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">{producto.description}</p>
                    </div>
                    <h6>${producto.precio}</h6>
                    <button className="btn btn-primary"><Link className='nav-link' to={"/ItemList/" + producto.Category}>Ver Producto</Link></button>
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
