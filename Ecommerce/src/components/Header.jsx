/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaTimes } from 'react-icons/fa';
import Cart from '../pages/Cart';
import { useCart } from '../components/CartContext';
import Shop from './Shop';

function Header({ data }) {
  const { cart } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(window.innerWidth < 800);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setIsMenuOpen(false);
  };

 // Calculate total quantity in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className='font-custom bg-lighterBlack text-white flex justify-between py-[20px] xl:px-[150px] md:px-12 px-9 relative'>
        

        <div
          onClick={toggleMenu}
          className='lg:hidden mt-3 md:-mr-[400px] -mr-16'
        >
          {isDrawerOpen && (
          <div
            className='fixed inset-0 bg-black opacity-50 z-20'
            onClick={closeDrawer}
          ></div>
          )}
          <span>
            <FaBars />
          </span>
          <div className={`absolute ${isDrawerOpen ? '' : 'hidden'}`}>
            <div
              className={`relative w-full min-w-[284px] md:max-w-[720px] z-30 transform ${
                isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
              } transition-transform ease-in-out`}
            >
              <div className='w-screen lg:hidden md:-ml-12 -ml-9 mt-[30px] p-1 bg-white  rounded-bl-lg rounded-br-lg'>
                <div className=''>
                  <button
                    className='text-black absolute top -mt-20 md:p-12 p-9 '
                    onClick={closeDrawer}
                  >
                    <FaTimes />
                  </button>
                  <div className=''>
                    <Shop data={data} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className='lg:text-[27px] text-[22px] font-bold'>audiophile</h1>

        <div className='lg:w-[50%] lg:flex items-center justify-evenly text-[13px] leading-[25px] tracking-[1px] hidden'>
          <Link to={'/'} className='hover:text-deepOrange'>
            HOME
          </Link>
          <Link to={'/headphones'} className='hover:text-deepOrange'>
            HEADPHONES
          </Link>
          <Link to={'/speakers'} className='hover:text-deepOrange'>
            SPEAKERS
          </Link>
          <Link to={'/earphones'} className='hover:text-deepOrange'>
            EARPHONES
          </Link>
        </div>

        <div className='flex items-center' onClick={toggleCart}>
          <FaShoppingCart className='my-3' />
          {!!totalQuantity && (
            <span className='bg-deepOrange px-2 rounded-full ml-2'>
              {totalQuantity}
            </span>
          )}
        </div>

        {showCart && <Cart toggleCart={toggleCart} />}
      </nav>
    </>
  );
}

export default Header;
