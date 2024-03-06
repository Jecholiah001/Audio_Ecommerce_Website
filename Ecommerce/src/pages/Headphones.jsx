/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Shop from '../components/Shop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Audiogear from '../components/Audiogear';

function Headphones() {
  const product4 = {
    id: 4,
    name: 'XX99 MARK II HEADPHONES',
    categoryImage: {
      "mobile": "/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg",
      "tablet": "/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg",
      "desktop": "/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
    }
  };

  const product3 = {
    id: 3,
    name: 'XX99 MARK I HEADPHONES',
    categoryImage: {
      "mobile": "/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
      "tablet": "/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg",
      "desktop": "/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
    },
  };

  const product2 = {
    id: 2,
    name: 'XX59 HEADPHONES',
    categoryImage: {
      "mobile": "/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg",
      "tablet": "/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg",
      "desktop": "/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
    }
  };

  return (
    <div>
      <div className='bg-lighterBlack'>
        <Header/>
        <hr className='text-gray-500 opacity-15 xl:mx-[150px] lg:mx-12 mx-9' />
        <h2 className='text-white font-[500] md:text-[40px] text-[32px] leading-[44px] tracking-[1.4px] text-center py-20'>HEADPHONES</h2>
      </div>
      
      <div className=' grid lg:grid-cols-2 xl:gap-20 lg:gap-10 xl:mt-40 md:mt-24 mb-16 xl:mx-[150px] md:mx-12 md:p-0 p-8'>
        {/* Product 4 */}
        {/* Mobile View */}
        <img src={product4.categoryImage.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product3.name}/>
        {/* Tablet View */}
        <img src={product4.categoryImage.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden mx-auto' alt={product4.name}/>
        {/* Desktop View */}
        <img src={product4.categoryImage.desktop} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product4.name}/>

        <div className='font-custom xl:mx-24 xl:my-32 lg:mx-10 lg:my-14 md:m-12  lg:text-start text-center mb-20'>
          <h3 className='text-[14px] text-deepOrange md:mt-0 mt-10 font-[400] leading-[19px] tracking-[10px] '>NEW PRODUCT</h3>
          <h1 className='md:w-[364px] lg:ml-0 md:ml-28 md:text-[40px] text-[28px] font-[700] leading-[44px] tracking-[1.4px] md:py-8 py-6'>{product4.name}</h1>
          <p className='xl:w-[422px] lg:w-[400px] md:w-[572px] md:text-[15px] text-[12px] leading-[25px] font-[400] mb-9 opacity-[50%]'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <Link to={`/headphones/${product4.id}`}><button className=' bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button></Link>
        </div>

      {/* Product 3 */}
        {/* Mobile View */}
        <img src={product3.categoryImage.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product3.name}/>
        {/* Tablet View */}
        <img src={product3.categoryImage.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden' alt={product3.name}/>

        <div className='font-custom lg:ml-0 xl:my-28 lg:my-16 md:m-12 lg:text-start text-center  mb-20'>
          <h1 className='md:w-[364px] lg:ml-0 md:ml-28 md:text-[40px] text-[28px] font-[700] leading-[44px] tracking-[1.4px] md:py-8 py-6'>{product3.name}</h1>
          <p className='xl:w-[422px] lg:w-[400px] md:w-[572px] md:text-[15px] text-[12px] leading-[25px] font-[400] mb-9 opacity-[50%]'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go</p>
          <Link to={`/headphones/${product3.id}`}><button className=' bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button></Link>
        </div>
        {/* Desktop View */}
        <img src={product3.categoryImage.desktop} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product3.name}/>

      {/* Product 2 */}
        {/* Mobile View */}
        <img src={product2.categoryImage.mobile} className='flex items-center justify-center  rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' alt={product2.name}/>
        {/* Tablet View */}
        <img src={product2.categoryImage.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden' alt={product2.name}/>
        {/* Desktop View */}
        <img src={product2.categoryImage.desktop} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block' alt={product2.name}/>

        <div className='font-custom xl:mx-24 xl:my-28 lg:mx-10 lg:my-16 md:m-12  lg:text-start text-center mb-20'>
          <h1 className='md:w-[364px] lg:ml-0 md:ml-28 md:text-[40px] text-[28px] font-[700] leading-[44px] tracking-[1.4px] md:py-8 py-6'>{product2.name}</h1>
          <p className='xl:w-[422px] lg:w-[400px] md:w-[572px] md:text-[15px] text-[12px] leading-[25px] font-[400] mb-9 opacity-[50%]'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <Link to={`/headphones/${product2.id}`}><button className=' bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button></Link>
        </div>
    </div>
    <Shop />
    <Audiogear />
    <Footer />
    </div> 
  )
}

export default Headphones;

