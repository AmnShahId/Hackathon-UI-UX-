import React from 'react'

const Hero3 = () => {
  return (
    <div>
      {/* Hero Section with Background and Form */}
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-[#f6f6f6] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg w-full md:w-[1000px] h-[350px] pt-24 px-4"> 
          <h2 className="text-3xl font-bold mb-4 mt-[-24px] text-center text-[#2a254b]">
            Join the club and get the benefits
          </h2>
          <p className="mb-[18px] text-center font-Satoshi text-[#2A254B]">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-center  items-center md:items-center">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="bg-[#F9F9F9] rounded-md px-4 py-4 w-full md:w-[500px] mb-4 md:mb-0" 
            />
            <button className="bg-[#2A254B] text-white rounded-md  pr-20 pl-12 r py-1 w-full md:w-10">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Second Section with Text and Image */}
      <div className="flex flex-col md:flex-row items-center mx-auto w-full md:w-[1200px] py-4 md: px-4">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-2xl mb-4">From a studio in London to a global brand with over 400 outlets</h1>
          <p className="mb-6 text-base font-Satoshi">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
          </p>
          <p className="mt-10 font-Satoshi mb-10">
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
          </p>
          <button className="bg-white text-[#2A254B] border border-[#2A254B] px-9 py-4 mb-4 text-sm hover:bg-[#F3F4F6]">
            Get in touch
          </button>
        </div>
        <div className=" md:mt-0 md:w-1/2 flex justify-center">
          <img src="about.webp" alt="fosa" className="w-full md:w-[650px] md:h-[600px]" />
        </div>
      </div>
    </div>
  )
}

export default Hero3
