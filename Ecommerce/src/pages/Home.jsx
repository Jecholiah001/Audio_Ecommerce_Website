/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Shopnow from '../components/Shopnow'
import Data from '../data2.json'
import Footer from '../components/Footer'
import Subdetails from '../components/Subdetails'
import Audiogear from '../components/Audiogear'

function Home() {
    const[data, setData] = useState ([])
    useEffect(() => {
        setData(Data)
    }, [])
    return (
        <div>
            <div className='bg-lighterBlack'>
            <Header/>
            <hr className='mx-[150px]'/>
            <Hero/>
            </div>
            <div className='grid grid-cols-3 mx-[150px]'>
            {
                data.map((card, id)=> (
                    <div key={id}>
                        <Shopnow
                        icon={card.icon}
                        title={card.title}
                        />
                    </div>
                        ))
                    }
            </div>
            <Subdetails/>
            <Audiogear/>
            <Footer/>
        </div>
    )
}

export default Home
