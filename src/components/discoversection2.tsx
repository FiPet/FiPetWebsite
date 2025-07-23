// src/components/DiscoverSection2.tsx
"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function DiscoverSection2() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current || !carouselRef.current) return;

      const section = sectionRef.current;
      const carousel = carouselRef.current;

      const scrollY = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      const progress = Math.min(
        Math.max((scrollY - sectionTop) / sectionHeight, 0),
        1
      );

      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      carousel.scrollTo({
        left: progress * maxScrollLeft,
        behavior: "auto",
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-gradient-to-b from-purple-500 via-indigo-600 to-white
        bg-cover bg-center
      "
      style={{
        backgroundImage: "url('/assets/landing/hero2_background.png')",
        // minHeight: "100vh",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-12 md:py-30">
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

          <div className="flex justify-center">
            <Image
              src="/assets/discover/stock-image 1.png"
              alt="FiPet Character"
              width={472}
              height={350}
              className="
                w-[200px] h-[200px]
                sm:w-[400px] sm:h-[250px]
                lg:w-[472px] lg:h-[350px]
                object-contain
              "
              priority
            />
          </div>
        </div>

        <div ref={carouselRef} className="mt-12 overflow-x-auto hide-scrollbar">
          <div className="flex space-x-4 md:space-x-6p py-4">
            {[
              "/assets/discover/screen_1.png",
              "/assets/discover/screen_2.png",
              "/assets/discover/screen_3.png",
              "/assets/discover/screen_4.png",
              "/assets/discover/screen_5.png",
              "/assets/discover/screen_6.png",
              "/assets/discover/screen_7.png",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`Carousel frame ${i}`}
                width={400}
                height={250}
                className="flex-shrink-0 w-48 h-64 md:w-72 md:h-96 object-cover rounded-lg "
              />
            ))}
          </div>
        </div>

        <div className="mt-16 py-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#F97216]">
            How It Works
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 ">
              <Image
                alt=""
                src="/assets/discover/XP.png"
                width={40}
                height={40}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />
              <p className="text-gray-700 text-xl">
                <strong>Teens complete quests</strong> to earn XP and unlock pet
                upgrades
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                alt=""
                src="/assets/discover/arrow.png"
                width={40}
                height={40}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />

              <p className="text-gray-700 text-xl">
                <strong>Features include streak rewards,</strong> leaderboards,
                badges, and 1v1 quiz battles
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                alt=""
                src="/assets/discover/dollar sign.png"
                width={40}
                height={40}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />

              <p className="text-gray-700 text-xl">
                <strong>Each quest teaches financial concepts</strong> through
                storytelling and multiple-choice interactions
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <Image
                alt=""
                src="/assets/discover/Group 92.png"
                width={40}
                height={40}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />

              <p className="text-gray-700 text-xl">
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
