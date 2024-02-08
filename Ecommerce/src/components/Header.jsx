/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'

function Header() {
    return (
        <>
        <nav className='font-custom bg-lighterBlack text-white flex justify-between py-[20px] px-[150px]'>
                <h1 className='lg:text-[30px] font-bold'>audiophile</h1>
                <div className=' lg:w-[50%] lg:flex items-center justify-evenly text-[13px] leading-[25px] tracking-[1px]'>
                    <Link to={'/'} className='hover:text-[#D87D4A]'>HOME</Link>
                    <Link to={'/headphones'} className='hover:text-[#D87D4A]'>HEADPHONES</Link>
                    <Link to={'/speakers'} className='hover:text-[#D87D4A]'>SPEAKERS</Link>
                    <Link to={'/earphones'} className='hover:text-[#D87D4A]'>EARPHONES</Link>
                </div> 
                <Link className='mt-3'><FaShoppingCart/></Link>
        </nav>
    </>   
    )
}

export default Header
