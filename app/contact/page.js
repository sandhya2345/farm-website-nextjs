import { Apple, CircleCheckBig, HeadphonesIcon, Instagram, Mail, MessageSquare, Send, ShoppingCart, Star, Truck } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen py-20 bg-white'>
      <section className='bg-gradient-to-br from-green-50 to-red-50  sm:py-20'>
        <div className='max-w-4xl mx-auto px-4 text-center'>
          <div className='inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6'>
            <Apple className='h-4 w-4' />

            <span className="text-sm font-medium">Contact Us</span>
          </div>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>How Can We Help?</h1>
          <p className='text-xl text-gray-600 mb-8'>Questions about our apples? Need bulk orders? We're here to help.</p>

          <div className='flex flex-wrap items-center justify-center text-sm text-gray-600 gap-6'>
            <div className='flex items-center gap-2'>
              <CircleCheckBig className='text-green-600 h-4 w-4' />

              <span>24/7 Support</span>

            </div>

            <div className='flex items-center gap-2'>
              <Star className='text-yellow-400 h-4 w-4' />
              <span>4.9/5 Rating</span>

            </div>

          </div>

        </div>

      </section>

      {/* next section starts here */}

      <section className='py-12 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <Link href="https://whatsapp" className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors'>
                  <Instagram />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                  <p className="text-green-600 font-medium">9898989898</p>
                  <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM</p>
                </div>


              </div>

            </Link>

            <Link href="https://facebook.com" className="group bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors'>
                  <Mail />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-blue-600 font-medium">AppleTalesFarms@gmail.com</p>
                  <p className="text-sm text-gray-500">Quick Response</p>
                </div>

              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* next section starts here */}
      <section className='py-12 bg-gray-100'>
        <div className='max-w-4xl mx-auto px-4'>
          <div className='bg-white rounded-3xl shadow p-6 sm:p-8'>
            <div className='text-center mb-8'>
              <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-2'>Send a Message</h1>
              <p className='text-gray-600 text-meduim'>We'll get back to you within 24 hours</p>
            </div>
            <form className='space-y-6'>
              <div>
                <label className=''>What's this about?</label>
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 '>
                  <label className="cursor-pointer p-3 mt-2 rounded-xl border transition-all text-center border-red-600 bg-red-50 text-red-700">
                    <MessageSquare className='mx-auto h-5 w-5' />
                    <span>General</span>
                  </label>
                  <label className="cursor-pointer p-3 mt-2 rounded-xl border transition-all text-center border-gray-200  text-gray-600">
                    <ShoppingCart className='mx-auto h-5 w-5' />
                    <span>Orders</span>
                  </label>

                  <label className="cursor-pointer p-3 mt-2 rounded-xl border transition-all text-center border-gray-200  text-gray-600">
                    <HeadphonesIcon className='mx-auto h-5 w-5' />
                    <span>Support</span>
                  </label>

                  <label className="cursor-pointer p-3 mt-2 rounded-xl border transition-all text-center border-gray-200  text-gray-600">
                    <Truck className='mx-auto h-5 w-5' />
                    <span>Shipping</span>
                  </label>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
                  <div>
                    <label>Name *</label>
                    <input className='w-full px-4 py-2  mt-2 rounded-xl border transition-all text-gray-400 bg-white focus:border-red-500 focus:ring-red-200 focus:outline-none focus:ring-2' placeholder='Your name' type='text' name='name' />
                  </div>
                     <div>
                    <label>Email *</label>
                    <input className='w-full px-4 py-2 mt-2 rounded-xl border transition-all text-gray-400 bg-white focus:border-red-500 focus:ring-red-200 focus:outline-none focus:ring-2' placeholder='Your name' type='text' name='name' />
                  </div>
                </div>

                <div className='mt-6'>
                    <label>Message *</label>
                    <textarea id="message" name="message" rows="5" className='w-full px-4 py-3 rounded-xl mt-2 border transition-all resize-none text-gray-900 bg-white placeholder:text-gray-500 border-gray-300 focus:border-red-500 focus:ring-red-200 focus:outline-none focus:ring-2'
                     placeholder="Tell us how we can help you..."></textarea>
                </div>

                <button className='bg-red-700 hover:bg-red-800 mt-6 font-semibold text-white px-6 py-4 rounded-xl flex gap-4 w-full items-center justify-center'>
                  <Send/>
                  Send Message

                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

      {/* this section ends here */}

      <section className='py-12 bg-white'>
         <div className='max-w-4xl mx-auto px-4'>
             <div className='text-center mb-8'>
              <h1 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>Quick Answers</h1>
              <p className='text-gray-600 text-meduim'>Common questions about our apples</p>
            </div>

            <div className='space-y-4'>
              <div className='bg-gray-50 hover:bg-gray-100 rounded-xl p-6'>
                <h3 className='font-semibold text-gray-800'>Do you deliver nationwide?</h3>
                <p className='text-gray-600'>Yes! We do offer nationwide delivery.</p>
              </div>

               <div className='bg-gray-50 hover:bg-gray-100 rounded-xl p-6'>
                <h3 className='font-semibold text-gray-800'>How do you keep apples fresh?</h3>
                <p className='text-gray-600'>Cold storage and premium packaging. Shipped within 24 hours of your order.</p>
              </div>
               <div className='bg-gray-50 hover:bg-gray-100 rounded-xl p-6'>
                <h3 className='font-semibold text-gray-800'>Do you offer bulk pricing?</h3>
                <p className='text-gray-600'>Yes, special rates for 50kg+ orders. Contact our sales team for quotes.</p>
              </div>
               <div className='bg-gray-50 hover:bg-gray-100 rounded-xl p-6'>
                <h3 className='font-semibold text-gray-800'>What's your return policy?</h3>
                <p className='text-gray-600'>100% satisfaction guarantee. Contact us within 48 hours if not satisfied.</p>
              </div>

            </div>

         </div>

      </section>




    </div>
  )
}

export default Contact