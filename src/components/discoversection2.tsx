'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Discoversection2: React.FC = () => {

const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Array of phone image paths 
  const phoneImages = [
   '/assets/phoneimages/phone1.png',
    '/assets/phoneimages/phone2.png', 
    '/assets/phoneimages/phone3.png',
    '/assets/phoneimages/phone4.png',
    '/assets/phoneimages/phone5.png',
    '/assets/phoneimages/phone6.png',

    // Add more phone image paths as needed
  ];

  
  return (
    <section
      className="bg-gradient-to-b from-purple-500 via-indigo-600 to-white"
      style={{
        backgroundImage: "url('/assets/landing/hero2_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 md:pr-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Fipet is a mobile app where teens learn personal finance through
              five-minute interactive quests
            </h2>
            <p className="text-lg sm:text-xl">
              Users raise, evolve, and compete with a digital pet by completing
              challenges.
            </p>
            <p className="text-lg sm:text-xl">
              Designed to feel like a game, not a textbook— inspired by
              Duolingo, Pokémon, and Gen Z media habits.
            </p>
          </div>
          <div className="w-full h-80 bg-gray-200 rounded-lg shadow-lg "></div>
        </div>

        {/* Phone gallery with scroll animation */}
        <div className="mt-12 overflow-x-auto hide-scrollbar">
          <div 
            className="flex space-x-4 md:space-x-6 transition-transform duration-75 ease-out"
            style={{
              transform: `translateX(-${scrollY * 0.3}px)`,
              
            }}
          >
            {Array.from({ length: 20 }).map((_, i) => {
              const imageExists = true // Simple check based on array length
              
              return (
                <div
                  key={i}
                  className="flex-shrink-0 w-24 h-40 md:w-48 md:h-64 rounded-lg overflow-hidden relative group hover:scale-101 transition-transform duration-300"
                >
                  {imageExists ? (
                    <Image
                      src={phoneImages[i % phoneImages.length]}
                      alt={`Phone ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 192px"
                    />
                  ) : (
                    // Fallback content when no image is available
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-8 h-12 md:w-16 md:h-24 bg-white bg-opacity-20 rounded-lg mb-2 mx-auto"></div>
                        <p className="text-xs md:text-sm opacity-80">Phone {i + 1}</p>
                      </div>
                    </div>
                  )}
                  
                
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            How It Works
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />
              <p className="text-gray-700">
                <strong>Teens complete quests</strong> to earn XP and unlock pet
                upgrades
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />
              <p className="text-gray-700">
                <strong>Features include streak rewards,</strong> leaderboards,
                badges, and 1v1 quiz battles
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />
              <p className="text-gray-700">
                <strong>Each quest teaches financial concepts</strong> through
                storytelling and multiple-choice interactions
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0" />
              <p className="text-gray-700">
                <strong>Designed to engage both beginners</strong> and
                financially savvy teens
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discoversection2;
