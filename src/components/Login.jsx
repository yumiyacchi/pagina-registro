import React from "react";
import "./Login.css";


export default function Login(){

    return (

        <>
        <div className="titulo-login">
            <h2>Bienvenido a BancoSimple y EcoMarket</h2>
        </div>
        <div className="login-imagen">
            <img className="imagen-em" src=".\src\assets\img\logo_ecomarket_alt.png" alt="" />
            <img className="imagen-bs" src=".\src\assets\img\logo_bancosimple_alt.png" alt="" />
        </div>
        <div className="login-form">
            <form action="">
                <label htmlFor="">E-Mail</label>
                <br />
                <input type="email"  pa/>
                <br />
                <label htmlFor="">Contraseña</label>
                <br />
                <input type="text" />
                <br />
                <button className="login-button">Entrar</button>
            </form>
        </div>
        </>
    )
};