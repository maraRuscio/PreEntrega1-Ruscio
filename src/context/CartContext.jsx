import React  from 'react'
import { createContext, useState } from 'react'

export const CartContext = createContext({});


export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState({ qtyItems:0 , products: [] });
console.log(itemCount);

  return (
    <CartContext.Provider
      value={{
        itemCount,
        setItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
