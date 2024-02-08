/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Subdetails from '../components/Subdetails'
import Audiogear from '../components/Audiogear'
import Shop from '../components/Shop'

function Home() {
    return (
        <div>
            <div className='bg-lighterBlack'>
            <Header/>
            <hr className='mx-[150px]'/>
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
