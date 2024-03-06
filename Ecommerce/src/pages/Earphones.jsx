/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Audiogear from '../components/Audiogear'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Shop from '../components/Shop'

function Earphones() {
  const product1 = {
    id: 1,
    name: 'YX1 WIRELESS EARPHONES',
    categoryImage: {
      mobile: "/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg",
      tablet: "/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg",
      desktop: "/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"
    },
  }

  return (
    <div>
      <div className='bg-lighterBlack'>
        <Header />
        <hr className='text-gray-500 opacity-15 xl:mx-[150px] lg:mx-12 mx-9' />
        <h2 className='text-white font-[500] md:text-[40px] text-[32px] leading-[44px] tracking-[1.4px] text-center py-20'>EARPHONES</h2>
      </div>
      <div className='grid lg:grid-cols-2 xl:gap-20 lg:gap-10 xl:mt-40 md:mt-24 mb-16 xl:mx-[150px] md:mx-12 md:p-0 p-8'>
        {/* Mobile View */}
        <img src={product1.categoryImage.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product1.name}/>
        {/* Tablet View */}
        <img src={product1.categoryImage.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden' alt={product1.name}/>
        {/* Desktop View */}
        <img src={product1.categoryImage.desktop} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product1.name}/>

        <div className='font-custom xl:m-24 lg:m-10 md:m-12  lg:text-start text-center md:mb-0 mb-10'>
          <h3 className='text-[14px] text-deepOrange md:mt-0 mt-10 font-[400] leading-[19px] tracking-[10px] '>NEW PRODUCT</h3>
          <h1 className='md:w-[364px] lg:ml-0 md:ml-28 md:text-[40px] text-[28px] font-[700] leading-[44px] tracking-[1.4px] md:py-8 py-6'>{product1.name}</h1>
          <p className='xl:w-[422px] lg:w-[400px] md:w-[572px] md:text-[15px] text-[12px] leading-[25px] font-[400] mb-9 opacity-[50%]'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          < Link to={`/earphones/${product1.id}`}><button className=' bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button></Link>
        </div>
      </div>

      <Shop />
      <Audiogear />
      <Footer />
    </div>
  )
}

export default Earphones
