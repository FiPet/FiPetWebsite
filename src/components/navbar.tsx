'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navbar : React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFF8ECBF] rounded-b-[21px] backdrop-blur-[34px] shadow-[0_4px_9px_0_#48349233,inset_0_-6px_12px_0_#FFF8ECBF,inset_0_8px_13px_0_#FFF8EC73]">
      <div className="flex justify-between items-center px-6 md:px-12 h-[65px]">
        {/* Left side */}
        <div className="flex items-center gap-4">
           {/* Logo for Mobile */}
          <div className="md:hidden">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="FiPet Logo"
                width={122}
                height={57}
                className="object-contain"
              />
            </Link>
          </div>
          {/* Hamburger for Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#8F48FD] text-2xl"
          >
            {mobileOpen ? '✖' : '☰'}
          </button>

          

          {/* Logo for Desktop */}
          <div className="hidden md:block">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="FiPet Logo"
                width={122}
                height={57}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 pl-10 justify-start items-center gap-10 text-purple-500 capitalize text-[16px] ">
          <Link href="/">Home</Link>
          <Link href="/discover">Discover</Link>
          <Link href="/team">Team</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Right side: Join Button (always visible) */}
        <div className="text-purple-500 capitalize text-[16px]  ">
         <Link href="https://tally.so/r/mB5ex4" target="_blank" rel="noopener noreferrer">
            Join the waitlist!
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
{mobileOpen && (
  <div className='md:hidden  w-full'>


  <div className="  flex flex-col px-6 py-4 space-y-4 text-[#8F48FD] text-[16px] capitalize   z-40  ">
    <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
    <Link href="/discover" onClick={() => setMobileOpen(false)}>Discover</Link>
    <Link href="/team" onClick={() => setMobileOpen(false)}>Team</Link>
    <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link>
  </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
