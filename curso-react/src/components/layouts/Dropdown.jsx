import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Category from '../content/Category';

const Dropdown = ({lista}) => {
    const [list, setList] = useState ([])
        useEffect(() => {
      const listaDrop = lista.map((categoria, indice) =>
      
      <Link key={indice} className='dropdown-item' to={`/Category/${indice+1}`}>{Category}</Link>
     )
      setList(listaDrop)
    
    }, []);
   



    return (
        <>
           <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> <button className="btn btn-secondary my-2 my-sm-0" type="button"> <i className="fas fa-caret-square-down"></i> </button> </a>
                <div className="dropdown-menu">                                           
                  
                  <Link className="dropdown-item" to={`/Category/Mascaras`}>Mascaras</Link>
                  <Link className="dropdown-item" to={`/Category/Serums`}>Serums</Link>
                  <Link className="dropdown-item" to={`/Category/Vitaminas`}>Vitaminas</Link>
                  <Link className="dropdown-item" to={`/Category/Cremas_y_Geles`}>Cremas_y_Geles</Link>
                  
                </div>
              </li>
        </>
    );

      }
export default Dropdown;
