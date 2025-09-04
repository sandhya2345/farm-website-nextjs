import { ArrowLeft, Key, Lock } from 'lucide-react'
import React from 'react'

const Cart = () => {
  return (
    <div className='min-h-screen py-20  bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <button>
              <ArrowLeft/>
            </button>
            <div>
              <h1 className='font-semibold text-gray-900 text-lg'>Shopping Cart</h1>
              <p className='text-sm text-gray-600'>1 items</p>
            </div>
          </div>

          <div className='flex items-center gap-2' >
            <Lock className='w-4 h-4 text-green-600'/>
            <span className='text-green-600 font-medium'>Secure</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Cart