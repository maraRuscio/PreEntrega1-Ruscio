import React from "react";
import styles from "./CarritoDetail.css"

export const CarritoDetailComponent = ({ product, qty }) => {
  return (
    <div>
        <div className={styles.itemWrapper}>
          <div>
            <img src={product.imagen} alt={product.nombre} />
          </div>
          <div className={styles.productInfo}>
            <h2>{product.titulo}</h2>
            <p>{product.productId}</p>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
            <p>Cantidad: {qty}</p>
          </div>
        </div>
    </div>
  );
};
export default CarritoDetailComponent