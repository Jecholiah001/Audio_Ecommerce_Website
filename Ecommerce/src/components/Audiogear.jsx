/* eslint-disable no-unused-vars */
import React from 'react'

function Audiogear() {
    const picture ={
        image: {
            mobile: '/assets/mobile/image-best-gear.jpg',
            tablet: '/assets/tablet/image-best-gear.jpg',
            desktop: '/assets/desktop/image-best-gear.jpg'
        }
    }
    return (
        <>
            {/* Best Audio Gear */}
            <div className='flex lg:flex-row flex-col font-custom xl:mx-[150px] md:mx-12 xl:gap-16 lg:gap-7 gap-0 lg:mb-40 lg:mt-0 mt-20 '>
                {/* Mobile View */}
                <img src={picture.image.mobile} className='flex items-center justify-center mx-8 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg md:hidden' />
                {/* Tablet View */}
                <img src={picture.image.tablet} className='w-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden md:block lg:hidden'/>
                <div className='lg:my-32 lg:text-start md:my-12 md:mb-28 mb-36 text-center'>
                    <h3 className='font-[700] md:text-[40px] text-[25px] leading-[44px] tracking-[1.4px] md:py-10 py-7 lg:mx-0 md:mx-10 mx-4'>BRINGING YOU THE <span className='text-deepOrange'>BEST</span> AUDIO GEAR</h3>
                    <p className='xl:w-[470px] lg:w-[400px] md:w-[600px] w-[280px] opacity-[70%] font-[400] md:text-[15px] text-[13px] leading-[25px] lg:mx-0 lg:mb-0 md:mx-9 mx-auto md:mb-12'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                {/* Desktop View */}
                <img src={picture.image.desktop} className='xl:w-full lg:w-[460px] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg hidden lg:block'/>
            </div>
        </>
    )
}

export default Audiogear

