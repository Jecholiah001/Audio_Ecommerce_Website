/* eslint-disable no-unused-vars */
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Shop() {
    return (
    <div>
        <div className='text-black flex flex-col md:flex-row xl:gap-7 md:gap-4 xl:mx-[150px] md:mx-12  mx-9 lg:my-0 my-20'>
            <div className='relative font-custom xl:w-[360px] lg:w-[300px] md:w-[220px] md:h-[205px] bg-deepGrey rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg lg:my-40 md:my-16 my-10 flex items-center justify-center'>
                <img src={"/assets/image-category-thumbnail-headphones.png"} className='absolute lg:w-[180px] md:w-[155px] w-[130px] lg:h-[180px] md:h-[155px] md:-mt-32 -mt-[110px]'/> 
                <div className='md:pt-28 pt-16 mx-auto'>
                    <h3 className='font-[700] lg:text-[18px] md:text-[15px] text-[13px] leading-[25px] tracking-[1.3px]'>HEADPHONES</h3>
                    <div className='flex md:my-3 mb-4 mx-7 lg:mx-10 '>
                    <Link to={'/headphones'}><button className='md:text-[13px] text-[10px] opacity-[50%] font-[700] leading-[18px] tracking-[1px] hover:text-deepOrange'>SHOP</button></Link>
                        <FaAngleRight className='md:my-1 my-[5px] text-deepOrange'/>
                    </div>
                </div>
            </div>

            <div className='relative font-custom xl:w-[360px] lg:w-[300px] md:w-[220px] md:h-[205px] bg-deepGrey rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg lg:my-40 md:my-16 my-10 flex items-center justify-center'>
                <img src={"/assets/image-category-thumbnail-speakers.png"} className='absolute lg:w-[180px] md:w-[155px] w-[130px] lg:h-[180px] md:h-[155px] md:-mt-32 -mt-[110px]'/> 
                <div className='md:pt-28 pt-16 mx-auto'>
                    <h3 className='md:ml-4 font-[700] lg:text-[18px] md:text-[15px] text-[13px] leading-[25px] tracking-[1.3px]'>SPEAKERS</h3>
                    <div className='flex md:my-3 mb-4 mx-4 md:mx-9 lg:mx-10'>
                    <Link to={'/speakers'}><button className='md:text-[13px] text-[10px] opacity-[50%] font-[700] leading-[18px] tracking-[1px] hover:text-deepOrange'>SHOP</button></Link>
                        <FaAngleRight className='md:my-1 my-[5px] text-deepOrange'/>
                    </div>
                </div>
            </div>

            <div className='relative font-custom xl:w-[360px] lg:w-[300px] md:w-[220px] md:h-[205px] bg-deepGrey rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg lg:my-40 md:my-16 my-10 flex items-center justify-center'>
                <img src={"/assets/image-category-thumbnail-earphones.png"} className='absolute lg:w-[180px] md:w-[155px] w-[130px] lg:h-[180px] md:h-[155px] md:-mt-32 -mt-[100px]'/> 
                <div className='md:pt-28 pt-16 mx-auto'>
                    <h3 className='font-[700] lg:text-[18px] md:text-[15px] text-[13px] leading-[25px] tracking-[1.3px]'>EARPHONES</h3>
                    <div className='flex md:my-3 mb-4 mx-7 lg:mx-10'>
                    <Link to={'/earphones'}><button className='md:text-[13px] text-[10px] opacity-[50%] font-[700] leading-[18px] tracking-[1px] hover:text-deepOrange'>SHOP</button></Link>
                        <FaAngleRight className='md:my-1 my-[5px] text-deepOrange'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Shop
