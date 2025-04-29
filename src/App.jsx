import { Fragment } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Ecommerce from './components/Ecommerce';


function App() {

  return (

      <Routes>
        <Route path="/registro" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        
    
      </Routes>

    
  );
  
}

export default App
