/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Headphones from '../pages/Headphones'
import Speakers from '../pages/Speakers'
import Earphones from '../pages/Earphones'
import SpeakerDetails from '../pages/SpeakerDetails'
import EarphoneDetails from '../pages/EarphoneDetails'
import HeadphoneDetails from '../pages/HeadphoneDetails'
import Checkout from '../pages/Checkout'
import Cart from '../pages/Cart'


function Links({data}) {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home data={data}/>}/>
                <Route path='/headphones' element={<Headphones data={data}/>}/>
                <Route path='/speakers' element={<Speakers data={data}/>}/>
                <Route path='/earphones' element={<Earphones data={data}/>}/> 
                <Route path='/headphones/:id' element={<HeadphoneDetails data={data}/>}/>    
                <Route path='/speakers/:id' element={<SpeakerDetails data={data}/>}/>
                <Route path='/earphones/:id' element={<EarphoneDetails data={data}/>}/>
                <Route path='/cart' element={<Cart data={data}/>} /> 
                <Route path='/checkout' element={<Checkout data={data}/>}/> 
            </Routes>
        </>
    )
}

export default Links
