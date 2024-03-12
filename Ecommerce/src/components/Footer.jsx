/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='font-custom text-center md:text-start bg-lighterBlack text-white py-[60px] xl:px-[150px] md:px-12 px-9 '>
            <hr className='w-28 border-solid border-4 border-deepOrange -mt-[60px] mb-9 md:mx-0 mx-auto'/>
            <div className='flex lg:flex-row flex-col justify-between text-center md:text-start'>
                <h1 className='lg:text-[27px] text-[22px]  font-bold lg:mb-0 md:mb-7'>audiophile</h1>
                <div className=' w-[50%] flex md:flex-row flex-col  lg:justify-evenly xl:ml-[50%] md:mx-0 mx-auto md:gap-10 gap-3 md:py-0 py-9  md:text-[13px] text-[11px] leading-[25px] tracking-[1px]'>
                    <Link to={'/'} className='hover:text-deepOrange'>HOME</Link>
                    <Link to={'/headphones'} className='hover:text-deepOrange'>HEADPHONES</Link>
                    <Link to={'/speakers'} className='hover:text-deepOrange'>SPEAKERS</Link>
                    <Link to={'/earphones'} className='hover:text-deepOrange'>EARPHONES</Link>
                </div> 
            </div>
            <p className='lg:w-[530px] md:w-[660px] w-[270px] md:mt-10 mb-12 md:mx-0 mx-auto font-[400]  text-[#FFFFFF] md:text-[15px] text-[13px] leading-[25px] opacity-[50%]'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
            <div className='flex md:flex-row flex-col justify-between '>
                <h3 className='font-[400] md:text-[15px] text-[#FFFFFF] text-[13px] leading-[25px] opacity-[50%]'> Copyright 2021. All Rights Reserved</h3>
                <div className='flex items-center justify-center w-6 h-6 xl:mr-[45px] gap-4 lg:-mt-16 md:mr-[55px] md:mx-0 md:mt-0 mx-auto mt-9'>
                    <img  className='hover:text-deepOrange' src='/assets/desktop/icon-facebook.svg'/>
                    <img src='/assets/desktop/icon-twitter.svg'/>
                    <img src='/assets/desktop/icon-instagram.svg'/>
                </div>
            </div>
        </div>
    )
}

export default Footer
