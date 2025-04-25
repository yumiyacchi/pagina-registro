/*Para crear un nuevo componente, importanos react */ 

import React from "react";

//Props es un objeto que permite a los componentes 
//recibir información
export default function SaludoPersonalizado(props) {
    return(
        <>
        <div>
            <h1>Hola, {props.nombre}</h1>
            <p>Tienes{props.edad} años.</p>
        </div>
        </>
    )
}

