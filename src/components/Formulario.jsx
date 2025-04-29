import React from "react"
import './Formulario.css';
import { Link } from "react-router-dom";

export default function Formulario(){

    return (
      <>
      <div>
          <nav class="navbar">
            <ul class="nav-list">
              <li><a href="#">BancoSimple</a></li>
              <li><a href="#">EcoMarket</a></li>
              <li><a href="#">Ayuda y Soporte</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Acerca De</a></li>
              <li><a href="#">Login</a></li>
            </ul>
        </nav>
      </div>
      <div>
      <img className="imagenLogo" src=".\src\assets\img\logo_ecomarket_alt.png" alt="" />
      </div>
      <div>
      <h2>Regístrate en EcoMarket</h2>
      </div>
      <div className='formulario-principal'>
        
        <form action="">
          <label htmlFor="">Nombre </label>
          <br />
          <input type="text" name="" id="" placeholder='Ej: Juan' />
          <br />
          <label htmlFor="">Apellido </label>
          <br />
          <input type="text" name="" id="" placeholder='Ej: Pérez'/>
          <br />
          <label htmlFor="">RUT o Pasaporte </label>
          <br />
          <select name="rut-pasaporte" id="">
            <br />
            <option value="">RUT</option>
            <option value="">Pasaporte</option>
          </select>
          <br />
          <input className="rut-corto" type="text" name="" id="" maxLength="2" placeholder='Ej: 99' />
          <input type="text" name="" id="" maxLength="6" placeholder='Ej: 999999'/>
          <input className="rut-corto" type="text" name="" id="" maxLength="1" placeholder="Ej: K" />
        </form>
        <label htmlFor="">E-Mail</label>
        <br />
        <input type="email" placeholder='Ej: ejemplo@ejemplo.com' />
        <br />
        <label htmlFor="">Telefono</label>
        <br />
        <select name="" id="select-pais">
          <option value="arg">🇦🇷 Argentina (+54)</option>
          <option value="bol">🇧🇴 Bolivia (+591)</option>
          <option value="bra">🇧🇷 Brasil (+55)</option>
          <option value="chi">🇨🇱 Chile (+56)</option>
          <option value="col">🇨🇴 Colombia (+57)</option>
          <option value="ecu">🇪🇨 Ecuador(+593) </option>
          <option value="guy">🇬🇾 Guyana (+592)</option>
          <option value="par">🇵🇾 Paraguay (+595)</option>
          <option value="per">🇵🇪 Perú (+51)</option>
          <option value="sur">🇸🇷 Surinam (+597)</option>
          <option value="uru">🇺🇾 Uruguay (+598)</option>
          <option value="ven">🇻🇪 Venezuela (+58)</option>
        </select>
        <br />
        <label htmlFor=""></label>
        <input type="text" placeholder="Ej: 99999999" maxLength="9" />
        <br />
        <p className="existente">
          ¿Ya tienes una cuenta?{""}
          <Link to="/" className=""></Link>
        </p>
        <label htmlFor="">¿Quieres registrarte como vendedor?</label>
        <input type="checkbox" name="" id="" />
        <br />
        <label htmlFor="">¿Deseas recibir información sobre ofertas y otros beneficios?</label>
        <input type="checkbox" name="" id="" />
        <br />
        <label htmlFor="confirm">¿Aceptas los terminos y condiciones?</label>
        <input type="checkbox" name="" id="" />
        <br />
        <button className="boton-1" type="button">Si, quiero registrarme.</button>
        <p className="already">
          ¿Ya tienes una cuenta? {""}
          <Link to="/login" className=""> Inicia sesión aquí</Link>
        </p>
      </div>
      <footer>
        <ul>
          <li>Ecomarket y BancoSimple</li>
          <li>Todos los derechos reservados</li>
          <li>©Team 7, 2025</li>
        </ul>
      </footer>
     
    
      </>
  
  
    )
  
  }