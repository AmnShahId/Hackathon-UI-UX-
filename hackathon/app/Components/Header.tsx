'Use client'

import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { LuShoppingCart } from 'react-icons/lu';
import { PiUserCircle } from 'react-icons/pi';
import { useState } from 'react';
import BackToTopButton from './Backtotop';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const profileLinks = [
    { href: "/profile", label: "Profile" },
    { href: "/my-orders", label: "My Orders" },
    { href: "/aboutv2", label: "Aboutv2" },
    { href: "/homepagev2", label: "HomePageV2" },
    { href: "/contact", label: "Contact" },
    { href: "/single-product", label: "Single Product" },
    { href: "/logout", label: "Logout" },
  ];

  return (
    <div className='font-Satoshi'>
      <div className="bg-white py-4 px-[80px]">
        <div className='flex justify-between items-center'>
          {/* Search Button for both Mobile and Desktop */}
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="">
            <CiSearch className='text-2xl font-bold' />
          </button>

          <Link href='/'>
            <h1 className='flex opacity-70 justify-center text-2xl font-thin items-center text-[#2A254B]'>
              Avion
            </h1>
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <div className='text-2xl flex items-center gap-4 relative md:hidden'>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="space-y-1">
                <span className="block w-6 h-1 bg-black"></span>
                <span className="block w-6 h-1 bg-black"></span>
                <span className="block w-6 h-1 bg-black"></span>
              </div>
            </button>
          </div>

          {/* Desktop Profile and Cart Icons */}
          <div className='hidden md:flex items-center gap-4'>
            <Link href="shoppingcart">
              <LuShoppingCart className="text-2xl" /> {/* Adjust icon size */}
            </Link>
            <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
              <PiUserCircle className="text-2xl" /> {/* Adjust icon size */}
            </button>
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transform translate-y-48 translate-x-8 ">
                <ul className="pl-2">
                  {profileLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} legacyBehavior>
                        <a className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100">
                          {link.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Search Bar for both Mobile and Desktop */}
        {isSearchOpen && (
          <div className="mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        )}
      </div>

      <hr className="my-0" />

      {/* Main Navigation Links */}
      <nav className={`flex justify-center text-[#2A254B] items-center gap-8 py-4 font-thin opacity-55 md:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        {/* Mobile Menu: flex-col for vertical links */}
        <div className={`md:flex gap-8 ${isMobileMenuOpen ? 'flex-col' : 'flex-row'} md:flex-row`}>
          <p><Link href="plant pots" className='hover:text-black opacity-100'>Plant Pots</Link></p>
          <p><Link href="ceramics" className='hover:text-black opacity-100'>Ceramics</Link></p>
          <p><Link href="tables" className='hover:text-black opacity-100'>Tables</Link></p>
          <p><Link href="chairs" className='hover:text-black opacity-100'>Chairs</Link></p>
          <p><Link href="crockery" className='hover:text-black opacity-100'>Crockery</Link></p>
          <p><Link href="tableware" className='hover:text-black opacity-100'>Tableware</Link></p>
          <p><Link href="cutlery" className='hover:text-black opacity-100'>Cutlery</Link></p>
        </div>
      </nav>

      <BackToTopButton />
    </div>
  );
}
