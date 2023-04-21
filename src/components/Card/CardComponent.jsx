import React from "react"
import { Link } from "react-router-dom"
import "./Card.css";
const CardComponent = ({ producto }) => {
  return (
    <div className="card">
      <Link to={`/Tienda/${producto.id}`} className="card-link">
        <img
          src={producto.imagen}
          alt={producto.titulo}
          className="card-img-top"
        />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{producto.titulo}</h5>
        <p className="card-text ">Precio: $<span className="precio">{producto.precio}</span></p>
        <Link to={`/Tienda/${producto.id}`}  className='details' >Detalle Producto</Link>
        <div className="d-flex justify-content-between align-items-center"></div>
      </div>
    </div>
  );
}
export default CardComponent