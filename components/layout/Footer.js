import { Apple, ArrowRight, Clock, Facebook, Heart, Instagram, Mail, MailIcon, MapPin, Phone, Youtube } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-white'>

      <div className='max-w-7xl mx-auto text-center py-18'>


        <div className='max-w-3xl mx-auto text-center'>
          <h3 className='text-2xl font-semibold mb-2'>Stay fresh with our updates</h3>
          <p className='text-gray-600 mb-8'>Get seasonal variety updates, harvest news, and exclusive offers delivered to your inbox.</p>

          <form>
            <div>
              
            </div>
            <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto pb-6'>
              <input
                type="email"
                placeholder="Your email address"
                className='flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-50 transition-all duration-300'
              />

              <button
                type="button"
                className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <p className='text-sm text-gray-500'>Stay updated with our latest harvests and apple varieties</p>
          </form>
        </div>
      </div>


      <div className='border-t border-gray-300'>
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8'>


            <div>
              <div className="flex items-center space-x-2">
                <div className="bg-red-600 p-2 rounded-2xl">
                  <Apple className="text-white" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-red-700 font-bold text-2xl">Appletales</span>
                  <span className="text-green-600 font-medium text-sm">FARMS</span>
                </div>
              </div>
              <p className="mt-4 text-gray-600 max-w-md">
                Premium quality apples grown with sustainable farming practices in the pristine valleys of Mustang. From our family orchards to your table.
              </p>
            </div>

            {/* company section */}
            <div className='mx-2'>
              <h4 className='font-semibold mb-3 '>Company</h4>
              <ul className='space-y-3 text-gray-600 text-sm'>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Our Story</Link></li>
                <li><Link href="#">Quality Promise</Link></li>
              </ul>
            </div>


            <div>
              <h4 className='font-semibold mb-3'>Support</h4>

              <ul className='space-y-3 text-gray-600 text-sm'>
                <li><Link href="#">FAQ</Link></li>
                <li><Link href="#">Shipping & Returns</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
              </ul>
            </div>


            <div>
              <h4 className='font-semibold mb-3'>Contact</h4>
              <ul className='space-y-3 text-gray-600 text-sm'>

                <li className="flex items-center gap-2">
                  <MapPin className="text-red-600 h-6 w-6" /> Mustang
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="text-red-600 h-6 w-6" /> 9823442112
                </li>
                <li className='flex items-center gap-2'>
                  <Mail className='text-red-600 h-6 w-6 ' /> appletalesfarms@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="text-red-600 h-6 w-6" /> Mon-Fri: 9AM - 6PM
                </li>
              </ul>
              <div className='mt-4 text-gray-600'>
                <h4>Follow Us</h4>

                <div className='flex space-x-4 mt-2'>
                  <Instagram />
                  <Facebook />
                  <Mail />
                  <Youtube />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* minifooter */}

      <div className='border-t border-gray-300 py-6'>
        <div className="max-w-7xl mx-auto px-6">
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-sm text-gray-500'>
              © 2025 Appletales Farms. All rights reserved.
            </div>
            <div className='flex items-center gap-6 text-sm'>


              <Link href="/" className='text-gray-500 hover:text-gray-900 transition-colors'>
                Privacy Policy
              </Link>

              <Link href="/" className='text-gray-500 hover:text-gray-900 transition-colors'>
                Terms of Service
              </Link>

            </div>

            <div className='text-sm text-gray-500 flex items-center'>
              Made with
              <Heart className='text-red-600 h-4 w-4 mx-2' />
              from Mustang

            </div>

          </div>

        </div>

      </div>







    </footer>
  )
}

export default Footer