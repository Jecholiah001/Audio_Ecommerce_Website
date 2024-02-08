/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Audiogear from '../components/Audiogear'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import Shop from '../components/Shop'


function Earphones() {
  const product1 ={
    id: 1,
    name: 'YX1 WIRELESS EARPHONES'
  }


  return (
    <div>
      <div className='bg-lighterBlack'>
        <Header/>
        <hr className='mx-[150px]'/>
        <h2 className=' text-white font-[500] text-[40px] leading-[44px] tracking-[1.4px] text-center py-20'>EARPHONES</h2>
      </div>

      <div className=' grid grid-cols-2 gap-20 mt-40 mb-16 mx-[150px]'>
        <img src='./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg' className='w-[100%] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
        <div className='font-custom m-24'>
          <h3 className='text-[14px] text-deepOrange font-[400] leading-[19px] tracking-[10px] '>NEW PRODUCT</h3>
          <h1 className='text-[40px] font-[700]  leading-[44px] tracking-[1.4px] py-8'>{product1.name}</h1>
          <p className='w-[422px] text-[15px] leading-[25px] font-[400] mb-9 opacity-[70%]'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
          <Link to={`/earphones/${product1.id}`}><button className=' bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button></Link>
        </div>
      </div>
      <Shop/>
      <Audiogear/>
      <Footer/>
    </div>
  )
}

export default Earphones
