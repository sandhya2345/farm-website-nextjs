import { Apple, ArrowRightCircle, CircleCheck, CircleCheckBig, Star } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen py-20 bg-white'>
      <section className='bg-gradient-to-br from-green-50 to-red-50  sm:py-20'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <div className='inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6'>
            <Apple className='h-4 w-4'/>

            <span className="text-sm font-medium">Contact Us</span>
          </div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>How Can We Help?</h1>
          <p className='text-xl text-gray-600 mb-8'>Questions about our apples? Need bulk orders? We're here to help.</p>

          <div className='flex flex-wrap items-center justify-center text-sm text-gray-600 gap-6'>
            <div className='flex items-center gap-2'>
              <CircleCheckBig className='text-green-600 h-4 w-4'/>
              
              <span>24/7 Support</span>

            </div>

            <div className='flex items-center gap-2'>
              <Star className='text-yellow-400 h-4 w-4'/>
              <span>4.9/5 Rating</span>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Contact