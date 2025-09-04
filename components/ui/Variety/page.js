import { CheckCircle } from 'lucide-react';
import { notFound, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const VarietyTabs = () => {
    const [switchTab, setSwitchTab] = useState("description");
    const { slug } = useParams();

    const [variety, setVariety] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/varieties/${slug}`)
            .then((res) => res.json())
            .then((data) => {
                setVariety(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <p className="text-center py-20">Loading...</p>;
    }

    if (!variety) {
        return <p className="text-center py-20">Variety not found.</p>;
    }


    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='mt-12'>
                <div className='border-b border-gray-200 '>
                    <div className='overflow-x-auto'>

                        <nav className='flex space-x-6 lg:space-x-8 min-w-max px-1'>
                            <button onClick={() => setSwitchTab('description')}
                                className={`py-4 px-1 text-sm lg:text-base font-medium border-b-2 transition-colors whitespace-nowrap
                 ${switchTab === "description"
                                        ? 'border-red-600 text-red-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}>
                                Description
                            </button>
                            <button
                                onClick={() => setSwitchTab('nutrition')}
                                className={`py-4 px-1 text-sm lg:text-base font-medium border-b-2 transition-colors whitespace-nowrap ${switchTab === "nutrition"
                                    ? 'border-red-600 text-red-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Nutrition
                            </button>
                            <button
                                onClick={() => setSwitchTab('details')}
                                className={`py-4 px-1 text-sm lg:text-base font-medium border-b-2 transition-colors whitespace-nowrap ${switchTab === "details"
                                    ? 'border-red-600 text-red-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                            >
                                Details
                            </button>
                        </nav>
                    </div>
                </div>
            </div>

            <div className='mt-6 space-y-6 lg:space-y-8'>
                {switchTab === "description" && (
                    <div>
                        <h2 className='font-bold text-2xl mb-4 text-gray-800'>Product Details</h2>
                        <p className='text-gray-600 text-medium leading-relaxed space-y-4 mb-6'>{variety.longDescription}</p>

                        <div>
                            <h4 className='font-bold text-xl text-gray-800 mb-4'>Key Highlights</h4>
                            <ul className='space-y-2'>
                                {
                                    variety.highlights.map((point, index) => (
                                        <li key={index} className='text-gray-600 flex items-start gap-4 space-y-2 text-medium'>
                                            <CheckCircle className='text-green-600 w-5 h-5' />
                                            <span>{point}</span>

                                        </li>
                                    ))}

                            </ul>
                        </div>
                    </div>
                )}

                {
                    switchTab === "nutrition" && (
                        <div>
                            <h1 className='text-2xl font-bold text-gray-800 mb-6'>Nutritional Information</h1>
                            <div className='bg-white border border-gray-200 rounded-xl overflow-hidden'>
                                <div className='bg-gray-50 px-6 py-4 border-b border-gray-200'>
                                    <h4 className='font-semibold text-gray-800'>Nutrition Facts (per 100g)</h4>
                                </div>

                                <div className='divide-y divide-gray-100'>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Calories</dt>
                                        <dd className='text-gray-600' >{variety.calories}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>
                                            Carbohydates</dt>
                                        <dd className='text-gray-600' >{variety.carbohydates}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Fiber</dt>
                                        <dd className='text-gray-600' >{variety.fiber}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Sugar</dt>
                                        <dd className='text-gray-600' >{variety.sugar}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Vitamin C</dt>
                                        <dd className='text-gray-600' >{variety.vitamin_c}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Potassium</dt>
                                        <dd className='text-gray-600' >{variety.potassium}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Protein</dt>
                                        <dd className='text-gray-600' >{variety.protein}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Fat</dt>
                                        <dd className='text-gray-600' >{variety.fat}</dd>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                }


                {
                    switchTab === "details" && (
                        <div>
                            <h1 className='text-2xl font-bold text-gray-800 mb-6'>Product Specifications</h1>
                            <div className='bg-white border border-gray-200 rounded-xl overflow-hidden'>
                                <div className='bg-gray-50 px-6 py-4 border-b border-gray-200'>
                                    <h4 className='font-semibold text-gray-800'>Product Information</h4>
                                </div>
                                <div className='divide-y divide-gray-100'>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Origin</dt>
                                        <dd className='text-gray-600' >{variety.calories}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>
                                            Variety</dt>
                                        <dd className='text-gray-600' >{variety.carbohydates}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Season</dt>
                                        <dd className='text-gray-600' >{variety.calories}</dd>
                                    </div>

                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Shelf Life</dt>
                                        <dd className='text-gray-600' >{variety.calories}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Storage</dt>
                                        <dd className='text-gray-600' >{variety.calories}</dd>
                                    </div>
                                    <div className='px-6 py-4 flex justify-between'>
                                        <dt className='text-gray-600'>Storage</dt>
                                        <dd className='text-gray-600' >{variety.calories}</dd>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )
                }
            </div>

        </div>
    )
}

export default VarietyTabs