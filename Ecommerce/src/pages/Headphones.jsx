/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Shop from '../components/Shop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Audiogear from '../components/Audiogear';

function Headphones() {
  const product4 = {
    id: 4,
    name: 'XX99 MARK II HEADPHONES',
  };

  const product3 = {
    id: 3,
    name: 'XX99 MARK I HEADPHONES',
  };

  const product2 = {
    id: 2,
    name: 'XX59 HEADPHONES',
  };

  return (
    <div>
      <div className='bg-lighterBlack'>
        <Header />
        <hr className='mx-[150px]' />
        <h2 className='text-white font-[700] text-[40px] leading-[44px] tracking-[1.4px] text-center py-20'>HEADPHONES</h2>
      </div>

      <div className='grid grid-cols-2 gap-20 mt-40 mb-16 mx-[150px]'>
        {/* Product 4 */}
        <img src='./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg' className='w-[100%] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg' />
        <div className='font-custom m-24'>
          <h3 className='text-[14px] text-deepOrange font-[400] leading-[19px] tracking-[10px] '>NEW PRODUCT</h3>
          <h1 className='text-[40px] font-[700] leading-[44px] tracking-[1.4px] py-8'>{product4.name}</h1>
          <p className='w-[450px] text-[15px] leading-[25px] font-[400] opacity-[70%] mb-9'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
          <Link to={`/headphones/${product4.id}`}>
            <button className='bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button>
          </Link>
        </div>

        {/* Product 3 */}
        <div className='font-custom my-24'>
          <h1 className='text-[40px] font-[700] leading-[44px] tracking-[1.4px] py-8'>{product3.name}</h1>
          <p className='w-[430px] text-[15px] leading-[25px] font-[400] opacity-[70%] mb-9'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
          <Link to={`/headphones/${product3.id}`}>
            <button className='bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button>
          </Link>
        </div>
        <img src='./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg' className='w-[100%] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg' />

        {/* Product 2 */}
        <img src='./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg' className='w-[100%] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg' />
        <div className='font-custom m-24'>
          <h1 className='text-[40px] font-[700] leading-[44px] tracking-[1.4px] py-8'>{product2.name}</h1>
          <p className='w-[450px] text-[15px] leading-[25px] font-[400] opacity-[70%] mb-9'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
          <Link to={`/headphones/${product2.id}`}>
            <button className='bg-deepOrange hover:bg-lightOrange text-white text-[13px] leading-[17px] tracking-[1px] py-3 px-7'>SEE PRODUCT</button>
          </Link>
        </div>
      </div>

      <Shop />
      <Audiogear />
      <Footer />
    </div>
  );
}

export default Headphones;