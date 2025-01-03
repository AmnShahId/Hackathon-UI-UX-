
'use client'

import React, { useState } from 'react';
import Navbar from '../Components/Header';
import Footer from '../Components/Footer';
import { TbTruck, TbTruckDelivery } from 'react-icons/tb';
import { PiPlantLight } from 'react-icons/pi';
import { IoCardOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import BackToTopButton from '../Components/Backtotop';

const Page = () => {
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
            aria-label="Close banner"
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
      <Navbar />

      {/* Section 1: From London to Global Brand */}
      <div className="flex flex-col md:flex-row mx-auto h-[700px] w-full max-w-screen-xl py-16 px-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[#2A254B] mb-4">From a studio in London to a global brand with over 400 outlets</h1>
          <p className="mb-6 text-base font-Satoshi">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
          </p>
          <p className="mt-10 font-Satoshi mb-10">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white text-[#2A254B] border border-[#2A254B] my-16 px-9 py-4 text-sm hover:bg-[#F3F4F6]">Get in touch</button>
        </div>
        <img src="about.webp" alt="fosa" className="w-full md:w-[610px] mx-auto h-[700px]" />
      </div>

      {/* Section 2: Our Service */}
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl px-4 py-16">
        <img src="service.webp" alt="no way" className="w-full md:w-[615px] mx-auto" />
        <div className="mt-16 md:mt-0 md:ml-10">
          <h1 className="text-2xl font-bold text-[#2A254B] mb-4">Our service isn’t just personal, it’s actually hyper personally exquisite</h1>
          <p className="mb-6 text-base font-Satoshi">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
          <p className="mt-10 font-Satoshi mb-10">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white text-[#2A254B] border border-[#2A254B] my-16 px-9 py-4 text-sm hover:bg-[#F3F4F6]">Get in touch</button>
        </div>
      </div>

      {/* Section 3: What Makes Our Brand Different */}
      <h1 className="text-[#2A254B] text-2xl text-center pt-28 pb-12">What makes our brand different</h1>
            <div className='flex flex-col md:flex-row justify-center pl-4 md:pl-16 pr-4 md:pr-7 gap-8 items-center'>
              {/* Feature 1 */}
              <div className='text-center'>
                <TbTruckDelivery className='text-3xl mb-4' />
                <h3 className='mb-3 text-xl'>Next day as standard</h3>
                <p className='text-xs font-Satoshi'>
                  Order before 3pm and get your order the next day as standard
                </p>
              </div>
      
              {/* Feature 2 */}
              <div className='text-center'>
                <IoIosCheckmarkCircle className='text-3xl mb-4' />
                <h3 className='mb-3 text-xl'>Made by true artisans</h3>
                <p className='text-xs font-Satoshi'>
                  Handmade crafted goods made with real passion and craftsmanship
                </p>
              </div>
      
              {/* Feature 3 */}
              <div className='text-center'>
                <IoCardOutline className='text-3xl mb-4' />
                <h3 className='mb-3 text-xl'>Unbeatable prices</h3>
                <p className='text-xs font-Satoshi'>
                  For our materials and quality you won't find better prices anywhere
                </p>
              </div>
      
              {/* Feature 4 */}
              <div className='text-center'>
                <PiPlantLight className='text-3xl mb-4' />
                <h3 className='mb-3 text-xl'>Recycled packaging</h3>
                <p className='text-xs font-Satoshi'>
                  We use 100% recycled packaging to ensure our footprint is manageable
                </p>
              </div>
            </div>

      {/* Section 4: New Ceramics */}
      <div className="mt-36 px-4">
        <h1 className="text-3xl font-semibold text-[#2A254B] ml-16 pb-7">New Ceramics</h1>
        <div className='grid font-Satoshi text-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pl-16 w-[1100px]'>
        <div >
          <img src="Photo.webp" alt="" />
          <p className='mb-1 mt-2'>The Dandy Chair</p>
          <p>£250</p>
        </div>
        <div >
          <img src="new1.webp" alt="image" />
          <p className='mb-1 mt-2'>Rustic Vase Set</p>
          <p>£155</p>
        </div>
        <div >
          <img src="Photo3.webp" alt="image" />
          <p className='mb-1 mt-2'>The Silky Vase</p>
          <p>£125</p>
        </div>
        <div>
          <img src="Photo4.webp" alt="image" />
          <p className='mb-1 mt-2'>The Lucy Lamp</p>
          <p>£399</p>
        </div>
      </div>
        <div className="flex justify-center">
          <button className="bg-white text-[#2A254B] border font-Satoshi border-[#2A254B] my-16 py-4 px-8 text-sm hover:bg-[#F3F4F6]">View collection</button>
        </div>
      </div>

      {/* Section 5: Join the Club */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-[#f6f6f6] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg w-[90%] max-w-[1000px] h-[350px] pt-24">
          <h2 className="text-3xl font-bold mb-4 mt-[-24px] text-center text-[#2a254b]">Join the club and get the benefits</h2>
          <p className="mb-[18px] text-center font-Satoshi text-[#2A254B] px-8 md:px-52">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-[#F9F9F9] rounded-md px-4 py-4 w-[80%] sm:w-[500px]"
            />
            <button className="bg-[#2A254B] text-white rounded-md px-10 py-2 w-[80%] sm:w-auto">Sign Up</button>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Page;
