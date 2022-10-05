import React from 'react';

const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"> <button className="btn btn-secondary my-2 my-sm-0" type="button"> <i className="fas fa-caret-square-down"></i> </button> </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Mascaras</a>
                  <a className="dropdown-item" href="#">Serums</a>
                  <a className="dropdown-item" href="#">Vitaminas</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Cremas y Geles</a>
                </div>
              </li>
        </>
    );
}

export default Dropdown;
