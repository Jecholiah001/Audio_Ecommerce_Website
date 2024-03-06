/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Audiogear from '../components/Audiogear';
import Footer from '../components/Footer';
import Shop from '../components/Shop';



function HeadphoneDetails({data}) {
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  const [quantity, setQuantity] = useState(0)
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  useEffect(() => {
    const selectedId = parseInt(id);
    const selectedProduct = data.find((product) => product.id === selectedId);
    setProduct(selectedProduct);
  }, [id, data]);

  return (
    <div className='font-custom'>
      <Header/>
      <Link to='/headphones'><button className='ml-[150px] mt-20 text-[15px] font-[400]  leading-[25px] opacity-[70%]'>Go Back</button></Link>
      <div className=' grid grid-cols-2 gap-20 mt-8 mb-16 mx-[150px]'>
        <img src={product?.image.desktop} className='w-[100%] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg'/>
        <div className='font-custom m-24'>
          <h3 className='text-[14px] text-deepOrange font-[400] leading-[19px] tracking-[10px] '>NEW PRODUCT</h3>
          <h1 className='text-[40px] font-[700]  leading-[44px] tracking-[1.4px] py-8'>{product?.name}</h1>
          <p className='w-[422px] text-[15px] leading-[25px] font-[400] mb-3 opacity-[70%]'>{product?.description}</p>
          <p className='text-[18px] font-[700] leading-[25px] tracking-[1.3px] mt-5'>${product?.price}</p>

          <div className='flex gap-5 my-10'>
            <div className='flex gap-6 bg-deepGrey w-[120px] h-[41px] px-6'>
              <button onClick={decreaseQuantity}className='text-[16px] font-[700]  leading-[18px] tracking-[1px] opacity-[55%]'>-</button><span className='text-[16px] font-[700]  leading-[18px] tracking-[1px] my-3'>{quantity}</span><button onClick={increaseQuantity} className='text-[16px] font-[700]  leading-[18px] tracking-[1px] opacity-[55%]'>+</button>
            </div>
            <Link><button className=' bg-deepOrange hover:bg-lightOrange text-white text-[13px]  leading-[17px] tracking-[1px] py-3 px-7'>ADD TO CART</button>
            </Link>
          </div>
        </div>
      </div>

      <div className='flex mx-[150px]  gap-24'>
        <div className='w-[60%]'> 
          <h3 className=' text-[32px] font-[700] leading-[36px] tracking-[1.1px] my-8'>FEATURES</h3>
          <p className='text-[15px] font-[400]  leading-[25px] opacity-[70%]'>{product?.features}</p>
        </div>
        <div>
          <h3 className='text-[32px] font-[700] leading-[36px] tracking-[1.1px] my-8'>IN THE BOX</h3>
          <div>
            {product?.box.map((detail, index) =>{
                const { quantity, item} = detail 
              return (
                <div key={index} className='flex gap-10 my-2' >
                  <p className='text-[15px] text-deepOrange font-[700]  leading-[25px]'>{quantity}</p>
                  <p className='w-[200px] text-[15px] font-[400]  leading-[25px] opacity-[70%]'>{item}</p>
                </div>
              )
            })}
          </div> 
      </div>
      </div>

      <div className='flex  gap-9 mx-[150px] my-40'>
      <div className='grid grid-cols-1 gap-9'>
        <img src={product?.gallery.first.desktop} className="rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg"/>
        <img src={product?.gallery.second.desktop}className="rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg"/>
      </div>
      <img src={product?.gallery.third.desktop} className="rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg"/>
      </div>

      <div>
        <h1 className='text-[32px] text-center font-[700] leading-[36px] tracking-[1.1px] my-16'>YOU MAY ALSO LIKE</h1>
        <div className='flex gap-7 mx-[150px] mb'>
        {product?.others.map((item, index) =>{
            const {name , image} = item
            const {desktop} = image
          return (
            <div key={index} >
              <img  src={ desktop || product?.image.desktop} className="w-[400px] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg" />
              <h1 className="text-[24px] uppercase text-center font-[700] leading-[33px] tracking-[1.7px] mt-10">{name}</h1>
              <Link><button className=' bg-deepOrange hover:bg-lightOrange text-white text-[13px]  leading-[17px] tracking-[1px] py-3 px-7 my-10 ml-[100px]'>SEE PRODUCT</button>
              </Link>
            </div>
          )
        })}
        </div>
      </div>

      <Shop/>
      <Audiogear/>
      <Footer/>
    </div>
  )
}

export default HeadphoneDetails;