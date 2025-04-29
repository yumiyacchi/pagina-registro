import React, { useState } from "react";
import "./Ecommerce.css";

const productos = [
    {
        id: 1,
        nombre: "Abrigo ecológico",
        categoria: "abrigos",
        precio: 120,
        imagen: "./src/assets/img/abrigos/02.jpg"
    },
    {
        id: 2,
        nombre: "Camiseta orgánica",
        categoria: "camisetas",
        precio: 35,
        imagen: "./src/assets/img/camisetas/01.jpg"
    },
    {
        id: 3,
        nombre: "Pantalón reciclado",
        categoria: "pantalones",
        precio: 60,
        imagen: "./src/assets/img/pantalones/01.jpg"
    },
    {
        id: 4,
        nombre: "Abrigo térmico",
        categoria: "abrigos",
        precio: 150,
        imagen: "./src/assets/img/abrigos/01.jpg"
    },
];

export default function Ecommerce() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [categoriaActiva, setCategoriaActiva] = useState("todos");
    const [carrito, setCarrito] = useState([]);

    const cambiarCategoria = (categoria) => {
        setCategoriaActiva(categoria);
    };

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const tituloCategoria = {
        todos: "Todos los productos",
        abrigos: "Abrigos",
        camisetas: "Camisetas",
        pantalones: "Pantalones"
    };

    const productosFiltrados =
        categoriaActiva === "todos"
            ? productos
            : productos.filter((prod) => prod.categoria === categoriaActiva);

    return (
        <div className={`wrapper ${menuAbierto ? "menu-abierto" : ""}`}>
            <header className="header-mobile">
                <h1 className="logo">EcoMarket</h1>
                <button className="open-menu" onClick={() => setMenuAbierto(true)}>
                    <i className="bi bi-list"></i>
                </button>
            </header>
            <aside>
                <button className="close-menu" onClick={() => setMenuAbierto(false)}>
                    <i className="bi bi-x"></i>
                </button>
                <header>
                    <h1 className="logo">EcoMarket</h1>
                </header>
                <nav>
                    <ul className="menu">
                        {["todos", "abrigos", "camisetas", "pantalones"].map((cat) => (
                            <li key={cat}>
                                <button
                                    id={cat}
                                    className={`boton-menu boton-categoria ${
                                        categoriaActiva === cat ? "active" : ""
                                    }`}
                                    onClick={() => cambiarCategoria(cat)}
                                >
                                    <i className="bi bi-hand-index-thumb"></i>{" "}
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </button>
                            </li>
                        ))}
                        <li>
                            <a className="boton-menu boton-carrito" href="#carrito">
                                <i className="bi bi-cart-fill"></i> Carrito{" "}
                                <span id="numerito" className="numerito">{carrito.length}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <footer>
                    <p className="texto-footer">© 2025 Team 7</p>
                </footer>
            </aside>
            <main>
                <h2 className="titulo-principal" id="titulo-principal">
                    {tituloCategoria[categoriaActiva]}
                </h2>
                <div className="contenedor-productos">
                    {productosFiltrados.map((producto) => (
                        <div className="producto" key={producto.id}>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <div className="producto-detalles">
                                <h3>{producto.nombre}</h3>
                                <p className="precio">${producto.precio}</p>
                                <button
                                    className="boton-agregar"
                                    onClick={() => agregarAlCarrito(producto)}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}