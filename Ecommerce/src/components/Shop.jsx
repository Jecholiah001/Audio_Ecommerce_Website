/* eslint-disable no-unused-vars */
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Shop() {
    return (
    <div>
        <div className='flex gap-10 mx-[150px]'>
            <div className='relative font-custom w-[359px] h-[205px] bg-deepGrey rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg my-40 gap-4'>
                <img src={"./assets/image-category-thumbnail-headphones.png"} className='absolute w-[180px] h-[180px] mx-[90px] -mt-16'/> 
                <div className='pt-28 mx-[130px] '>
                    <h3 className='font-[700] text-[18px] leading-[25px] tracking-[1.3px]'>HEADPHONES</h3>
                    <div className='flex my-3 mx-5'>
                    <Link to={'/headphones'}><button className='text-[13px] opacity-[60%] font-[700] leading-[18px] tracking-[1px] hover:text-deepOrange'>SHOP</button></Link>
                        <FaAngleRight className='my-1 text-deepOrange'/>
                    </div>
                </div>
            </div>

            <div className='relative font-custom w-[359px] h-[205px] bg-deepGrey rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg my-40 gap-4'>
                <img src={"./assets/image-category-thumbnail-speakers.png"} className='absolute w-[180px] h-[180px] mx-[90px] -mt-16'/> 
                <div className='pt-28 mx-[130px] '>
                    <h3 className='font-[700] text-[18px] leading-[25px] tracking-[1.3px]'>SPEAKERS</h3>
                    <div className='flex my-3 mx-5'>
                        <Link to={'/speakers'}><button className='text-[13px] opacity-[60%] font-[700] leading-[18px] tracking-[1px] hover:text-deepOrange'>SHOP</button></Link>
                        <FaAngleRight className='my-1 text-deepOrange'/>
                    </div>
                </div>
            </div>

            <div className='relative font-custom w-[359px] h-[205px] bg-deepGrey rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg my-40 gap-4'>
                <img src={"./assets/image-category-thumbnail-earphones.png"} className='absolute w-[180px] h-[180px] mx-[90px] -mt-16'/> 
                <div className='pt-28 mx-[130px] '>
                    <h3 className='font-[700] text-[18px] leading-[25px] tracking-[1.3px]'>EARPHONES</h3>
                    <div className='flex my-3 mx-5'>
                        <Link to={'/earphones'}><button className='text-[13px] opacity-[60%] font-[700] leading-[18px] tracking-[1px] hover:text-deepOrange'>SHOP</button></Link>
                        <FaAngleRight className='my-1 text-deepOrange'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Shop
