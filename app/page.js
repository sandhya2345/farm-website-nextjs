import Image from "next/image";

import { Leaf, ArrowDown, FacebookIcon, YoutubeIcon } from "lucide-react";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, MessageCircle } from "lucide-react";

export default function Home() {
  return (

    <main className="w-full">


      {/* // Main hero section */}

      <section className="relative h-[92vh] top-21 w-full flex items-center justify-center text-center overflow-hidden ">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">

          <source src="/videos/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.

        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-red-900/30 to-red-900/60" />

        {/* content section starts here */}

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
            <Leaf className="w-4 h-4 text-green-300" />
            <span className="px-2">The Appletale Experience</span>
          </div>
          <h1 className="font-bold text-7xl">Orchard to Table</h1>

          <p className="text-lg md:text-2xl mt-6 leading-relaxed text-gray-200">
            Experience the authentic flavor of premium apples grown with <br />care in
            the pristine foothills of the Himalayas, where tradition <br /> meets
            sustainable farming
          </p>

        </div>

        <div className="absolute bottom-10 left-0 right-0  flex justify-center">
          <div className="animate-bounce cursor-pointer text-white">
            <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
              <ArrowDown size={26} />
            </div>
          </div>

        </div>
      </section>



      <section className="min-h-screen bg-white py-18">

        <div className="max-w-5xl mx-auto px-4 py-18">

          <div className="max-w-3xl mx-auto text-center mb-16 ">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🍎 Farm Fresh Daily
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Best Selling Apples
            </h2>
            <p className="text-xl text-gray-700">
              Our top 2 customer favorites, hand-picked from our orchards every morning.
              Premium quality apples delivered fresh to your doorstep with guaranteed
              freshness and exceptional taste.
            </p>
          </div>


          <div className="grid gap-6 md:grid-cols-2">
            {/* card 1 */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] flex flex-col h-full">
              <div className="relative">
                <img
                  src="/images/Royal.jpg"
                  alt="Royal Delicious Apples"
                  className="w-full h-72 object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Premium
                </span>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900">
                  Royal Delicious Apples
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Premium red variety with exceptional sweetness and vibrant color.
                  Perfect balance of crisp texture and royal quality, making them
                  our customer favorite.
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">₹1499</span>
                  <span className="line-through text-gray-400">₹1599</span>
                  <span className="ml-auto bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                    Save ₹99
                  </span>
                </div>

                <button className="mt-4 w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>

            {/* card 2 */}

            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:scale-[1.02] flex flex-col h-full">
              <div className="relative">
                <img
                  src="/images/mix.jpg"
                  alt="Royal Delicious Apples"
                  className="w-full h-72 object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Best Value
                </span>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900">
                  Royal Delicious Apples
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Premium red variety with exceptional sweetness and vibrant color.
                  Perfect balance of crisp texture and royal quality, making them
                  our customer favorite.
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">₹1499</span>
                  <span className="line-through text-gray-400">₹1599</span>
                  <span className="ml-auto bg-green-100 text-green-700 px-2 py-1 text-xs rounded">
                    Save ₹99
                  </span>
                </div>

                <button className="mt-4 w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3">
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>


          </div>
          <div className="max-w-xl mt-12 mx-auto flex items-center justify-center">
            <button className="mt-4 w-1/2  bg-gray-900 hover:bg-red-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>View all Apple Varieties</span>
            </button>
          </div>
        </div>
      </section>


      <section className="min-h-screen py-2 px-6 bg-white">
        <div className="text-center mb-6">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            🌱 Our Quality Promise
          </span>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our Apples?
          </h2>
          <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-xl">
            Every apple reflects our commitment to purity, tradition, and excellence.
            Discover what makes our apples extraordinary.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 max-w-6xl mx-auto py-8">

          <div className="text-center">
            <div className="w-32 h-32 mx-auto flex bg-green-50 rounded-2xl p-6 group-hover:bg-green-100 transition-all duration-300">
              <img
                alt="100% Wax Free"
                loading="lazy"
                width="128"
                height="128"
                decoding="async"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                src="https://himira.co.in/_next/static/media/unprocessed_img.4a42e682.png"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">100% Wax Free</h3>
            <p className="mt-2 text-gray-600 text-md">
              Natural apples without any artificial processing or chemical treatment.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto flex bg-green-50 rounded-2xl p-6 group-hover:bg-green-100 transition-all duration-300">
              <img
                alt="100% Wax Free"
                loading="lazy"
                width="128"
                height="128"
                decoding="async"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                src="https://himira.co.in/_next/static/media/nature_img.a83024c3.png"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Responsible Farming</h3>
            <p className="mt-2 text-gray-600 text-md">
              Grown using sustainable farming practices.
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto flex bg-green-50 rounded-2xl p-6 group-hover:bg-green-100 transition-all duration-300">
              <img
                alt="100% Wax Free"
                loading="lazy"
                width="128"
                height="128"
                decoding="async"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                src="https://himira.co.in/_next/static/media/tradition_img.ce744cfa.png"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Traditional Methods</h3>
            <p className="mt-2 text-gray-600 text-md">
              Time-tested farming techniques passed down through generations
            </p>
          </div>


          <div className="group text-center">
            <div className="w-32 h-32 mx-auto flex bg-green-50 rounded-2xl p-6 group-hover:bg-green-100 transition-all duration-300">
              <img
                alt="100% Wax Free"
                loading="lazy"
                width="128"
                height="128"
                decoding="async"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                src="https://himira.co.in/_next/static/media/locally_grown_img.17eb0991.png"
              />
            </div>
            <h3 className="mt-4 text-xl font-bold text-gray-900">Locally Grown</h3>
            <p className="mt-2 text-gray-600 text-md">
              Fresh from our local orchards to ensure peak quality and freshness
            </p>
          </div>

        </div>
      </section>

      <section className="min-h-screen py-2 px-6 bg-white">

        <div className="max-w-6xl mx-auto px-4 py-18 rounded-2xl bg-green-50">

          <div className="text-center ">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🎬 Behind the scenes
            </div>
          </div>

          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Farm Story
            </h2>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-xl">
              See how we cultivate premium apples with traditional methods and modern care in
              the beautiful Himalayan foothills
            </p>
          </div>

          <div className="flex justify-center mt-16">
            <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dGswBx8EoFQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>

      </section>

      <section className="min-h-screen py-2 px-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-18 rounded-2xl">
          <div className="text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Follow Us
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-xl mb-18">
              Stay updated with our latest harvests and apple varieties
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <Link
            href="https://instagram.com"
            target="_blank"
            className="flex flex-col items-center justify-center p-12 border border-green-200 rounded-xl hover:shadow-lg transition"
          >
             <Instagram className="w-12 h-12 text-gray-800 mb-3" />
            <h3 className="font-semibold">Instagram</h3>
            <p className="text-sm text-gray-500">@ambertalefarms</p>
            <span className="text-gray-500 mt-2">Follow ↗</span>

          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="flex flex-col items-center justify-center p-12 border border-green-200 rounded-xl hover:shadow-lg transition"
          >
             <FacebookIcon className="w-12 h-12 text-gray-800 mb-3" />
            <h3 className="font-semibold">Instagram</h3>
            <p className="text-sm text-gray-500">@appletales</p>
            <span className="text-gray-500 mt-2">Follow ↗</span>

          </Link>

           <Link
            href="https://instagram.com"
            target="_blank"
            className="flex flex-col items-center justify-center p-12 border border-green-200 rounded-xl hover:shadow-lg transition"
          >
             <FacebookIcon className="w-12 h-12 text-gray-800 mb-3" />
            <h3 className="font-semibold">Facebook</h3>
            <p className="text-sm text-gray-500">@appletales</p>
            <span className="text-gray-500 mt-2">Follow ↗</span>

          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="flex flex-col items-center justify-center p-12 border border-green-200 rounded-xl hover:shadow-lg transition"
          >
             <YoutubeIcon className="w-12 h-12 text-gray-800 mb-3" />
            <h3 className="font-semibold">YouTube</h3>
            <p className="text-sm text-gray-500">@appletales</p>
            <span className="text-gray-500 mt-2">Follow ↗</span>

          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="flex flex-col items-center justify-center p-12 border border-green-200 rounded-xl hover:shadow-lg transition"
          >
             <Mail className="w-12 h-12 text-gray-800 mb-3" />
            <h3 className="font-semibold">E-Mail</h3>
            <p className="text-sm text-gray-500">@appletales</p>
            <span className="text-gray-500 mt-2">Follow ↗</span>

          </Link>

          </div>

        </div>

      </section>



    </main>
  );
}
