"use client";
import React from "react";
import Image from "next/image";

const Herosection2: React.FC = () => {
  const imgWidth = 600;
  const imgHeight = imgWidth * 1.85;
  return (
    <section
      className="
        relative overflow-hidden
        bg-cover bg-center
        px-6 pt-16 pb-12 text-center
        md:pb-16
      "
      style={{
        backgroundImage: "url('/assets/landing/hero2_background.png')",
      }}
    >
      {/* Text block */}
      <div className="container mx-auto px-6 pt-16 pb-12 text-center md:pb-16">
        <h1
          className="text-white font-extrabold leading-tight 
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Learn. Battle. Evolve.
        </h1>
        <p className="mt-4 text-white text-lg sm:text-xl md:text-2xl">
          All the finance. None of the stress.
        </p>
      </div>

      {/* Combined phones image */}
      <div className="flex justify-center px-6 pb-16 md:pb-24">
        <div className="relative w-full ">
          <Image
            src="/assets/landing/phones.png"
            alt="FiPet app screens on three phones"
            layout="responsive"
            width={imgWidth}
            height={imgHeight}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 py-4">
        <div className="w-full md:w-1/2 space-y-6 text-start">
          <h2 className="text-3xl sm:text-4xl font-bold-400 text-gray-900">
            Real world knowledge, accessible anywhere.
          </h2>
          <p className="text-gray-700 text-lg">
            Complete quests, upgrade your FiPet, battle against your friends and
            learn real finance skills all from your fingertips.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </a>
        </div>

        {/* — Image block — */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/landing/3D-Icon.png"
            alt="FiPet app mockup"
            width={400}
            height={400}
            className="w-64 sm:w-80 md:w-96 lg:w-[28rem] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection2;
