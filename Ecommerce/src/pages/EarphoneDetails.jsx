/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../components/CartContext'
import Audiogear from '../components/Audiogear'
import Footer from '../components/Footer'
import Shop from '../components/Shop'

function EarphoneDetails({ data }) {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const selectedId = parseInt(id);
    const selectedProduct = data.find((product) => product.id === selectedId);
    setProduct(selectedProduct);
  }, [id, data]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandler = () => {
    addToCart({ ...product, quantity });
    setQuantity(0);
  };

  return (
    <div className={`font-custom`}>
      <Header/>
      <Link to='/earphones'>
        <button className='xl:ml-[150px] lg:ml-12 ml-9 lg:mt-20 mt-10 text-[15px] font-[400]  leading-[25px] opacity-[50%]'>Go Back</button>
      </Link>
      <div className='grid md:grid-cols-2  grid-cols-1 xl:gap-20 lg:gap-2 mt-8 mb-16 xl:mx-[150px] lg:mx-12 mx-9'>
        {/* Mobile View */}
        <img src={product?.image.mobile} className='w-[98%]  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product?.name}/>
        {/* Tablet View */}
        <img src={product?.image.tablet} className='w-[80%] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden' alt={product?.name}/>
        {/* Desktop View */}
        <img src={product?.image.desktop} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product?.name}/>

        <div className='font-custom xl:m-24 lg:m-10 md:mr-9 mt-7'>
          <h3 className='md:text-[14px] text-[9.5px] text-deepOrange font-[400] leading-[19px] tracking-[10px]'>NEW PRODUCT</h3>
          <h1 className=' lg:w-[276px]  w-[250px] md:text-[30px] text-[21.5px]  font-[700] leading-[44px] tracking-[1.4px] md:py-8  py-3 uppercase'>{product?.name}</h1>
          <p className='lg:w-[422px] md:w-[320px] md:text-[15px] text-[13px] leading-[25px] font-[400] mb-3 opacity-[50%]'>{product?.description}</p>
          <p className='md:text-[18px] text-[15px] font-[700] leading-[25px] tracking-[1.3px] mt-5'>${product?.price}</p>

          <div className='flex md:gap-5 gap-3 md:my-10 my-6'>
            <div className='flex gap-6 bg-deepGrey md:w-[120px] w-[100px] h-[43px] md:px-6 px-4'>
              <button onClick={decreaseQuantity} className='md:text-[16px] text-[13px] font-[700] leading-[18px] tracking-[1px] opacity-[30%]'>-</button>
              <span className='md:text-[16px] text-[13px] font-[700] leading-[18px] tracking-[1px] my-3'>{quantity}</span>
              <button onClick={increaseQuantity} className='md:text-[16px] text-[13px] font-[700] leading-[18px] tracking-[1px] opacity-[30%]'>+</button>
            </div>
            <button onClick={addToCartHandler} className='bg-deepOrange hover:bg-lightOrange text-white lg:text-[13px] lg:w-[170px] w-[130px] text-[9px] leading-[17px] tracking-[1px] py-3 px-7'>ADD TO CART</button>
          </div>
        </div>
      </div>

      <div className='flex  lg:flex-row flex-col xl:mx-[150px] lg:mx-12 mx-9 lg:gap-24'>
        <div className='lg:w-[60%]'>
          <h3 className='lg:text-[32px] md:text-[25px] text-[19px] font-[700] leading-[36px] tracking-[1.1px] md:my-8 mb-5'>FEATURES</h3>
          <p className='md:text-[15px] text-[13px]  font-[400] leading-[25px] opacity-[50%]'>{product?.features}</p>
        </div>
        <div className='flex lg:flex-col md:flex-row flex-col lg:gap-0 md:gap-56'>
          <h3 className='lg:text-[32px] md:text-[25px] text-[19px] font-[700] leading-[36px] tracking-[1.1px] lg:my-8  md:my-20 mt-16 mb-5'>IN THE BOX</h3>
          <div className='md:mt-[73px] lg:mt-0'>
            {product?.box.map((detail, index) =>{
              const { quantity, item } = detail;
              return(
                <div key={index} className='flex md:gap-10 gap-6 my-2'>
                  <p className='md:text-[15px] text-[13px] text-deepOrange font-[700] leading-[25px]'>{quantity}</p>
                  <p className='w-[200px] md:text-[15px] text-[13px] font-[400] leading-[25px] opacity-[50%]'>{item}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className='grid  grid-cols-1 mx-9 my-16 gap-9'>
        {/* Mobile View 1st, 2nd and 3rd image */}
        <img src={ product?.gallery.first.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product?.name}/>
        <img src={ product?.gallery.second.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product?.name}/>
        <img src={ product?.gallery.third.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product?.name}/>
      </div>

      <div className='flex gap-9 mx-9'>
        <div className='grid grid-cols-1  gap-9'>
          {/* Tablet View  1st and 2nd image*/}
          <img src={product?.gallery.first.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden' alt={product?.name}/>
          <img src={product?.gallery.second.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden' alt={product?.name}/>
        </div>
        {/* Tablet View  3rd image*/}
        <img src={product?.gallery.third.tablet} className='w-1/2 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden' alt={product?.name}/>
      </div>
      
      <div className='flex gap-9 xl:mx-[150px] lg:mx-12 '>
        <div className='grid grid-cols-1 gap-9'>
          {/* Desktop View 1st and 2nd image */}
          <img src={product?.gallery.first.desktop} className='xl:w-[510px] lg:w-[750px] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product?.name}/>
          <img src={product?.gallery.second.desktop} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product?.name}/>
        </div>
         {/* Desktop View 3rd image */}
        <img src={product?.gallery.third.desktop} className='xl:w-[58%]  lg:w-[54%] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product?.name}/>
      </div>

      <div>
        <h1 className='lg:text-[32px] md:text-[25px] text-[19px] text-center font-[700] leading-[36px] tracking-[1.1px] lg:mt-32 md:my-16  my-10'>YOU MAY ALSO LIKE</h1>
        <div className='flex md:flex-row flex-col gap-7 xl:mx-[150px] lg:mx-12 mx-9 '>
          {product?.others.map((item, index) => {
            const { name, image } = item;
            const { mobile, tablet, desktop } = image;
            return (
              <div key={index} className='flex flex-col items-center'>
                {/* Mobile View */}
                <img src={mobile || product?.image.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product?.name}/>
                {/* Tablet View */}
                <img src={tablet || product?.image.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden' alt={product?.name}/>
                {/* Desktop View */}
                <img src={desktop || product?.image.desktop} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product?.name}/>
                <h1 className="lg:text-[24px] text-[18px] uppercase text-center font-[700] leading-[33px] tracking-[1.7px] mt-10">{name}</h1>
                <Link>
                  <button className='bg-deepOrange hover:bg-lightOrange text-white  lg:text-[13px] text-[9px] leading-[17px] tracking-[1px] py-3 px-7 md:my-10 my-5 mx-auto'>SEE PRODUCT</button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <Shop/>
      <Audiogear/>
      <Footer/>
    </div>
  );
}

export default EarphoneDetails
