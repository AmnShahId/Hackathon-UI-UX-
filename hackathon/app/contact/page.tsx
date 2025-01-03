'Use client'
import Navbar from '../Components/Header'
import Footer from '../Components/Footer'
import React, { useState } from 'react';
import { TbTruck, TbTruckDelivery } from 'react-icons/tb';
import { PiPlantLight } from 'react-icons/pi';
import { IoCardOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const page = () => {
      const [showBanner, setShowBanner] = useState(true);
  return (
    <div>
        {showBanner && (
                <div className="relative flex items-center font-Satoshi text-sm text-white bg-[#2A254B] px-4 py-1 space-x-1">
                  <TbTruck className="text-2xl" />
                  <p>Free delivery on all orders over €50 with code easter at checkout</p>
                  <button
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-white hover:text-white"
                    onClick={() => setShowBanner(false)}
                    aria-label="Close banner" // Added for accessibility
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}
        
        <Navbar/>

<h1 className='text-4xl text-[#2A254B] my-16 ml-16'>Contact Us</h1>
    <div className='mx-48 font-Satoshi'>
    <p>Name</p>
    <input type="text" className=' shadow-md rounded-lg bg-white border-2 w-full h-12 mt-3 mb-3' /></div>
<div className='mx-48 font-Satoshi'>
  <p>Email</p>
  <input type="email" className=' shadow-md rounded-lg bg-white border-2 w-full h-12 mt-3 mb-3' />
</div>
<div className='mx-48 font-Satoshi'>
  <p>Message</p>
  <input type="text"  className=' shadow-md rounded-lg bg-white border-2 w-full h-52 mt-3 mb-3'  />
</div>
<button className='bg-[#2A254B] text-white font-Satoshi mx-48 px-96 py-2 rounded mb-8'>Send Message</button>
<div className="relative h-[500px] ">
        <div className="absolute inset-0 bg-[#f6f6f6] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg  w-[1000px] h-[350px] pt-24"> {/* Updated width here */}
          <h2 className="text-3xl font-bold mb-4 mt-[-24px] text-center text-[#2a254b]">Join the club and get the benefits</h2> {/* Centered the heading */}
          <p className="mb-[18px] text-center font-Satoshi text-[#2A254B] px-52">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p> {/* Centered the paragraph */}
          <div className="flex flex-col md:flex-row pl-40 h-16 font-Satoshi text-sm" > {/* Made the form responsive */}
            <input type="email" placeholder="your@email.com" className=" bg-[#F9F9F9]   md:rounded-l-md px-4 py-4 w-[500px] " />
            <button className="bg-[#2A254B] text-white  md:rounded-r-md px-10 py-2  focus:outline-none focus:ring-2 w-5 md:w-auto">Sign Up</button>
          </div>
        </div>
      </div>
      <h1 className='text-[#2A254B] flex justify-center pt-28 font-semibold text-3xl pb-12 '>What makes our brand different</h1>
      <div className='flex justify-center pl-16 pr-7 gap-3 items-center pb-16'>
        <div >
        <TbTruckDelivery className='text-3xl  mb-4'/>
        <h3 className='mb-3 text-xl'>Next day as standard</h3>
        <p className='text-xs font-Satoshi'> Order before 3pm and get your order the next day as standard</p></div>
        <div>
        <IoIosCheckmarkCircle className='text-3xl mb-4 '/>
        <h3 className='mb-3 text-xl'>Made by true artisans</h3>
        <p className='text-xs font-Satoshi'>Handmade crafted goods made with real passion and craftsmanship</p>
        </div>
        <div className='pr-2'>
        <IoCardOutline className='text-3xl  mb-4'/>
        <h3 className='mb-3 text-xl'>Unbeatable prices</h3>
        <p className='text-xs font-Satoshi'>For our materials and quality you won't find better prices anywhere</p>
        </div>
        <div>
        <PiPlantLight className='text-3xl  mb-4'/>
        <h3 className='mb-3 text-xl'>Recycled packaging</h3>
        <p className='text-xs font-Satoshi'>We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>
      </div>

        <Footer/>
    </div>
  )
} 

export default page