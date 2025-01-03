import React from 'react'
import Navbar from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
       <div className='flex flex-row justify-center items-center  bg-[#F3F4F6] py-6'>
       <img src="404.webp" alt="n" className='h-96'/>
       <div className='ml-7'>
       <h1 className='text-5xl font-extrabold text-[#2A254B] mt-4 mb-4'>OOPS!</h1>
       <p className='text-xl mt-2 text-[#2A254B] mb-5 font-Satoshi'>Looks like Big Foot has broken the link</p>
       <a href="/"><button className='bg-[#2A254B] text-white font-Satoshi px-5 py-3 rounded hover:bg-[#3A336B]'>Back to Homepage</button></a>
       </div>
       </div>
       
       
        
        
        

        <Footer/>
        </div>
    
  )
}

export default page