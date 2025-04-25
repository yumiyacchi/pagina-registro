import React from "react";

//Los props se pueden desestructurar para recibirlos por
//separado y contar con mayor legibilidad
function tarjetaPresentacion({avatar, nombre, email}){
    return (
        <>
        <div className="tarjeta">
            <img src={avatar} alt={nombre} width="100"/>
            <h2>{nombre}</h2>
            <p>{email}</p>
        </div>
        </>
    )
}

export default tarjetaPresentacion