import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa'
import BackToTopButton from './Backtotop'

const Footer = () => {
  return (
    <div className='bg-[#2A254B]'>
      <div className='flex flex-col md:flex-row items-start justify-between mb-5 px-4 md:px-16'>
        
        {/* Menu Section */}
        <div>
          <p className='text-white pt-10 mb-4'>Menu</p>
          <nav className='text-white font-Satoshi text-sm'>
            <p className='hover:underline py-1'><Link href="#">New arrivals</Link></p>
            <p className='hover:underline py-1'><Link href="#">Best sellers</Link></p>
            <p className='hover:underline py-1'><Link href="#">Recently viewed</Link></p>
            <p className='hover:underline py-1'><Link href="#">Poplar this week</Link></p>
            <p className='hover:underline py-1'><Link href="#">All products</Link></p>
          </nav>
        </div>
        
        {/* Categories Section */}
        <div className='text-white mt-8 md:mt-0'>
          <p className='pt-8'>Categories</p>
          <nav className='font-Satoshi text-sm mt-3'>
            <p className='hover:underline py-1'><Link href="#">Crockery</Link></p>
            <p className='hover:underline py-1'><Link href="#">Furniture</Link></p>
            <p className='hover:underline py-1'><Link href="#">Homeware</Link></p>
            <p className='hover:underline py-1'><Link href="#">Plants pots</Link></p>
            <p className='hover:underline py-1'><Link href="#">Chairs</Link></p>
            <p className='hover:underline py-1'><Link href="#">Crockery</Link></p>
          </nav>
        </div>
        
        {/* Our Company Section */}
        <div className='pt-[30px] text-white'>
          <p>Our company</p>
          <nav className='font-Satoshi text-sm mt-3'>
            <p className='hover:underline py-1'><Link href="#">About us</Link></p>
            <p className='hover:underline py-1'><Link href="#">Vacancies</Link></p>
            <p className='hover:underline py-1'><Link href="#">Contact us</Link></p>
            <p className='hover:underline py-1'><Link href="#">Privacy</Link></p>
            <p className='hover:underline py-1'><Link href="#">Returns policy</Link></p>
          </nav>
        </div>
        
        {/* Mailing List Section */}
        <div className='pl-0 md:pl-28 mb-28 mt-20'>
          <h1 className='text-white mb-4'>Join our mailing list</h1>
          <div className='flex flex-col md:flex-row'>
            <input 
              type="email" 
              placeholder='your@email.com' 
              className='w-[360px] md:w-[225px] h-[75px] font-Satoshi pl-4 text-base bg-[#4A4566] mb-4 md:mb-0'
            />
            <button className='text-[#2A254B] bg-white py-[25px] font-Satoshi px-3'>
              Sign up
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Horizontal Line */}
      <hr className='mx-4 md:mx-16 opacity-25' />
      
      {/* Footer Bottom Section */}
      <div className='flex flex-col md:flex-row justify-between items-center text-white font-Satoshi ml-4 md:ml-16 mt-7 pb-20'>
        <p className='text-sm mb-4 md:mb-0'>Copyright 2022 Avion LTD</p>
        
        {/* Social Media Icons */}
        <div className='text-2xl flex gap-6 mb-4 md:mb-0'>
          <Link href='#' className='transition duration-300 hover:shadow-lg hover:shadow-white'>
            <FaLinkedin />
          </Link>
          <Link href='#' className='transition duration-300 hover:shadow-lg hover:shadow-white'>
            <FaFacebook />
          </Link>
          <Link href='#' className='transition duration-300 hover:shadow-lg hover:shadow-white'>
            <FaInstagram />
          </Link>
          <Link href='#' className='transition duration-300 hover:shadow-lg hover:shadow-white'>
            <FaSkype />
          </Link>
          <Link href='#' className='transition duration-300 hover:shadow-lg hover:shadow-white'>
            <FaTwitter />
          </Link>
          <Link href='#' className='transition duration-300 hover:shadow-lg hover:shadow-white'>
            <FaPinterest />
          </Link>
        </div>
      </div>
      
      <BackToTopButton />
    </div>
  )
}

export default Footer
