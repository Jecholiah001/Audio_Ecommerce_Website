/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function Subdetails() {
    const product6 = {
        id: 6,
        name: 'ZX9 SPEAKER',
        image: {
            mobile: "/assets/home/mobile/image-speaker-zx9.png",
            tablet: "/assets/home/tablet/image-speaker-zx9.png",
            desktop: "/assets/home/desktop/image-speaker-zx9.png"
        }
    };
    
    const product5 = {
        id: 5,
        name: 'ZX7 SPEAKER',
        image: {
            mobile: "/assets/home/mobile/image-speaker-zx7.jpg",
            tablet: "/assets/home/tablet/image-speaker-zx7.jpg",
            desktop: "/assets/home/desktop/image-speaker-zx7.jpg"
        }
    };
    
    const product1 ={
        id: 1,
        name: 'YX1 WIRELESS',
        image: {
            mobile: "/assets/home/mobile/image-earphones-yx1.jpg",
            tablet: "/assets/home/tablet/image-earphones-yx1.jpg",
            desktop: "/assets/home/desktop/image-earphones-yx1.jpg"
        }
    }
    
    return (
        <div className='xl:mx-[150px] md:mx-12 mx-9 font-custom'>
            {/* Speaker ZX9 */}
            <div className='flex bg-deepOrange rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg text-white md:h-[620px] h-[580px] mb-96 lg:justify-start justify-center'> 
                <img src='./assets/home/desktop/pattern-circles.svg' className='relative  lg:w-[900px] md:w-[100%] w-full lg:-ml-14 md:-mt-[200px] -mt-8 lg:h-[944px] md:h-[740px] h-[400px]'/>
                {/* Mobile View */}
                <img src={product6.image.mobile} className='absolute w-[100px]  mx-[70px] my-28 md:hidden'/>
                {/* Tablet View */}
                <img src={product6.image.tablet} className='absolute md:w-[150px] md:mt-10 hidden md:block lg:hidden'/>
                {/* Desktop View */}
                <img src={product6.image.desktop} className='absolute xl:w-[400px] lg:w-[350px] lg:h-[490px] lg:mt-[130px] xl:mx-[195px] lg:mx-28  hidden lg:block' />
                <div className='absolute lg:text-start text-center lg:mx-[50%] md:mx-48 md:my-64 lg:my-36 my-72'>
                    <h3 className='lg:w-1 md:text-[56px] text-[28px] font-[700] leading-[58px] tracking-[2px] md:mb-6 '>{product6.name}</h3>
                    <p className='md:w-[335px] w-[200px] font-[400] md:text-[15px] text-[13px] leading-[25px] mb-6 lg:mx-0 mx-6'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to={`/speakers/${product6.id}`}><button className='bg-black hover:bg-deeperGrey font-[700] text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button></Link>
                </div>
            </div>
            {/* Speaker ZX7 */}
            <div className='flex -mt-80 mb-20 items-center justify-start'>
                {/* Mobile View */}
                <img src={product5.image.mobile} className='w-full h-full md:hidden rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
                {/* Tablet View */}
                <img src={product5.image.tablet} className='w-full hidden md:block lg:hidden rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
                {/* Desktop View */}
                <img src={product5.image.desktop} className='w-full h-full hidden lg:block rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
                <div className='absolute xl:ml-28 lg:ml-20 md:ml-9 ml-5 md:mb-0 mb-5 '>
                    <h3 className='font-[700] md:text-[28px] text-[21px] leading-[38px] tracking-[2px] mb-5'>{product5.name}</h3>
                    <Link to={`/speakers/${product5.id}`}><button className='hover:bg-black hover:text-white font-[700] md:text-[13px] text-[10px] leading-[17px] tracking-[1px] border-[0.5px] py-3 px-7 border-black'>SEE PRODUCT</button></Link>
                </div>
            </div>
            {/* Earphones YX1 */}
            <div className='flex md:flex-row flex-col lg:gap-10 md:gap-7  gap-9 lg:mb-40 mb-20 items-start'>
                {/* Mobile View */}
                <img src={product1.image.mobile} className='w-full h-full md:hidden rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
                {/* Tablet View */}
                <img src={product1.image.tablet} className='w-[49%] hidden md:block lg:hidden rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
                {/* Desktop View */}
                <img src={product1.image.desktop} className=' w-[50%] h-full hidden lg:block rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
                <div className='xl:p-28 lg:p-20 md:px-9  p-5 md:py-24 lg:w-[50%] md:w-[49%] w-full xl:h-full lg:h-[275px] md:h-[310px] h-[160px] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg bg-deepGrey'>
                    <h3 className='font-[700] md:text-[28px] text-[21px] leading-[38px] tracking-[2px] mb-5'>{product1.name}</h3>
                    <Link to={`/earphones/${product1.id}`}><button className=' hover:bg-black hover:text-white font-[700] md:text-[13px] text-[10px] leading-[17px] tracking-[1px] border-[0.5px] py-3 px-7 border-black'>SEE PRODUCT</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Subdetails
