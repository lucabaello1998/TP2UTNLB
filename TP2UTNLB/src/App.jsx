import React from "react";
import DetalleProducto from "./components/ProductDetail";
import "./App.css";

const productos = [
  {
    nombre: "Moto Razr",
    imagen: "./assets/motoRazr.webp",
    precioReal: 419999,
    descuento: 20,
    stock: 10,
  },
  {
    nombre: "Redmi Note 13 Pro",
    imagen: "./assets/redminote13pro.webp",
    precioReal: 299999,
    descuento: 60,
    stock: 15,
  },
  {
    nombre: "Redmi Note 14 Pro+",
    imagen: "./assets/RedmiNote14pro+.webp",
    precioReal: 349999,
    descuento: 40,
    stock: 8,
  },
  {
    nombre: "Tecno Pova 6",
    imagen: "./assets/tecnopova6.webp",
    precioReal: 199999,
    descuento: 80,
    stock: 20,
  },
];

function App() {
  return (
    <div className="app">
      <h1>Catálogo de Productos</h1>
      <div className="lista-productos">
        {productos.map((producto, index) => (
          <DetalleProducto
            key={index}
            nombre={producto.nombre}
            imagen={producto.imagen}
            precioReal={producto.precioReal}
            precioFinal={Math.round(producto.precioReal - (producto.precioReal * producto.descuento) / 100)}
            descuento={producto.descuento}
            stock={producto.stock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;