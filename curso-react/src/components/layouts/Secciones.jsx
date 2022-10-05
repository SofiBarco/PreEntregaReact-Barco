import {Link} from 'react-router-dom'

const Secciones = () => {
    return (
        <>
             <li className="nav-item">
                <Link className="nav-link active" to='/'><button className="btn btn-secondary my-2 my-sm-0" type="button"><i className="fas fa-clinic-medical"></i> Farmacia La Guardia </button>           
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to='/Nosotros'> <button className="btn btn-secondary my-2 my-sm-0" type="button"><i className="fas fa-user-nurse"></i> Nosotros </button>           
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" to='/Contacto'> <button className="btn btn-secondary my-2 my-sm-0" type="button"><i className="fas fa-envelope-square"></i> Contacto </button>           
                </Link>
              </li>
      
        </>
    );
}
export default Secciones;
