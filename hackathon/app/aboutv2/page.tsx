import React from 'react'
import Navbar from '../Components/Header'
import Footer from '../Components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div>
          <Navbar/>
       <div className='flex flex-row justify-center items-center  bg-[#F3F4F6] py-6'>
       <Image src="404.webp" alt="n" className='h-96'/>
       <div className='ml-7'>
       <h1 className='text-5xl font-extrabold text-[#2A254B] mt-4 mb-4'>OOPS!</h1>
       <p className='text-xl mt-2 text-[#2A254B] mb-5 font-Satoshi'>Looks like Big Foot has broken the link</p>
       <Link href="/"><button className='bg-[#2A254B] text-white font-Satoshi px-5 py-3 rounded hover:bg-[#3A336B]'>Back to Homepage</button></Link>
       </div>
       </div>
       
       
        
        
        

        <Footer/>
    </div>
  )
}

export default page