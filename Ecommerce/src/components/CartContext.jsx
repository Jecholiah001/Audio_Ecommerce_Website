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

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const clearCart = () => {
        setCart([]);
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
        <CartContext.Provider value={{ cart, addToCart, clearCart, increaseQuantity, decreaseQuantity }}>
        {children}
        </CartContext.Provider>
    );
};


