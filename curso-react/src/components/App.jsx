import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './content/Navbar';
import Form from './layouts/Form';
import '../Styles/App.css'
import ItemListContainer from './content/ItemListContainer';
import ItemList from './content/ItemList';
import Contacto from './content/Contacto';
import Nosotros from './content/Nosotros';
import Carrito from './content/Carrito';
import Footer from './content/Footer';
import Category from './content/Category';

const App = () => {
    return (
      <>      
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/Nosotros' element={<Nosotros/>} />
            <Route path='/Contacto' element={<Contacto/>} />
            <Route path='/ItemList/:id' element={<ItemList/>}/>
            <Route path='/Category/:category' element={<Category/>}/>
            <Route path='/Carrito' element={<Carrito/>} />
            <Route path= '*' element= {<h1>Error 404</h1>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
                

     </> 
    );      
}

export default App;

