/* eslint-disable no-unused-vars */
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Links from './components/Links'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [product, setProduct] = useState([])

useEffect(()=>{
  const searchProduct = async() =>{
    try {
      const response = await axios.get('/data.json')
      const data = await response.data
      setProduct(data)

  } 

  catch (error){
  console.error('No Results',error)
  }
  }
  searchProduct()
}, [])
    

  return (
    <>
      <BrowserRouter>
        <Links data={product}/>
      </BrowserRouter>
    </>
  )
}

export default App
