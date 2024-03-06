/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Shop from '../components/Shop'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Audiogear from '../components/Audiogear';

function Speakers() {
  const product6 = {
    id: 6,
    name: 'ZX9 SPEAKER',
    categoryImage: {
      "mobile": "/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg",
      "tablet": "/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg",
      "desktop": "/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"
    }
  }

  const product5 = {
    id: 5,
    name: 'ZX7 SPEAKER',
    categoryImage: {
      "mobile": "/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg",
      "tablet": "/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg",
      "desktop": "/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"
    }
  }

  return (
    <div>
      <div className='bg-lighterBlack'>
        <Header/>
        <hr className='text-gray-500 opacity-15 xl:mx-[150px] lg:mx-12 mx-9' />
        <h2 className='text-white font-[500] md:text-[40px] text-[32px] leading-[44px] tracking-[1.4px] text-center py-20'>SPEAKERS</h2>
      </div>
      
      <div className=' grid lg:grid-cols-2 xl:gap-20 lg:gap-10 xl:mt-40 md:mt-24 mb-16 xl:mx-[150px] md:mx-12 md:p-0 p-8'>
        {/* Product 6 */}
        {/* Mobile View */}
        <img src={product6.categoryImage.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product6.name}/>
        {/* Tablet View */}
        <img src={product6.categoryImage.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden mx-auto' alt={product6.name}/>
        {/* Desktop View */}
        <img src={product6.categoryImage.desktop} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product6.name}/>

        <div className='font-custom xl:mx-24 xl:my-32 lg:mx-10 lg:my-20 md:m-12  lg:text-start text-center  mb-20'>
          <h3 className='text-[14px] text-deepOrange md:mt-0 mt-10 font-[400] leading-[19px] tracking-[10px] '>NEW PRODUCT</h3>
          <h1 className='md:w-[364px] lg:ml-0 md:ml-28 md:text-[40px] text-[30px] font-[700] leading-[44px] tracking-[1.4px] md:py-8 py-6'>{product6.name}</h1>
          <p className='xl:w-[422px] lg:w-[400px] md:w-[572px] md:text-[15px] text-[12px] leading-[25px] font-[400] mb-9 opacity-[50%]'>Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <Link to={`/speakers/${product6.id}`}><button className=' bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button></Link>
        </div>

      {/* Product 5 */}
        {/* Mobile View */}
        <img src={product5.categoryImage.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product5.name}/>
        {/* Tablet View */}
        <img src={product5.categoryImage.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden' alt={product5.name}/>
        <div className='font-custom lg:ml-0 xl:my-32 lg:my-24  md:m-12  lg:text-start text-center md:mb-0 mb-10'>
          <h1 className='md:w-[364px] lg:ml-0 md:ml-28 md:text-[40px] text-[28px] font-[700] leading-[44px] tracking-[1.4px] md:py-8 py-6'>{product5.name}</h1>
          <p className='xl:w-[422px] lg:w-[400px] md:w-[572px] md:text-[15px] text-[12px] leading-[25px] font-[400] mb-9 opacity-[50%]'>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <Link to={`/speakers/${product5.id}`}><button className=' bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button></Link>
        </div>
        {/* Desktop View */}
        <img src={product5.categoryImage.desktop} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product5.name}/>
    </div>
    <Shop />
    <Audiogear />
    <Footer />
    </div> 
  );
}

export default Speakers