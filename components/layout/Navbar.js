import React from 'react'
import { Apple, Search, User, ShoppingBag } from "lucide-react";
import Link from 'next/link';

const Navbar = () => {
  return (
   <nav className="fixed w-full top-0 z-50 transition-all duration-500 bg-white/60 backdrop-blur-sm">
    <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
        <div className='flex items-center space-x-2'>
            {/* Logo starts here */}
            <div className='bg-red-600 p-2 space-x-2 rounded-2xl'>
                <Apple className='text-white '/>
            </div>

            <div className='flex flex-col leading-tight'>
                <span className='text-red-700 font-bold text-2xl'>Appletale</span>
                <span className='text-green-600 font-medium text-sm'>FARMS</span>
            </div>
        </div>

        {/* Navlinks starts here */}

        <ul className='flex space-x-12 text-gray-600 font-medium'>
            <li><Link href="/"></Link>Home</li>
             <li><Link href="/"></Link>Varieties</li>
              <li><Link href="/"></Link>About</li>
               <li><Link href="/"></Link>Contact</li>
        </ul>

        {/* Icons starts here */}
        <div className='flex items-center space-x-6 text-gray-600'>
            <Search className='w-5 h-5'/>
            <User className='w-5 h-5'/>
            <ShoppingBag className='w-5 h-5'/>

        </div>










       

    </div>



   </nav>
  )
}

export default Navbar