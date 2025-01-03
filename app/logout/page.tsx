import React from 'react'
import Navbar from '../Components/Header'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
       <div className='flex flex-row justify-center items-center px-40  bg-[#F3F4F6] py-6'>
       <img src="logout.webp" alt="n" className='h-52'/>
       <div className='ml-7'>
       <h1 className='text-2xl font-[1000] text-[#2A254B] mt-4 mb-4'>You're Logged Out</h1>
       <p className='text-xl mt-2 text-[#2A254B] mb-5 font-Satoshi'>You have successfully logged out. Come back soon!</p>
       <a href="/"><button className='bg-[#2A254B] text-white font-Satoshi px-5 py-3 rounded hover:bg-[#3A336B]'>Log in Again</button></a>
       </div>
       </div>
       
       
        
        
        

        <Footer/>
        </div>
    
  )
}

export default page