/* eslint-disable no-unused-vars */
import React from 'react'

function Audiogear() {
    return (
        <>
            {/* Best Audio Gear */}
            <div className='flex font-custom mx-[150px] gap-10 mb-40'>
                <div className='my-32'>
                    <h3 className='font-[700] text-[40px] leading-[44px] tracking-[1.4px] py-10'>BRINGING YOU THE <span className='text-deepOrange'>BEST</span> AUDIO GEAR</h3>
                    <p className='w-[470px] opacity-[70%] font-[400] text-[15px]leading-[25px]'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                </div>
                <img src='./assets/desktop/image-best-gear.jpg' className='ml-20 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
            </div>
        </>
    )
}

export default Audiogear

