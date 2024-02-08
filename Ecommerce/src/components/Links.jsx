/* eslint-disable no-unused-vars */
import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Headphones from '../pages/Headphones'
import Speakers from '../pages/Speakers'
import Earphones from '../pages/Earphones'
import Speaker1 from '../pages/Speaker1'
import Earphone from '../pages/Earphone'
import Speaker2 from '../pages/Speaker2'
import Headphone1 from '../pages/Headphone1'
import Headphone2 from '../pages/Headphone2'
import Headphone3 from '../pages/Headphone3'


function Links() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/headphones' element={<Headphones/>}/>
                <Route path='/speakers' element={<Speakers/>}/>
                <Route path='/earphones' element={<Earphones/>}/>     
                <Route path='/speaker1' element={<Speaker1/>}/>
                <Route path='/speaker2' element={<Speaker2/>}/>
                <Route path='/earphone' element={<Earphone/>}/>
                <Route path='/headphone1' element={<Headphone1/>}/>
                <Route path='/headphone2' element={<Headphone2/>}/>
                <Route path='/headphone3' element={<Headphone3/>}/>         
            </Routes>
        </>
    )
}

export default Links
