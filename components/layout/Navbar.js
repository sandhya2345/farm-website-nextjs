"use client"

import React from 'react'
import { Apple, Search, User, ShoppingBag } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    
    const pathname = usePathname();

    const links = [
    { href: "/", label: "Home" },
    { href: "/varieties", label: "Varieties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];




    return (
        <nav className="fixed w-full top-0 z-50 transition-all duration-500 bg-white/60 backdrop-blur-sm">
            <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
                <div className='flex items-center space-x-2'>
                    {/* Logo starts here */}
                    <div className='bg-red-600 p-2 space-x-2 rounded-2xl'>
                        <Apple className='text-white ' />
                    </div>

                    <div className='flex flex-col leading-tight'>
                        <span className='text-red-700 font-bold text-2xl'>Appletales</span>
                        <span className='text-green-600 font-medium text-sm'>FARMS</span>
                    </div>
                </div>

                {/* Navlinks starts here */}

                {/* <ul className='flex space-x-12 text-gray-600 font-medium'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/varieties">Varieties</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul> */}

                  <ul className='flex space-x-12 text-gray-600 font-medium'>

                    {
                        links.map((link) => {
                            const isClicked = pathname === link.href;

                            return (
                                <li key={link.href}>
                                    <Link href={link.href}
                                    className={`pb-1 transition-colors ${
                                        isClicked ? "text-red-600 border-b-2 border-red-600"
                                        : "text-gray-600 hover:text-red-600"

                                    }`}
                                    >
                                        {link.label}
                                    </Link>

                                </li>
                            )
                        }

                        )
                    }



                    </ul>




                {/* Icons starts here */}
                <div className='flex items-center space-x-6 text-gray-600'>
                    <Search className='w-5 h-5' />
                    <User className='w-5 h-5' />
                    <ShoppingBag className='w-5 h-5' />

                </div>












            </div>



        </nav>
    )
}

export default Navbar