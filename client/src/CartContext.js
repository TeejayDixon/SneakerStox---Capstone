import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-hot-toast'

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(0);

  let index;
  let foundProduct;
  

const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  }

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty - 1 < 1) return 1;
     
      return prevQty - 1;
    });
  }

  

  return (
    <CartContext.Provider
      value={{
        setCartItems,
        cartItems,
        totalPrice,
        totalQuantities,
        setTotalPrice,
        setTotalQuantities,
        setShowCart,
        showCart,
        qty,
        setQty,
        decQty,
        incQty
      }}>
      {children}
    </CartContext.Provider>
  )
}

 

const useCurrentCart = () => {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCurrentUser must be used within a UserProvider")
  }
  return context;
}

export default useCurrentCart;