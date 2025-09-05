"use client"
import { ArrowLeft, CircleCheckBig, Delete, Lock, Minus, Plus, Star, X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("/api/cart");
        const data = await response.json();
        setCart(data);
      } catch (err) {
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <p className="p-10">Loading...</p>;

  if (cart.length === 0) {
    return (
      <div className='min-h-screen flex items-center justify-center text-gray-600 text-lg'>
        Your cart is empty.
      </div>
    );
  }

  const removeCartItem = async (id) => {
    try {

      const res = await fetch(`/api/cart/${id}`, { method: "DELETE" });
      const datum = await res.json();

      if (datum.success) {
        setCart(cart.filter(item => item._id !== id));
        toast.success("Items are removed from the cart!");
      }
      else {
        toast.error("Failed to remove the cart: " + datum.error);
      }
    }
    catch (err) {
      console.error("Delete fetch error:", err);
    }
  }


  const updateCartQuantity = async (id, updatedNum) => {
    try {
      const res = await fetch(`/api/cart/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: updatedNum }),
      });

      const data = await res.json();

      if (data.success) {
        setCart(cart.map(item => item._id === id ? { ...item, quantity: updatedNum } : item));
        toast.success("Cart items are updated!!");
      } else {
        toast.error("Failed: " + data.error);
      }
    } catch (err) {
      console.error("Update cart error:", err);
    }
  };


  return (
    <div className='min-h-screen py-20  bg-white'>
      <ToastContainer position="top-right" />
      <div className='max-w-8xl mx-auto px-16 py-4  border-b border-gray-200 mb-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <button>
              <ArrowLeft />
            </button>
            <div>
              <h1 className='font-semibold text-gray-900 text-lg'>Shopping Cart</h1>
              <p className='text-sm text-gray-600'>{cart.length} items</p>
            </div>
          </div>

          <div className='flex items-center gap-2' >
            <Lock className='w-4 h-4 text-green-600' />
            <span className='text-green-600 font-medium'>Secure</span>
          </div>

        </div>
      </div>

      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 px-6'>
        <div className='lg:col-span-7 space-y-6 '>

          {
            cart.map((item, index) => (

              <div
                key={item._id || index}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-6 items-start"
              >

                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt="Picture of the author"
                  className='rounded-2xl object-cover'
                />

                <div className='flex-1'>
                  <div className='flex justify-between'>
                    <div>
                      <h3 className='font-semibold text-lg'>{item.title}</h3>
                      <p className='text-md text-gray-600'>{item.weight} Box</p>
                      <div className='flex items-center gap-1 text-yellow-500 mt-1'>
                        <Star className='h-4 w-4' />
                        <Star className='h-4 w-4' />
                        <Star className='h-4 w-4' />
                        <Star className='h-4 w-4' />
                        <Star className='h-4 w-4' />
                        <span className='text-gray-600 text-sm ml-1'>4.9</span>
                      </div>
                      <div className='flex items-center mt-4 gap-2 '>
                        <CircleCheckBig className='w-4 h-4 text-green-600' />
                        <p className="text-sm text-green-700 font-medium">In stock</p>
                      </div>

                    </div>

                    <div className='text-right'>
                      <p className='text-2xl font-semibold'>₹ {item.price}</p>
                      <p className='text-xl font-semibold'> ₹ {item.price * item.quantity}</p>
                      <p className='text-gray-600 text-sm'>Total for {item.quantity} box</p>

                      {/* here start quantity button */}



                      <div className="flex items-center mt-4">
                        <div className='flex items-center border mt-3 border-gray-300 bg-white rounded-xl shadow'>
                          <button
                            onClick={() => updateCartQuantity(item._id, item.quantity - 1)}
                            className='p-2 hover:bg-gray-50 transition-colors text-gray-700'>
                            <Minus />
                          </button>
                          <span className='px-2 py-2 border-x border-gray-300 min-w-[40px] text-center text-gray-900 font-semibold"'>{item.quantity}</span>
                          <button
                          onClick={() => updateCartQuantity(item._id, item.quantity + 1)}
                            className='p-2 hover:bg-gray-50 transition-colors text-gray-700 d'>
                            <Plus />
                          </button>
                        </div>
                        <X
                          onClick={() => removeCartItem(item._id)}
                          className='mx-3 mt-3 text-gray-600'
                        />


                        {/* ends here quantity */}
                      </div>
                    </div>
                  </div>


                </div>

              </div>
            ))}


        </div>
      </div>
    </div>
  )
}

export default Cart