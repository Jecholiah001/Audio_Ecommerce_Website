/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Audiogear from '../components/Audiogear'
import Footer from '../components/Footer'
import Shopnow from '../components/Shopnow'
import Data from '../data2.json'

function Headphone3() {
  const[data, setData] = useState ([])
  useEffect(() => {
      setData(Data)
  }, [])
  return (
    <div>
      <Header/>
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
      <Audiogear/>
      <Footer/>
    </div>
  )
}

export default Headphone3
