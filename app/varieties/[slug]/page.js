"use client"

import { varieties } from '@/lib/data/varieties'
import { ArrowLeft, ArrowRight, Award, CircleQuestionMark, Leaf, Minus, Plus, Shield, ShoppingCart, Truck } from 'lucide-react'
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
            <span className=' text-gray-300'>/</span>
            <span className=' text-red-500'>{variety.title}</span>
          </div>

        </div>
        <div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8'>

          {/* main image here */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[550px] h-[250px] sm:h-[350px] lg:h-[400px]">
              <Image
                src={clickedApple}
                alt="Apple Image"
                fill
                className="object-cover rounded-xl"
              />

              <div className='absolute top-4 left-4 flex flex-col gap-2 z-10'>
                <div>
                  <span className='bg-red-600 text-white py-1 px-6  text-sm font-medium rounded-xl'>{variety.badge}</span>
                </div>
                <span className='bg-blue-600 text-white py-1 px-6 text-sm font-medium rounded-xl'>{variety.title.split(" ")[1]}</span>
              </div>
            </div>
            <div className='mt-4 flex gap-3 flex-wrap justify-center'>
              {
              variety.images?.map((img, index) => (
                <div
                  key={index}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border-2 cursor-pointer 
                     ${clickedApple === img ? "border-red-500" : "border-transparent"}`}
                  onClick={() => setClickedApple(img)}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className='object-cover hover:opacity-80 transition'
                  />
                </div>
              ))
              }




            </div>
          </div>



          {/* images ends here */}

          {/* right content starts here */}

          <div className='lg:col-span-6'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 leading-tight'>{variety.title}</h1>
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





            <div className='space-y-6 '>
              <label className='font-semibold text-gray-900 mb-3'>Quantity</label>
              <div className='flex items-center gap-5'>
                <div className='flex items-center border mt-3 border-gray-300 bg-white rounded-xl shadow'>
                  <button className='p-3 hover:bg-gray-50 transition-colors text-gray-700'>
                    <Minus />
                  </button>
                  <span className='px-4 py-3 border-x border-gray-300 min-w-[60px] text-center text-gray-900 font-semibold"'>1</span>
                  <button className='p-3 hover:bg-gray-50 transition-colors text-gray-700 d'>
                    <Plus />
                  </button>
                </div>
                <div className='font-bold text-xl mt-2'>
                  Total: ₹1499
                </div>
              </div>
              <div className='flex flex-col sm:flex-row gap-4 '>
                <button className='flex-1 flex justify-center gap-2 font-semibold border py-4 px-6 rounded-xl bg-red-700 text-white'>
                  <ShoppingCart className='w-5 h-5' />
                  Add to cart
                </button>
                <button className='flex-1  gap-2 font-semibold border py-4 px-6 rounded-xl bg-gray-900 text-white'>
                  Buy Now
                </button>

              </div>

              <div className='grid grid-cols-2 gap-4 mt-8'>
                <div className='flex items-center gap-2'>
                  <Truck className='w-5 h-5 text-green-600' />
                  <span className='text-sm text-gray-600'>Best Prices</span>
                </div>

                <div className='flex items-center gap-2'>
                  <Shield className='w-5 h-5 text-blue-600' />
                  <span className='text-sm text-gray-600'>Quality guarantee</span>
                </div>

                <div className='flex items-center gap-2'>
                  <Leaf className='w-5 h-5 text-green-600' />
                  <span className='text-sm text-gray-600'>100% Naturally grown</span>
                </div>

                <div className='flex items-center gap-2'>
                  <Award className='w-5 h-5 text-purple-600' />
                  <span className='text-sm text-gray-600'>Award winning</span>
                </div>





              </div>


            </div>
          </div>




        </div>

      </div>

    </div>
  )
}

export default VarietyDetails