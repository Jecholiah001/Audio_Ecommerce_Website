/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

function Shopnow({icon, title}) {
    return (
    <>
    <div className='relative font-custom w-[359px] h-[205px] bg-deepGrey rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg my-40 gap-4'>
        <img src={icon} className='absolute w-[180px] h-[180px] mx-[90px] -mt-16'/> 
        <div className='pt-28 mx-[130px] '>
            <h3 className='font-[700] text-[18px] leading-[25px] tracking-[1.3px]'>{title}</h3>
            <div className='flex my-3 mx-5'>
                <button className='text-[13px] opacity-[60%] font-[700] leading-[18px] tracking-[1px] hover:text-deepOrange'>SHOP</button>
                <FaAngleRight className='px-1 text-deepOrange'/>
            </div>
        </div>
    </div>
    </>
    )
}

export default Shopnow
