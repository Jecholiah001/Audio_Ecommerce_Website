/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    const product4 = {
        id: 4,
        name: 'XX99 MARK II HEADPHONES',
        image: {
            mobile: "/assets/home/mobile/image-header.jpg",
            tablet: "/assets/home/tablet/image-header.jpg",
            desktop: "/assets/home/desktop/heroimage.jpg"
            } 
        };  
    return (
        <div className='flex bg-lighterBlack mt-1 xl:mx-[150px] md:mx-12 '> 
            <div className=' lg:w-[40%] md:w-[45%] xl:my-36 lg:my-16 md:my-[180px] my-28 lg:mx-0 md:mx-[170px] mx-9  absolute text-white lg:text-start text-center font-custom'>
                <h3 className='md:text-[14px] text-[12px] opacity-[50%]  font-[400] leading-[19px] tracking-[10px]'>NEW PRODUCT</h3>
                <h1 className='xl:text-[56px] lg:text-[40px] md:text-[50px] text-[35px] font-[700] leading-[58px] xl:py-8 lg:py-4 py-2'>{product4.name}</h1>
                <p className='md:w-[350px] md:text-[15px] text-[13px] leading-[25px] font-[400] lg:mt-0 md:mt-3 md:mb-9 mb-3'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Link to={`/headphones/${product4.id}`}><button className=' bg-deepOrange hover:bg-lightOrange md:text-[13px] text-[10px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button></Link>
            </div>
            <div >
                {/* Mobile View */}
                <img src={product4.image.mobile} className='w-full md:hidden'/>
                {/* Tablet View */}
                <img src={product4.image.tablet} className='w-full hidden md:block lg:hidden'/>
                {/* Desktop View */}
                <img src={product4.image.desktop} className='w-full h-full  hidden lg:block' />
            </div>
        </div>
    )
}

export default Hero
