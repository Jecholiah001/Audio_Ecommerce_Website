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
  };

  const product5 = {
    id: 5,
    name: 'ZX7 SPEAKER',
  };

  return (
    <div>
      <div className='bg-lighterBlack'>
        <Header />
        <hr className='mx-[150px]' />
        <h2 className='text-white font-[500] text-[40px] leading-[44px] tracking-[1.4px] text-center py-20'>SPEAKERS</h2>
      </div>

      <div className='grid grid-cols-2 gap-20 mt-40 mb-16 mx-[150px]'>
        <img src='./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg' className='w-[100%] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg' />
        <div className='font-custom m-24'>
          <h3 className='text-[14px] text-deepOrange font-[400] leading-[19px] tracking-[10px] '>NEW PRODUCT</h3>
          <h1 className='w-10 text-[40px] font-[700] leading-[44px] tracking-[1.4px] py-8'>{product6.name}</h1>
          <p className='w-[420px] text-[15px] leading-[25px] font-[400] opacity-[70%] mb-9'>Upgrade your sound system with the all new ZX9 active speaker. It's a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
          <Link to={`/speakers/${product6.id}`}>
            <button className='bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button>
          </Link>
        </div>

        <div className='font-custom my-24'>
          <h1 className='w-10 text-[40px] font-[700] leading-[44px] tracking-[1.4px] py-8'>{product5.name}</h1>
          <p className='w-[450px] text-[15px] leading-[25px] font-[400] opacity-[70%] mb-9'>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
          <Link to={`/speakers/${product5.id}`}>
            <button className='bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button>
          </Link>
        </div>
        <img src='./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg' className='w-[100%] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg' />
      </div>
      <Shop />
      <Audiogear />
      <Footer />
    </div>
  );
}

export default Speakers