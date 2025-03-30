import React, { useState } from "react";
import Popup from "./Popup";
import "./ProductoDetail.css";

function DetalleProducto({ nombre, imagen, precioReal, precioFinal, descuento, stock }) {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const manejarCompra = () => {
    setMostrarPopup(true);
  };

  const cerrarPopup = () => {
    setMostrarPopup(false);
  };

  const calcularColorDescuento = (descuento) => {
    const intensidad = Math.min(255, Math.floor((descuento / 100) * 255));
    return `rgb(255, ${255 - intensidad}, ${255 - intensidad})`;
  };

  return (
    <div className="tarjeta-producto">
      <img src={imagen} alt={nombre} className="imagen-producto" />
      <h2 className="nombre-producto">{nombre}</h2>
      <div className="precio-descuento">
        <p className="precio-real">${precioReal}</p>
        <p
          className="descuento"
          style={{ backgroundColor: calcularColorDescuento(descuento) }}
        >
          {descuento}% OFF
        </p>
      </div>
      <p className="precio-final">${precioFinal}</p>
      <p className="stock">Stock disponible: {stock}</p>
      <button className="boton-comprar" onClick={manejarCompra}>
        Comprar
      </button>
      {mostrarPopup && (
        <Popup
          mensaje={`¡Gracias por su compra!`}
          detalle={`${nombre}\n, a un precio final: $${precioFinal}`}
          imagen={imagen} // Pasamos la imagen al Popup
          cerrarPopup={cerrarPopup}
        />
      )}
    </div>
  );
}

export default DetalleProducto;