import { Camera } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <div>
            <section className="relative pb-12 sm:pt-24 sm:pb-16 lg:py-32 lg:pb-20 bg-gradient-to-br from-green-100 via-white to-red-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
                        <div className='inline-flex items-center mt-18 bg-white/80 backdrop-blur-sm border border-green-200 text-green-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm font-medium mb-6 sm:mb-8 shadow-sm'>
                        <Camera className='w-4 h-4 mx-2'/>
                            Our Story
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">From Business Person<br/>
                            <span className='text-red-600'>to Apple Farmers</span>
                         </h1>
                         <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto px-4 sm:px-0">
                            We're young visioners who also grow apples in the beautiful mountains of Mustang. 
                            Through our videos and farming, we share our journey while bringing fresh,
                             quality fruit from our orchards to your home.
                         </p>

                    </div>



                </div>

            </section>

        </div>
    )
}

export default About