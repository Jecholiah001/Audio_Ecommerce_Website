/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect} from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useCart } from '../components/CartContext'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';


const Checkout = () => {
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [vat, setVat] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { cart, clearCart} = useCart();
  const [paymentMethod, setPaymentMethod] = useState('eMoney');
  const firstCartItem = cart[0];
  


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Calculate the total based on the items in the cart
  const calculateTotal = () => {
    let totalAmount = 0;
    for (const product of cart) {
      totalAmount += product.price * product.quantity;
    }
    setTotal(totalAmount);

    // Calculate shipping (1% of total)
    const shippingAmount = totalAmount * 0.01;
    setShipping(shippingAmount);

    // Calculate VAT (20% of total)
    const vatAmount = totalAmount * 0.2;
    setVat(vatAmount);

    // Calculate grand total (total + shipping)
    const grandTotalAmount = totalAmount + shippingAmount;
    setGrandTotal(grandTotalAmount);
  };


  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value );
  };

  const onSubmit = handleSubmit(() => {
    setShowModal(true);
  });
  // Call the calculateTotal function when the component mounts or when the cart changes
  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const handleBackToHome = () => {
    // Clear the cart
    clearCart()
  }
    
  return (
    <>
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black opacity-50 z-10"
        />
      )}
      <Header/>
        <div className="bg-deepGrey">
          <Link to='/'>
            <button className='xl:ml-[150px] md:ml-12 ml-9 lg:mt-20 mt-10 text-[15px] font-[400]  leading-[25px] opacity-[50%]'>Go Back</button>
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col bg-deepGrey pt-12 pb-28 xl:px-[150px] md:px-12 px-9 xl:gap-9 lg:gap-5 md:gap-8 font-custom">
          <div className="bg-white xl:w-[700px] lg:w-[630px] xl:p-16 lg:px-5 p-10 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
            <h1 className="text-[32px] font-[700] leading-[36px] tracking-[1.1px] mb-8">CHECKOUT</h1>
              {/* Billing Details */}
              <div className="mb-16">
                <h2 className="text-[13px] font-[700] leading-[25px] tracking-[1px] text-deepOrange mb-6">BILLING DETAILS</h2>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-2">
                    <div className="flex  md:flex-row flex-col gap-2 md:gap-32">
                      <h3 className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">Name</h3>
                      {errors.name?.type === 'required' && (
                        <p className='text-error text-[12px] text-red-600'>This field is required</p>
                      )}
                    </div>
                    <input type="text" placeholder="Afua Mensah" {...register('name', { required: true })} className={`border md:w-[280px] py-2 pl-5 mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg placeholder:text-[12px] placeholder-opacity-[50%] ${ errors.name ? 'border-red-600' : 'border-deepGrey'}`}/>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex md:flex-row flex-col gap-2 md:gap-[75px]">
                      <h3 className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">Email Address</h3>
                      {errors.email?.type === 'required' && (
                        <p className='text-error text-[12px]  text-red-600'>This field is required</p>
                      )}
                      {errors.email?.type === 'pattern' && (
                        <p className='text-error text-[12px]  text-red-600 md:ml-8'>Wrong format</p>
                      )}
                    </div>
                    <input type="text"  placeholder="afuamensah@gmail.com" {...register('email', {required: true,pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,})} className={`border md:w-[280px] py-2 pl-5 mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg placeholder:text-[12px] placeholder-opacity-[50%] ${ errors.email ? 'border-red-600' : 'border-deepGrey'}`}/>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="flex md:flex-row flex-col gap-2 md:gap-[70px]">
                      <h3 className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">Phone Number</h3>
                      {errors.phone?.type === 'required' && (
                      <p className='text-error text-[12px]  text-red-600'>This field is required</p>
                      )}
                    </div>
                    <input type="text"  placeholder=" +233241234567" {...register('phone', { required: true })} className={`border md:w-[280px] py-2 pl-5 mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg placeholder:text-[12px] placeholder-opacity-[50%] ${ errors.phone ? 'border-red-600' : 'border-deepGrey'}`}/>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mb-16">
                <h2 className="text-[13px] font-[700] leading-[25px] tracking-[1px] text-deepOrange mb-6">SHIPPING INFO</h2>
                <div className="flex flex-col space-y-2 mb-6">
                  <div className="flex md:flex-row flex-col gap-2 md:gap-[425px] lg:gap-[400px]">
                    <h3 className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">Address</h3>
                    {errors.address?.type === 'required' && (
                    <p className='text-error text-[12px]  text-red-600'>This field is required</p>
                    )}
                  </div>
                  <input type="text" placeholder="Adenta 5th Avenue" {...register('address', { required: true })} className={`border w-full py-2 pl-5 mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg placeholder:text-[12px] placeholder-opacity-[50%] ${ errors.address ? 'border-red-600' : 'border-deepGrey'}`}/>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  <div className="flex flex-col space-y-2">
                    <div className="flex md:flex-row flex-col gap-2 md:gap-[115px] lg:gap-[100px]">
                      <h3 className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">Zip Code</h3>
                      {errors.zipCode?.type === 'required' && (
                      <p className='text-error text-[12px] text-red-600'>This field is required</p>
                      )}
                    </div>
                    <input type="text"  placeholder="10001" {...register('zipCode', { required: true })}className={`border w-full py-2 pl-5 mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg placeholder:text-[12px] placeholder-opacity-[50%] ${ errors.address ? 'border-red-600' : 'border-deepGrey'}`}/>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex md:flex-row flex-col gap-2 md:gap-36 lg:gap-32 ">
                      <h3 className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">City</h3>
                      {errors.city?.type === 'required' && (
                      <p className='text-error text-[12px]  text-red-600'>This field is required</p>
                      )}
                    </div>

                    <input type="text"  placeholder="Accra"  {...register('city', { required: true })} className={`border md:w-[280px] py-2 pl-5 mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg placeholder:text-[12px] placeholder-opacity-[50%] ${ errors.city ? 'border-red-600' : 'border-deepGrey'}`}/>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="flex md:flex-row flex-col gap-2 md:gap-[120px] lg:gap-[109px]" >
                      <h3 className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">Country</h3>
                      {errors.country?.type === 'required' && (
                      <p className='text-error text-[12px]  text-red-600'>This field is required</p>
                      )}
                    </div>
                    <input type="text" placeholder="Ghana"  {...register('country', { required: true })} className={`border md:w-[280px] py-2 pl-5 mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg placeholder:text-[12px] placeholder-opacity-[50%] ${ errors.country ? 'border-red-600' : 'border-deepGrey'}`}/>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h2 className="text-[13px] font-[700] leading-[25px] tracking-[1px] text-deepOrange mb-6">PAYMENT DETAILS</h2>
                  <div className="flex flex-col space-y-4">
                    <div className="flex md:flex-row flex-col justify-between w-full">
                      <span className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">Payment Method</span>
                      <div className="flex flex-col mb-4">
                        <div className="md:w-[280px] p-4 border border-lightgrey hover:border-deepOrange mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
                          <label className="flex items-center"><input type="radio" className=" mr-2 " id='eMoney' value='eMoney' {...register('paymentMethod')} checked={paymentMethod === 'eMoney'} onChange={handlePaymentMethodChange}/><span className="md:text-[14px] text-[13px] font-[700] leading-[19px] tracking-[0.25px]">e-Money</span></label>
                        </div>
                        <div className="md:w-[280px] p-4 border border-lightgrey  hover:border-deepOrange rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg ">
                          <label className="flex items-center"><input type="radio" className="mr-2" id='cashOnDelivery'  value='cashOnDelivery' {...register('paymentMethod')}  checked={paymentMethod === 'cashOnDelivery'} onChange={handlePaymentMethodChange}/><span className="md:text-[14px] text-[13px] font-[700] leading-[19px] tracking-[0.25px]">Cash on Delivery</span></label>
                        </div>
                      </div>
                    </div>

              {errors.paymentMethod && <p>{errors.paymentMethod.message}</p>}
                {paymentMethod === 'eMoney' && (
                  <div className="flex md:flex-row flex-col gap-4">
                    <div className="flex flex-col space-y-2">
                      <div className="flex md:flex-row flex-col gap-2 md:gap-14">
                      <h3 className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">e-Money Number</h3>
                      {errors.eMoneyNumber && (<p className='text-error text-[12px]  text-red-600'>This field is required</p>
                      )}
                      </div>
                      <input type="text" placeholder="0241234567" {...register('eMoneyNumber', { required: true })} className={`border md:w-[280px] py-2 pl-5 mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg placeholder:text-[12px] placeholder-opacity-[50%] ${ errors.phone ? 'border-red-600' : 'border-deepGrey'}`}/>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <div className="flex md:flex-row flex-col gap-2 md:gap-20">
                      <h3 className="text-[12px] font-[700] leading-[16px] tracking-[0.5px]">e-Money Pin</h3>
                      {errors.eMoneyPin && (
                      <p className='text-error text-[12px]  text-red-600'>This field is required</p>
                      )}
                      </div>
                      <input type="text"  placeholder="4321" {...register('eMoneyPin', { required: true })} className={`border md:w-[280px] py-2 pl-5 mb-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg placeholder:text-[12px] placeholder-opacity-[50%] ${ errors.phone ? 'border-red-600' : 'border-deepGrey'}`}/>
                    </div>
                  </div>
                )}
              </div>
        {paymentMethod === 'cashOnDelivery' && (
          <div className='flex lg:items-center lg:justify-between lg:gap-8 my-[30px]'>
            <img
              className='w-[48px] h-[48px]'
              src='/assets/checkout/icon-cash-on-delivery.svg'
              alt=''
            />
            <p className='text-body opacity-50 w-[600px] lg:ml-0 md:ml-3'>
              The "Cash on Delivery" option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
          </div>
        </div>
        {/* SUMMARY */}
        <div className="bg-white p-10  lg:w-1/2 h-full rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
        <h1 className="text-[18px] font-[700] leading-[25px] tracking-[1.3px] mb-8">SUMMARY</h1>
        {cart.map((product, index) => (
        <div key={`${product.id}-${index}`} className="flex my-4 justify-between items-center">
          <div className="flex">
            <img src={product.image.desktop} className="w-20 h-20" alt={product.name}/>
            <div className="flex flex-col ml-4 justify-center">
              <p className="text-[15px] font-[700] leading-[25px]">{product.slug}</p>
              <p className="text-[14px] font-[700] leading-[25px] opacity-[50%]">${product.price}</p>
            </div>
          </div>
          <div className="flex flex-col -mt-6 items-end">
            <p className="text-[15px] font-[700] leading-[25px] opacity-[50%]">x{product.quantity}</p>
          </div>
        </div>
      ))}
      <div className="my-8">
        <div className="flex justify-between ">
          <p className="text-[15px] font-[700] leading-[25px] opacity-[50%]">TOTAL</p>
          <p className="text-[18px] font-[700] leading-[25px]">${total}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-[15px] font-[700] leading-[25px] opacity-[50%]">SHIPPING</p>
          <p className="text-[18px] font-[700] leading-[25px]">${shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-[15px] font-[700] leading-[25px] opacity-[50%]">VAT (INCLUDED)</p>
          <p className="text-[18px] font-[700] leading-[25px]">${vat.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-between mb-8">
        <p className="text-[15px] font-[700] leading-[25px] opacity-[50%]">GRAND TOTAL</p>
        <p className="text-[18px] text-deepOrange font-[700] leading-[25px]">${grandTotal.toFixed(2)}</p>
      </div>
      <button  onClick={(onSubmit)} className=' w-full bg-deepOrange hover:bg-lightOrange text-white md:text-[13px] text-[10px] leading-[17px] tracking-[1px] py-3 px-7 '>CONTINUE & PAY</button>
    </div>
  </div>
  {showModal && (
  <>
  {/* Modal section */}
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='bg-white w-[290px] md:w-[540px] mx-auto my-auto px-8 py-8 rounded-lg'>
        <img className='pt-8 mb-6' src='/assets/checkout/icon-order-confirmation.svg' alt='checkmark'/>
        <h3 className='w-[275px] md:text-[32px] text-[25px] font-[700] leading-[36px] tracking-[1px] mb-4'>THANK YOU FOR YOUR ORDER</h3>
        <p className='md:text-[15px] text-[13px] font-[400] leading-[25px] opacity-[50%] mb-6'>You will receive an email confirmation shortly.</p>
        <div className="flex md:flex-row flex-col mb-10">
          <div className='md:w-[280px] bg-deepGrey  p-6 md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none rounded-t-lg '>
            <div className='flex justify-between items-center pb-3 border-b border-gray-300 mb-3'>
              <div className='flex gap-4 items-center'>
                <img className='w-12 h-12 object-cover rounded' src={firstCartItem?.image.desktop}/>
                  <div className='flex flex-col'>
                    <p className='text-[15px] font-[700] leading-[25px]'>
                      {firstCartItem?.name
                        .replace(/(headphones|speaker|earphones)/i, '')
                        .replace(/(mark)/i, 'MK')
                        .replace(/(wireless)/i, '')
                        .trim()}
                    </p>
                    <p className='text-[14px] font-[700] leading-[25px] opacity-[50%]'>${firstCartItem?.price}</p>
                  </div>
              </div>
              <p className='text-[15px] font-[700] leading-[25px] opacity-[50%]'>x {firstCartItem?.quantity}</p>
            </div>
            {cart.length > 1 && (
              <div className='text-center'>
                <p className='text-[12px] font-[700] leading-[16px] tracking-[-0.21px] opacity-[50%]'>and {cart.length - 1} other item(s)</p>
              </div>
            )}
          </div>
          <div className='md:w-[200px] bg-black px-7 md:pt-12 py-5 md:rounded-br-lg md:rounded-tr-lg md:rounded-bl-none rounded-b-lg '>
            <h5 className='text-white text-[15px] font-[400] leading-[25px] opacity-[50%]'>GRAND TOTAL</h5>
            <p className='text-[18px] font-[700] leading-[25px] text-white'>$ {grandTotal}</p>
          </div>
        </div>
        <Link to='/'><button  onClick={handleBackToHome} className=' w-full bg-deepOrange hover:bg-lightOrange text-white md:text-[13px] text-[10px] leading-[17px] tracking-[1px] py-3 px-7 '>BACK TO HOME</button></Link>
      </div>
    </div>
  </>
  )}
  <Footer/>
  </>
  )
}

export default Checkout
