/* eslint-disable no-unused-vars */
import React from 'react'

function Subdetails() {
    return (
        <div className='mx-[150px] font-custom'>
            {/* Speaker ZX9 */}
            <div className='flex bg-deepOrange rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg text-white h-[620px] mb-96'> 
                <img src='./assets/home/desktop/pattern-circles.svg' className='relative w-[900px] -ml-14 h-[944px] '/>
                <img src='./assets/home/desktop/image-speaker-zx9.png' className='absolute w-[400px] h-[490px] mt-[130px] mx-[195px]'/>
                <div className='absolute mx-[50%] my-36'>
                    <h3 className='w-1 text-[56px] font-[700] leading-[58px] tracking-[2px] mb-6'>ZX9 SPEAKER</h3>
                    <p className='w-[335px] font-[400] text-[15px] leading-[25px] mb-6'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <button className='bg-black hover:bg-deeperGrey font-[700] text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button>
                </div>
            </div>
            {/* Speaker ZX7 */}
            <div className='flex -mt-80 mb-20'>
                <img src='./assets/home/desktop/image-speaker-zx7.jpg' className='relative w-[100%] h-[320px] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
                <div className='absolute ml-28 my-32'>
                    <h3 className='font-[700] text-[28px] leading-[38px] tracking-[2px] mb-5'>ZX7 SPEAKER</h3>
                    <button className='hover:bg-black hover:text-white font-[700] text-[13px] leading-[17px] tracking-[1px] border-[0.5px] py-3 px-7 border-black'>SEE PRODUCT</button>
                </div>
            </div>
            {/* Earphones YX1 */}
            <div className='flex gap-10 mb-40'>
                <img src='./assets/home/desktop/image-earphones-yx1.jpg' className='w-[50%] h-[320px] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
                <div className='py-32 px-28  w-[50%] h-[320px] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg bg-deepGrey'>
                    <h3 className='font-[700] text-[28px] leading-[38px] tracking-[2px] mb-5'>YX1 EARPHONES</h3>
                    <button className=' hover:bg-black hover:text-white font-[700] text-[13px] leading-[17px] tracking-[1px] border-[0.5px] py-3 px-7 border-black'>SEE PRODUCT</button>
                </div>
            </div>
        </div>
    )
}

export default Subdetails
