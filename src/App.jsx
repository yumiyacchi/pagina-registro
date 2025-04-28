import { Fragment } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import { BrowserRouter } from 'react-router-dom';
import PaginaBanking from './components/PaginaBanking';

function App() {

  return (

    <div>
      <Formulario/>
      <PaginaBanking/>
    </div>

  )
  
}





export default App
