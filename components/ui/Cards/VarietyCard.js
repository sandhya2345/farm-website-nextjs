import React from 'react'

const VarietyCard = ({
    image, badge, title, description, price, oldPrice, discount
}) => {

    return (
        <div className='bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] flex flex-col h-full'>

            <div className="relative">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {badge}
                </span>
            </div>


            <div className="p-6 text-left">
                <h3 className='text-xl font-bold text-gray-900'>{title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{description}</p>

                <div className="mt-4 flex items-center gap-2">
                    <span className='text-2xl font-bold text-gray-900'>₹{price}</span>
                    <span className="line-through text-gray-400">₹{oldPrice}</span>
                    <span className="ml-auto bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                        {discount}
                    </span>
                </div>

                <button className="mt-4 w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>

    )
}

export default VarietyCard