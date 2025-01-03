import React from 'react'
import Navbar from '../Components/Header'
import Footer from '../Components/Footer'
import BackToTopButton from '../Components/Backtotop'





const page = () => {
  return (
    <div>
        <Navbar/>

         <div className='shadow-md rounded-lg bg-white mx-52 pl-7'>
            <div className='py-10 font-bold text-3xl'>
                <h1 className='text-[#2A254B]'>
                    Your Shopping Cart 
                </h1>
                </div>
                <div className='flex gap-48'>
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                <hr />
                <div className='mt-8 flex justiy-center mb-4'>
                
                    <img src="graystone-vase.webp" alt="hmmm" className='w-12 h-16'/>
                    
                    <div>
                    <h3 className='font-bold ml-4 '>Graystone vase</h3>
                    <p className='ml-4 font-Satoshi text-sm '>A timeless ceramic</p>
                    <p className='ml-4 font-Satoshi text-sm'>vase with a tri-color</p>
                    <p className='ml-4 font-Satoshi text-sm'>grey glaze.</p>
                    <p className='ml-4 mb-5 font-Satoshi text-sm'>£85</p></div>
                    
                    <p className='ml-[90px] font-Satoshi text-sm'>1</p>
                    <p className='ml-[230px] font-Satoshi text-sm'>£85</p>
                    
                </div>
                <hr />
                
                <div className='mt-8 flex justiy-center mb-4'>
                
                <img src="basic-white-vase.webp" alt="hmmm" className='w-12 h-16'/>
                
                <div>
                <h3 className='font-bold ml-4 '>Basic white vase</h3>
                <p className='ml-4 font-Satoshi text-sm'>Beautiful and simple,</p>
                <p className='ml-4 font-Satoshi text-sm'>this is one for the</p>
                <p className='ml-4 font-Satoshi text-sm'>classics</p>
                <p className='ml-4 mb-5 font-Satoshi text-sm'>£125</p></div>
                
                <p className='ml-[90px] font-Satoshi text-sm'>1</p>
                <p className='ml-[230px] font-Satoshi text-sm'>£85</p>
                
            </div>
            <hr />
            <div className='flex justify-between'>
            <p className='mt-10 font-Satoshi text-sm'>Taxes and shipping are calculated at checkout</p>
            <div className='mr-7 font-Satoshi'>
            <p className='mt-7 text-sm'>Subtotal</p>
            <p className='text-2xl font-bold text-[#2A254B] mb-10'>£210</p>
            </div>
            </div>
            <button className='bg-[#2A254B] text-white px-[310px] py-3 rounded mb-4 font-Satoshi text-sm hover:bg-[#3A3475]'>Add New Product to Cart</button>
            <button className='bg-[#2A254B] text-white px-[342px] py-3 rounded mb-8 mt-4 font-Satoshi text-sm hover:bg-[#3A3475]'>Go to checkout</button>
         </div>
  

        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default page