import { Apple, ArrowRight, ShoppingBag, ShoppingCart } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { varieties } from "@/lib/data/varieties";
import Image from 'next/image';

const Recommend = () => {
    return (
        <div className='bg-white mt-16'>
            <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4'>
                <div>
                    <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 text-red-700 mb-3'>
                        <Apple className='h-4 w-4 mx-2' />
                        Recommended for you
                    </span>
                    <h1 className='text-2xl text-gray-900 font-bold'>You May Also Like</h1>
                    <p className='text-gray-600 mt-2 text-md mb-8'>
                        Other premium apple varieties from our orchard
                    </p>
                </div>

                <div className='hidden lg:flex items-center gap-3 mb-8'>
                    <Link href='/varieties' className='text-sm font-medium text-red-700 hover:text-red-800 transition-colors flex items-center'>
                        View all varieties
                        <ArrowRight className='w-4 h-4' />
                    </Link>

                </div>

            </div>


            <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {varieties.map((variety, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-xl shadow-sm border-gray-200 hover:shadow-md transition group'
                    >
                        <div className="relative overflow-hidden w-full h-68 ">
                            <Image
                                src={variety.image}
                                alt={variety.title}
                                fill
                                className="rounded-t-2xl object-cover transition-transform duration-300 group-hover:scale-105 "
                            />
                            <span className='absolute top-2 left-2 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full'>
                                {variety.badge}
                            </span>
                        </div>


                        <div className='mt-3 p-3'>
                            <h3 className='text-gray-800 font-medium text-sm line-clamp-2 mb-6'>
                                {variety.title}
                            </h3>

                            <div className='flex items-center justify-between mt-2'>
                                <div>
                                    <p className="text-lg font-bold">₹{variety.price}</p>
                                    <p className='text-sm text-gray-400 line-through'>
                                        ₹{variety.oldPrice}
                                    </p>
                                </div>
                                <button className="bg-red-100 hover:bg-red-200 p-2 rounded-full">
                                    <ShoppingCart className='w-4 h-4 text-red-800' />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default Recommend