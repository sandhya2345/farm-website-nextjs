"use client"

import { varieties } from '@/lib/data/varieties'
import { ArrowLeft, ArrowRight, CircleQuestionMark } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const VarietyDetails = ({ params }) => {
  const openParams = React.use(params);
  const { slug } = openParams;
  const variety = varieties.find(v => v.slug === slug)


  const [clickedApple, setClickedApple] = useState(variety.image)


  return (

    <div className='bg-white min-h-screen py-20'>
      <div className='bg-gray-50 py-4'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center gap-2 text-sm'>
            <button className='flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors'>
              <ArrowLeft className='w-4 h-4' />
              Back
            </button>
            <span className=' text-gray-300'>/</span>
            <span className=' text-gray-500'>Fresh Fruits</span>
          </div>

        </div>
        <div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-12 gap-8 mt-8'>
          <div className='lg:col-span-6 mb-6 lg:mb-0'>
            <div className="relative w-[550px] h-[400px]">
              <Image
                src={clickedApple}
                alt="Apple Image"
                fill
                className="object-cover rounded-xl"
              />
            </div>



          </div>
          <div className='lg:col-span-6'>
            <h1 className='font-bold text-4xl mb-2'>{variety.title}</h1>
            <p className='text-gray-500 text-lg font-medium mb-4'>Premium Quality</p>
            <p className='text-3xl font-semibold mb-4'>₹{variety.price}</p>
            <p className='text-gray-600 mb-4'>{variety.longDescription}</p>
            <div className='mb-4'>
              <label className='flex gap-1 font-semibold text-gray-800'>
                Choose weight
                <CircleQuestionMark className='w-4 h-4 mt-1 text-gray-400' />
              </label>
            </div>
            <div className='grid grid-cols-2 gap-3 mb-4'>
              <button className='relative p-3 sm:p-6 rounded-xl border text-center transition-all duration-200 border-red-600 bg-red-50 shadow-md'>
                <div className='font-semibold text-red-600 text-lg'>
                  5 KG Box
                </div>
                <div>
                  ₹ 1000
                </div>
                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">Popular</span>
              </button>

              <button className='relative p-3 sm:p-4 rounded-xl border text-center transition-all duration-200 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50'>
                <div className='font-semibold text-green-600 text-lg'>
                  10 KG Box
                </div>
                <div>
                  ₹ 1000
                </div>
              </button>
            </div>
          <div className='mb-4 flex items-center justify-between'>
           <span className='text-sm text-gray-600'>🎁 Get 5% OFF on orders above 5kg</span>
          </div>
          </div>




        </div>

      </div>

    </div>
  )
}

export default VarietyDetails