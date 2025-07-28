// app/contact/page.tsx
import React from 'react';
import "../globals.css";
import Image from 'next/image';


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white p-6 sm:p-12 flex items-center justify-center">
      <div className="relative w-full max-w-4xl bg-orange-500 rounded-2xl p-5 sm:p-8 md:p-10 shadow-xl">
        {/* Close button */}
        {/* <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-white hover:text-gray-200"
          aria-label="Close"
        >
          <X size={24} />
        </button> */}

        <h1 className="text-6xl sm:text-3xl md:text-6xl font-bold text-white text-start mb-6">
          Contact Us!
        </h1>

        <div className="space-y-4 md:p-15">
          <button className="w-full py-3 b bg-opacity-20 font-medium rounded-full  glass-button-orange">
            Partnerships, press, or investing
          </button>
          <button className="w-full py-3 glass-button-orange  rounded-full  font-medium ">
            Apply as a creator intern
          </button>
        </div>

        <div className="flex justify-center space-x-6 mt-8 text-white text-2xl">
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-200  glass-button-orange  rounded-[50%] p-2">
            <Image
              src="/assets/linkedin/linkedin.png"
              alt="LinkedIn Icon"
              width={40}
              height={40}
            />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-200  glass-button-orange  rounded-[50%] p-2">
            <Image
              src="/assets/instagram/02_White_Glyph/instagram.png"
              alt="Instagram Icon"
              width={40}
              height={40}
            />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-gray-200 glass-button-orange  rounded-[50%] p-2">
            <Image
              src="/assets/tiktok/tiktok.png"
              alt="TikTok Icon"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
