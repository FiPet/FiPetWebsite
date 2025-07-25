"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HowItWorksCard from "./how-it-works-card";

const howItWorks = [
  {
    src: "/assets/discover/xp.svg",
    alt: "experience",
    text: "Teens complete quests to earn XP and unlock pet upgrades",
    numOfBold: 3,
  },
  {
    src: "/assets/discover/arrow.png",
    alt: "arrow",
    text: "Features include streak rewards, leaderboards, badges, and 1v1 quiz battles",
    numOfBold: 4,
  },
  {
    src: "/assets/discover/dollar sign.png",
    alt: "dollar sign",
    text: "Each quest teaches financial concepts through storytelling and multiple-choice interactions",
    numOfBold: 5,
  },
  {
    src: "/assets/discover/Group 92.png",
    alt: "group icon",
    text: "Designed to engage both beginners and financially savvy teens",
    numOfBold: 5,
  },
];

const Discoversection2: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [bgImgPath, setBgImgPath] = useState(
    "/assets/landing/hero2_background.png"
  );
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      if (window.innerWidth >= 640) {
        // Tailwind sm: min-width 640px
        setBgImgPath("/assets/landing/hero2_background.png");
      } else {
        // max-width 639px
        setBgImgPath("/assets/landing/hero2_background_mobile.png");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Array of phone image paths
  const phoneImages = [
    "/assets/phoneimages/phone1.png",
    "/assets/phoneimages/phone2.png",
    "/assets/phoneimages/phone3.png",
    "/assets/phoneimages/phone4.png",
    "/assets/phoneimages/phone5.png",
    "/assets/phoneimages/phone6.png",

    // Add more phone image paths as needed
  ];

  return (
    <section
      className=""
      style={{
        backgroundImage: `url('${bgImgPath}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 items-center mx-auto w-[90%]">
          <div className="text-white space-y-6 md:px-12">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-medium pb-6">
              Fipet is a mobile app where teens learn personal finance through
              five-minute interactive quests
            </h2>
            <p className="text-lg sm:text-2xl">
              Users raise, evolve, and compete with a digital pet by completing
              challenges.
            </p>
            <p className="text-lg sm:text-2xl">
              Designed to feel like a game, not a textbook— inspired by
              Duolingo, Pokémon, and Gen Z media habits.
            </p>
          </div>
          <div className="hidden sm:block">
            <Image
              src="/assets/discover/lady.png"
              alt="playing with phone"
              width={340}
              height={400}
            />
          </div>
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
              const imageExists = true; // Simple check based on array length

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
                        <p className="text-xs md:text-sm opacity-80">
                          Phone {i + 1}
                        </p>
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

        <div className="mt-16 mx-auto w-[80%]">
          <h3 className="text-2xl sm:text-3xl font-medium text-[#F97216]">
            How It Works
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {howItWorks.map((item, idx) => (
              <HowItWorksCard
                key={idx}
                src={item.src}
                alt={item.alt}
                text={item.text}
                numOfBold={item.numOfBold}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discoversection2;
