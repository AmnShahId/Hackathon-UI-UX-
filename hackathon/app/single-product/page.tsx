'Use client'

import React from 'react'
import Navbar from '../Components/Header'
import Footer from '../Components/Footer'
import { useState } from 'react'
import { PiPlantLight } from 'react-icons/pi'
import { IoCardOutline } from 'react-icons/io5'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { TbTruckDelivery } from 'react-icons/tb'
import BackToTopButton from '../Components/Backtotop'
import Image from 'next/image'

const page = () => {
    const [quantity, setQuantity] = useState(1);


  

  return (
    <div>
        <Navbar/>

<div className='mt-7 mb-32'>
    <div className='flex'>
        <Image src="chair.webp" alt="chair"  className='w-[590px] ml-7 rounded shadow-lg'/>
        <div className='mx-10'>
        <h1 className='text-4xl text-[#2A254B] font-semibold '>The Dandy Chair</h1>
        <p className='text-[#2A254B] text-xl font-Satoshi mt-2'>£250</p>
        <h3 className='mt-16 ml-8 font-semibold'>Description</h3>
        <p className=' ml-8 font-Satoshi mt-4'>A timeless design, with premium materials features as one of our most popular and classic pieces. The dandy chair is perfect for any stylish living space with both large and smaller leather upholsters.</p>
        <ol className='list-disc ml-12 mt-6 font-Satoshi mb-6'>
            <li>Timeless design</li>
            <li>Premium materials</li>
            <li>Handcrafted upholstery</li>
            <li>Quality infused classic</li>
        </ol>
        <h2 className='font-bold font-Satoshi ml-8'>Dimensions:</h2>
        <ol className='ml-8 font-Satoshi mt-4'>
            <li>Height: 100cm</li>
            <li>Width: 75cm</li>
            <li>Depth: 50cm</li>
        </ol>
        <div className='flex items-center'>
        <div className="flex items-center border border-gray-300 rounded-md ml-8 w-20 py-2 my-6">
  
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
        className="w-16 text-center border-0 focus:outline-none focus:ring-0 appearance-none"
        min="1"
      />
  
    </div>
    <button className='bg-[#2A254B] text-white font-Satoshi px-7 py-4 ml-72'>Add to cart</button>
    </div>
        </div>
    </div>
</div>
<div>
        <h1 className='pl-16 mt-36 text-3xl font-semibold text-[#2A254B] pb-7 ' >You may also like</h1>
      </div>
      <div className='grid grid-cols-4 gap-12 pl-16   w-[1100px]'>
        <Image src="Photo.webp" alt="" />
        <Image src="new1.webp" alt="image" />
        <Image src="Photo3.webp" alt="image" />
        <Image src="Photo4.webp" alt="image" />
      </div>
      <div className='flex gap-32  items-center text-xl font-Satoshi pt-5'>
        <h2 className='ml-16'>The Dancy Chair</h2>

        <h2 className='ml-[-8px]'>Rustic Vase Set</h2>

        <h2 className='ml-[6px]'>The Silky Vase</h2>

        <h2 className='ml-[18px]'>The Lucy Lamp</h2>

      </div>
      <div className='grid grid-cols-4 items-center text-xl font-Satoshi mt-1 '>
        <p className='ml-16'>£250</p>
        <p className='ml-[20px]'>£155</p>
        <p className='ml-[-20px]'>£125</p>
        <p className='ml-[-65px]'>£399</p>
      </div>
   <h1 className='text-[#2A254B] flex justify-center font-semibold  pt-28 text-3xl pb-12 '>What makes our brand different</h1>

<div className='flex justify-center pl-16 pr-7 gap-3 items-cente mb-20'>
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

        <Footer/>
        <BackToTopButton/>

    </div>
  )
}

export default page