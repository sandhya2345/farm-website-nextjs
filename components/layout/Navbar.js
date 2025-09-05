"use client"

import React, { useEffect, useState } from 'react'
import { Apple, Search, User, ShoppingBag, X, Menu } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {

    const pathname = usePathname();
    const [menuOn, setMenuOn] = useState(false)
    const [cartCount, setCartCount] = useState(0);

    const links = [
        { href: "/", label: "Home" },
        { href: "/varieties", label: "Varieties" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    useEffect(() => {
        fetch("/api/cart")
            .then(res => res.json())
            .then(data => setCartCount(data.length))
            .catch(err => console.error(err));
    }, []);


    return (
        <nav className="fixed w-full top-0 z-50 transition-all duration-500 bg-white/90 backdrop-blur-sm">
            <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
                <div className='flex items-center space-x-2'>
                    {/* Logo starts here */}
                    <div className=' space-x-2 '>
                        {/* <Apple className='text-white ' /> */}
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={52}
                            height={42}
                            className="rounded-full"
                        />
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

                <ul className='hidden md:flex space-x-12 text-gray-600 font-medium'>

                    {
                        links.map((link) => {
                            const isClicked = pathname === link.href;

                            return (
                                <li key={link.href}>
                                    <Link href={link.href}
                                        className={`pb-1 transition-colors ${isClicked ? "text-red-600 border-b-2 border-red-600"
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
                <div className='hidden md:flex items-center space-x-6 text-gray-600'>
                    <Search className='w-5 h-5' />
                    <User className='w-5 h-5' />
                    <Link href="/cart">
                        <div className='relative'>
                            <ShoppingBag className='w-5 h-5' />
                            {cartCount > 0 && (
                                <span className='absolute -top-4 -right-4 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full'>
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </Link>

                </div>

                <button
                    className='md:hidden text-gray-700'
                    onClick={() => setMenuOn(!menuOn)

                    }>
                    {menuOn ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}

                </button>
            </div>

            {
                menuOn && (
                    <div className='md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-md'>
                        <ul className='flex flex-col items-center space-y-6 py-6 text-gray-700 font-medium'>
                            {links.map((link) => {

                                const isClicked = pathname === link.href;
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`transition-colors ${isClicked
                                                ? "text-red-600 font-semibold"
                                                : "hover:text-red-600"
                                                }`}
                                            onClick={() => setMenuOn(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}

                        </ul>

                    </div>

                )
            }



        </nav>
    )
}

export default Navbar