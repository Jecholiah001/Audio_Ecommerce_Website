/* eslint-disable no-unused-vars */
import React from 'react'

function Hero() {
    const heroImage= '../heroimage.jpg';
    return (
        <div className='flex  bg-lighterBlack mt-1 mx-[150px]'> 
            <div className=' w-[40%] mt-36 text-white  font-custom'>
                <h3 className='text-[14px]  opacity-[50%]  font-[400] leading-[19px] tracking-[10px] '>NEW PRODUCT</h3>
                <h1 className='text-[56px] font-[700] leading-[58px] py-8'>XX99 MARK II HEADPHONES</h1>
                <p className='w-[350px] text-[15px] leading-[25px] font-[400] mb-9'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className=' bg-deepOrange hover:bg-lightOrange text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button>
            </div>
            <div >
                <img className='w-[100%] h-[100%] ml-20' src={heroImage}/>
            </div>
        </div>
    )
}

export default Hero
