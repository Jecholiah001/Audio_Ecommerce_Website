/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'


function Cart({toggleCart}) {
    const { cart, clearCart, increaseQuantity, decreaseQuantity} = useCart();

const calculateTotal = (cart) => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

    const cartItems = cart.filter(product => product.quantity > 0);

    return (
        <>
        <div className='fixed inset-0 bg-black opacity-50 z-10' onClick={toggleCart}></div>
        <div className="font-custom fixed top-28 xl:right-36 lg:right-12 right-9 h-100% xl:w-[25%]  lg:w-[35%] md:w-[48%] w-[84%] z-10 text-black bg-white p-6 flex flex-col space-y-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
        <div className="flex justify-between items-center">
            <h2 className="md:text-[18px] text-[14px] font-[700] leading-[25px] tracking-[1.3px]">CART({totalQuantity})</h2>
            <button onClick={clearCart} className="md:text-[15px] text-[12px] font-[400]  leading-[25px] opacity-[70%] underline  hover:text-deepOrange">
            Remove All
            </button>
        </div>
        {cartItems.map((product, index) => (
            <div key={`${product.id}-${index}`} className="flex justify-between items-center">
            <div className="flex items-center py-2">
                <img
                src={product?.image.desktop} className='rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:w-20 w-14' alt={product?.name}
                />
                <div className="ml-2">
                <p className="md:text-[15px] text-[12px] font-[700] leading-[25px]">{product?.slug}</p>
                <p className="md:text-[14px] text-[11px] font-[700] leading-[25px]  opacity-[50%]">${product?.price}</p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <div className='flex gap-6 bg-deepGrey md:w-[120px] w-[70px] h-[41px] md:px-6 px-2'>
                {/* <button onClick={() => decreaseQuantity(product?.quantity)} className='md:text-[16px] text-[13px] font-[700] leading-[18px] tracking-[1px] opacity-[30%]'>-</button>
                <span className='md:text-[16px] text-[10px] font-[700]  leading-[18px] tracking-[1px] my-3 md:-mx-0 -mx-2'>{product?.quantity} </span>
                <button onClick={() => increaseQuantity(product?.quantity)} className='md:text-[16px] text-[13px]font-[700] leading-[18px] tracking-[1px] opacity-[30%]'>+</button> */}
                <button onClick={() => decreaseQuantity(product.id)} className='md:text-[16px] text-[13px] font-[700] leading-[18px] tracking-[1px] opacity-[30%]'>-</button>
                <span className='md:text-[16px] text-[10px] font-[700]  leading-[18px] tracking-[1px] my-3 md:-mx-0 -mx-2'>{product.quantity} </span>
                <button onClick={() => increaseQuantity(product.id)} className='md:text-[16px] text-[13px]font-[700] leading-[18px] tracking-[1px] opacity-[30%]'>+</button>
                </div>
            </div>
            </div>
        ))}
        <div className="flex justify-between py-3">
            <p className='md:text-[15px] text-[13px] font-[400] leading-[25px] '>TOTAL</p>
            <p className='md:text-[18px] text-[15px] font-[700] leading-[25px] text-center'>${calculateTotal(cart)}</p>
        </div>
        <Link to="/checkout">
            <button className=' w-full bg-deepOrange hover:bg-lightOrange text-white md:text-[13px] text-[10px] leading-[17px] tracking-[1px] py-3 px-7 '>CHECKOUT</button>
        </Link>
        </div>
    </>
    );
}

export default Cart;



