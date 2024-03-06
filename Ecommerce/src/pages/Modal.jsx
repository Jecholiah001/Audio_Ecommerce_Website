/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext'

const Modal = () => {
  const { cart } = useCart();
  const firstCartItem = cart[0];
  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-white max-w-[327px] md:max-w-[540px] mx-auto px-8 py-8 rounded-lg'>
        <img
          className='pt-8 mb-6'
          src='/assets/checkout/icon-order-confirmation.svg'
          alt='checkmark'
        />
        <h3 className='text-2xl uppercase font-bold mb-4'>
          Thank you for your order
        </h3>
        <p className='text-base text-gray-500 mb-6'>
          You will receive an email confirmation shortly.
        </p>
        <div>
          <div className='bg-gray-200 rounded-t p-6 rounded-b'>
            <div className='flex justify-between items-center pb-3 border-b border-gray-300 mb-3'>
              <div className='flex gap-4 items-center'>
                <img
                  className='w-12 h-12 object-cover rounded'
                  src={firstCartItem?.image.desktop}
                />
                <div className='flex flex-col'>
                  <p className='text-sm'>
                    {firstCartItem?.name
                      .replace(/(headphones|speaker|earphones)/i, '')
                      .replace(/(mark)/i, 'MK')
                      .replace(/(wireless)/i, '')
                      .trim()}
                  </p>
                  <p className='text-sm text-gray-500'>
                    $ {firstCartItem?.price}
                  </p>
                </div>
              </div>
              <p className='font-bold text-gray-500'>x {firstCartItem?.quantity}</p>
            </div>
            {cart.length > 1 && (
              <div className='text-center'>
                <p className='text-xs font-bold text-gray-500'>
                  and {cart.length - 1} other item(s)
                </p>
              </div>
            )}
          </div>
          <div className='bg-black px-6 py-4 rounded-b mb-6'>
            <h5 className='text-xs text-white uppercase mb-2'>Grand Total</h5>
            <p className='text-sm text-white'>$ {totalAmount}</p>
          </div>
        </div>
        <Link to='/'><button className=' w-full bg-deepOrange hover:bg-lightOrange text-white md:text-[13px] text-[10px] leading-[17px] tracking-[1px] py-3 px-7 '>
          Back To Home
        </button></Link>
      </div>
    </div>
  );
};

export default Modal;
