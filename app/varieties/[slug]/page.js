import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

const VarietyDetails = () => {
  return (
    
    <div className='bg-white min-h-screen py-20'>
      <div className='bg-gray-50 py-4'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center gap-2 text-sm'>
            <button className='flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors'>
              <ArrowLeft className='w-4 h-4'/>
              Back
            </button>
            <span className=' text-gray-300'>/</span>
            <span className=' text-gray-500'>Fresh Fruits</span>


          </div>

        </div>
        <div>

        </div>

      </div>

    </div>
  )
}

export default VarietyDetails