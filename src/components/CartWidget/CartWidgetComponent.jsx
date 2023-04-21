import React, {useContext} from "react"
import { CartContext } from "../../context/CartContext"


export const CartWidget = () =>{
    const {itemCount} = useContext(CartContext);
return (
    <>
    <i className="bi bi-basket-fill"></i>
    <span>{itemCount.qtyItems}</span>
    </>
);

}

export default CartWidget;