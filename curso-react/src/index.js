import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { CarritoProvider } from './context/CarritoContext';
import App from './components/App.jsx';
import './utils/functions'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoProvider>

    <App />
    
  </CarritoProvider>
    
  
);


