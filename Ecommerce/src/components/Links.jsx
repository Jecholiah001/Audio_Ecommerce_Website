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



function Links() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/headphones' element={<Headphones/>}/>
                <Route path='/speakers' element={<Speakers/>}/>
                <Route path='/earphones' element={<Earphones/>}/> 
                <Route path='/headphones/:id' element={<HeadphoneDetails/>}/>    
                <Route path='/speakers/:id' element={<SpeakerDetails/>}/>
                <Route path='/earphones/:id' element={<EarphoneDetails/>}/>
            </Routes>
        </>
    )
}

export default Links
