import React from 'react'
import { useContext } from 'react'
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const CarritButtonComponent = () => {
  
  const [state, setState] = React.useState(0)
  const productId = useParams()
  const { itemCount, setItemCount } = useContext(CartContext);

  const handleMoreClick = () => {
    if (state === 100) return;
    setState(state + 1);
  };
  const handleLessClick = () => {
    if (state === 0) return;
    setState(state - 1);
  };
  const addToCart = () => {

    const miProducto = itemCount.products.find(
      (p) => p.productId.id === productId.id)
      if (miProducto) {
        miProducto.qty += state;
      } else {
      const newProduct = {
        productId,
        qty: state,
      }

      setItemCount((prevState) => ({
        qtyItems: prevState.qtyItems +(state/state),
        products: [...prevState.products, newProduct],
      }
      ));
    }
  };
  

  return (
    <div className="d-flex align-items-center">
      <div className="d-flex w-25">
        
        <input
          type="text"
          className="form-control form-control-sm text-center rounded-0"
          value={state}
          placeholder="Cantidad custom"
          id="valueInput"
          readOnly
        />
        <Button
          onClick={handleLessClick}
          variant="outline-secondary"
          className="rounded-0"
        >
          -
        </Button>
        <Button
          onClick={handleMoreClick}
          variant="outline-secondary"
          className="rounded-0"
        >
          +
        </Button>
      </div>
      <Button className="ml-2" variant="primary" onClick={addToCart}>
        Agregar al Carrito
      </Button>
    </div>
  );
};
