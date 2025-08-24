import Image from "next/image";

import { Leaf, ArrowDown } from "lucide-react";

export default function Home() {
  return (

    <section className="absolute h-[92vh] top-21 w-full flex items-center justify-center text-center overflow-hidden ">
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
  );
}
