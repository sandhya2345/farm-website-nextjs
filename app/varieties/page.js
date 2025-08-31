import { ChevronDown } from 'lucide-react'
import React from 'react'
import VarietyCard from "@/components/ui/Cards/VarietyCard";
import { varieties } from "@/lib/data/varieties";


const Varieties = () => {

    


    return (
        <div className='relative top-21 bg-gradient-to-b from-green-50  to-white min-h-screen'>
            <div className="max-w-3xl mx-auto text-center py-20 ">
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    🍎 Premium Apple Collection
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Our Apple Varieties
                </h2>
                <p className="text-xl text-gray-700">
                    Hand-picked from our orchards every morning. Premium quality apples delivered fresh
                    to your doorstep with guaranteed freshness and exceptional taste.
                </p>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col  sm:flex-row justify-between items-center sm:mb-12 px-6 ">
                <p className='text-gray-500 '>Showing
                    <span className='text-black font-semibold mx-1'>3</span>
                    Varieties
                </p>
                <div className='relative'>
                    <button
                        className='flex items-center gap-3 bg-white border border-gray-300 rounded-xl px-4 py-3
                         text-gray-700 font-medium hover:border-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-red-500 focus:border-transparent transition-all shadow-sm 
                         min-w-[200px] justify-between'>
                        <span>Our Order</span>
                        <ChevronDown />
                    </button>

                </div>

            </div>

            <div className='max-w-7xl mx-auto px-6 py-16 mb-8 '>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
                    {varieties.map((item) => (
                        <VarietyCard key={item.slug} {...item} />

                    ))}


                </div>
            </div>

            

        </div>
    )
}

export default Varieties