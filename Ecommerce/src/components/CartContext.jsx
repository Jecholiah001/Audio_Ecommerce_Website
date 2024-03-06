/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);
  
    const addToCart = (product) => {
      const existingItemIndex = cart.findIndex(
        (cartItem) => cartItem.id === product.id
      );
  
      if (existingItemIndex !== -1) {
        // If item exists, update its quantity
        const updatedCart = cart.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + product.quantity }
            : cartItem
        );
  
        setCart(updatedCart);
      } else {
        // If item does not exist, add it to the cart with its given quantity
        setCart([...cart, { ...product }]);
      }
  
      setCount((prevCount) => prevCount + product.quantity);
    };
  
    const clearCart = () => {
      setCart([]);
      setCount(0);
    };
  
    const increaseQuantity = (productId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    };
  
    const decreaseQuantity = (productId) => {
      const updatedCart = cart.map((item) => {
        if (item.id === productId && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCart(updatedCart);
    };
  
    return (
      <CartContext.Provider
        value={{
          cart,
          count,
          addToCart,
          clearCart,
          increaseQuantity,
          decreaseQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    );
  };
  
