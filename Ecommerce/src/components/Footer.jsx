/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='font-custom bg-lighterBlack text-white py-[60px] px-[150px]'>
            <div className='flex justify-between'>
                <h1 className='text-[30px] font-bold'>audiophile</h1>
                <div className=' w-[50%] flex items-center justify-evenly text-[13px] leading-[25px] tracking-[1px]'>
                    <Link to={'/'} className='hover:text-[#D87D4A]'>HOME</Link>
                    <Link to={'/headphones'} className='hover:text-[#D87D4A]'>HEADPHONES</Link>
                    <Link to={'/speakers'} className='hover:text-[#D87D4A]'>SPEAKERS</Link>
                    <Link to={'/earphones'} className='hover:text-[#D87D4A]'>EARPHONES</Link>
                </div> 
            </div>
            <div className='flex justify-between'>
                <p className='w-[530px] mt-10 mb-12 font-[400] text-[15px] leading-[25px]'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
                <div className='flex w-6 h-6 mr-[150px] gap-4 mt-24'>
                    <img src='./assets/desktop/icon-facebook.svg'/>
                    <img src='./assets/desktop/icon-twitter.svg'/>
                    <img src='./assets/desktop/icon-instagram.svg'/>
                </div>
            </div>

            <h3 className='font-[400] text-[15px] leading-[25px]'> Copyright 2021. All Rights Reserved</h3>
        </div>
    )
}

export default Footer
