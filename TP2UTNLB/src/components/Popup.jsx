import React from "react";
import "./Popup.css";

function Popup({ mensaje, detalle, imagen, cerrarPopup }) {
  return (
    <div className="popup-overlay">
      <div className="popup-contenido">
        <img src={imagen} alt="Producto" className="popup-imagen" />
        <p>Felicidades! Acabas de comprar:</p>
        <p>{detalle}</p>
        <p>{mensaje}</p>
        <button className="boton-cerrar" onClick={cerrarPopup}>
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Popup;