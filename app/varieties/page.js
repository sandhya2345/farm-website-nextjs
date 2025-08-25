import { ArrowBigRight, ArrowRight, ChevronDown } from 'lucide-react'
import React from 'react'
import VarietyCard from "@/components/ui/Cards/VarietyCard";


const Varieties = () => {

    const varieties = [
        {
            image: "/images/Royal.jpg",
            badge: "Bestseller",
            title: "Royal Delicious Apples",
            description:
                "Premium red variety with exceptional sweetness and vibrant color.",
            price: 1499,
            oldPrice: 1599,
            discount: "Save ₹99",
        },

        {
            image: "/images/Royal.jpg",
            badge: "Bestseller",
            title: "Royal Delicious Apples",
            description:
                "Premium red variety with exceptional sweetness and vibrant color.",
            price: 1499,
            oldPrice: 1599,
            discount: "Save ₹99",
        },
        {
            image: "/images/Royal.jpg",
            badge: "Bestseller",
            title: "Royal Delicious Apples",
            description:
                "Premium red variety with exceptional sweetness and vibrant color.",
            price: 1499,
            oldPrice: 1599,
            discount: "Save ₹99",
        },
    ]

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
            <div className="max-w-7xl mx-auto flex justify-between items-center mb-12 px-6">
                <p className='text-gray-500'>Showing
                    <span className='text-black font-semibold mx-1'>5</span>
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
                    {varieties.map((item, index) => (
                        <VarietyCard key={index} {...item} />

                    ))}


                </div>
            </div>

            <div className='max-w-3xl mx-auto text-center'>
                <h3 className='text-2xl font-semibold mb-2'>Stay fresh with our updates</h3>
                <p className='text-gray-600 mb-8'>Get seasonal variety updates, harvest news, and exclusive offers delivered to your inbox.</p>

                <form>
                    <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto pb-12'>
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


                </form>


            </div>

        </div>
    )
}

export default Varieties