import Image from 'next/image'
import React from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import { IoCardOutline } from 'react-icons/io5'
import { PiPlantLight } from 'react-icons/pi'
import { TbTruckDelivery } from 'react-icons/tb'
import BackToTopButton from './Backtotop'

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='px-4 md:px-14 ml-4 md:ml-12'>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Left Column */}
          <div className='bg-[#2A254B] mt-16 px-8 pt-12 w-full md:w-[500px] h-auto md:h-[700px] py-16'> {/* Increased padding for Y-axis */}
            <p className='text-[#FFFFFF] text-3xl'>
              The furniture brand for the future, with timeless designs
            </p>
            <button className='mt-10 text-sm text-[#FFFFFF] p-4 px-6 bg-[#494465] hover:bg-white hover:text-black font-Satoshi'>
              View collection
            </button>
            <p className='text-[#FFFFFF] pt-8 md:pt-80 font-Satoshi'>
              A new era in eco-friendly furniture with Avion, the French luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies
            </p>
          </div>

          {/* Right Image */}
          <Image
            src="Right Image.webp"
            alt="images"
            className='flex pt-8 md:pt-[60px] w-full md:w-[500px] mt-4 md:mt-1 md:h-[760px] ' /* Ensures height is auto and adapts */
          />
        </div>
      </div>

      {/* Section Title */}
      <h1 className='text-[#2A254B] flex justify-center font-semibold pt-28 pl-16 text-3xl pb-12'>
        What makes our brand different
      </h1>

      {/* Feature Icons and Text */}
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

      <BackToTopButton />
    </div>
  )
}

export default Hero
