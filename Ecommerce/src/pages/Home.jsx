/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Subdetails from '../components/Subdetails'
import Audiogear from '../components/Audiogear'
import Shop from '../components/Shop'

function Home({data}) {
    return (
        <div>
            <div className='bg-lighterBlack'>
            <Header data={data}/>
            <hr className='text-gray-500 opacity-15 xl:mx-[150px] lg:mx-12 mx-9'/>
            <Hero/>
            </div>
            <Shop/>
            <Subdetails/>
            <Audiogear/>
            <Footer/>
        </div>
    )
}

export default Home
