import React from "react";
import Form from "../layouts/Form";
import Secciones from "../layouts/Secciones";
import Dropdown from "../layouts/Dropdown";
import CardWidget from "./CardWidget";
import ItemListContainer from "./ListContainer";
import { Link } from "react-router-dom";

 

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">         
      
         
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
            <Secciones/>
            <Dropdown/> 
            
            </ul>            
          </div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to='/Carrito'><CardWidget/>         
                </Link>
            </li>
          
          </ul>
          
        </div>
      </nav>
    );
}

export default Navbar;