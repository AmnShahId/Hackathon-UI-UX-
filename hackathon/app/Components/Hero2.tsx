import Image from 'next/image'
import React from 'react'
import BackToTopButton from './Backtotop'

const Hero2 = () => {
  return (
    <div className='md:mx-[-16px]'>
      <div>
        <h1 className='pl-16 mt-36 text-3xl font-semibold text-[#2A254B] pb-7 ' >New Ceramics</h1>
      </div>
      
      {/* Updated grid for responsiveness */}
      <div className='grid font-Satoshi text-xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pl-16 w-[1100px]'>
        <div >
          <img src="Photo.webp" alt="" />
          <p className='mb-1 mt-2'>The Dandy Chair</p>
          <p>£250</p>
        </div>
        <div >
          <Image src="new1.webp" alt="image" />
          <p className='mb-1 mt-2'>Rustic Vase Set</p>
          <p>£155</p>
        </div>
        <div >
          <Image src="Photo3.webp" alt="image" />
          <p className='mb-1 mt-2'>The Silky Vase</p>
          <p>£125</p>
        </div>
        <div>
          <Image src="Photo4.webp" alt="image" />
          <p className='mb-1 mt-2'>The Lucy Lamp</p>
          <p>£399</p>
        </div>
      </div>

      <div className='flex justify-center'>
        <button className='bg-white text-[#2A254B] border font-Satoshi border-[#2A254B] my-16 py-4 px-8 text-sm hover:bg-[#F3F4F6]'>View collection</button>
      </div>
      
      <h1 className='text-3xl font-light pl-16 text-[#2A254B] font-Satoshi'>Our Popular Products</h1>
      
      <div className=' md:flex md:ml-16 mt-5 gap-6'>
     
      <div className='text-xl  font-Satoshi mt-7 ml-16 md:ml-0'>
      <Image src="Large.webp" alt="image" className='w-[500px] h-80' />
  <p className='my-2'>The Poplar suede sofa</p>
  <p className=''>£980</p>
  </div>
  
      
      <div className='text-xl block font-Satoshi mt-7 ml-16 md:ml-0'>
      <img src="again.webp" alt="image" className='h-80' />
  <p className='my-2'>The Dandy chair</p>
  <p className=''>£250</p>
  </div>
  
      <div className='text-xl font-Satoshi mt-7 ml-16 md:ml-0'>
      <Image src="Parent.webp" alt="image" className='h-80' />
  <p className='my-2'>The Dandy Chair</p>
  <p className=''>£980</p>
  
</div>

  </div>


<div className='flex justify-center font-Satoshi'>
  <button className='bg-white text-[#2A254B] border border-[#2A254B] my-16 px-9 py-4 text-sm hover:bg-[#F3F4F6]'>
    View Collection
  </button>
</div>

      
      <BackToTopButton/>
    </div>
  )
}

export default Hero2
