"use client";
import Image from "next/image";
import IntroCard from "./discover3/intro-card";
import LearnMoreButton from "./discover3/learn-more-button";
import Discover3BottomButton from "./discover3/bottom-button";

export default function DiscoverSec3() {
  return (
    <div className="bg-[#FFF8EC] py-16">
      {/* title */}
      <div className="text-center">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent inline-block">
          Whats coming
          <br />
          next?
        </h1>
      </div>

      {/* release date */}
      <div
        className="mt-8 w-[88%] ml-auto py-3 pl-8 pr-8 
          bg-[radial-gradient(ellipse_at_center,rgba(223,214,221,0.9)_60%,rgba(223,214,221,0)_100%)]
          backdrop-blur-[2px] border border-white rounded-l-full shadow-lg flex justify-start"
      >
        <span
          className="font-semibold ml-24 text-3xl bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to right, #F97916, #F99816)",
          }}
        >
          App Store launch in August 2025
        </span>
      </div>

      {/* features */}
      <div className="mx-auto mt-16 flex max-w-6xl flex-row items-center gap-12">
        <ul className="space-y-4 text-lg font-medium text-[#8F48FD] ml-[9%] w-1/2">
          <li>300+ unique quests by launch</li>
          <li>100+ creator partners posting daily content and driving growth</li>
          <li>Strategic partnerships with educators, creators, and teen-focused communities</li>
        </ul>

        <div className="relative h-56 w-56 md:h-64 md:w-64">
          <Image
            src="/assets/exciting_fox.svg"
            alt="Happy fox"
            fill
            sizes="(max-width: 768px) 224px, 256px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* two info cards */}
      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        <IntroCard>
          <h3 className="mb-6 text-2xl font-semibold">Our Mission</h3>
          <p className="text-base leading-relaxed">
            Make financial literacy fun, accessible, and unforgettable for the next generation. Equip every teen with
            core money skills before they turn 18
            <br />
            Replace outdated finance lessons with gamified, habit-forming experiences
          </p>
        </IntroCard>

        <IntroCard>
          <h3 className="mb-6 text-2xl font-semibold">Who we Are</h3>
          <p className="text-base leading-relaxed">
            A team of student founders, engineers, designers, and creators
            <br />
            Working across time zones with a shared goal: to change how money is learned
          </p>
          <div className="flex justify-center">
            <LearnMoreButton />
          </div>
        </IntroCard>
      </div>

      {/* actions */}
      <div className="mt-20 bg-gradient-to-r from-[#F97216] to-[#F99B16] px-4 py-6 text-white">
        <div className="mx-auto flex max-w-6xl justify-center items-center gap-4 flex-col md:flex-row">
          <p className="px-6 py-2 text-white text-2xl">Get involved!</p>
          <Discover3BottomButton text="Join the waitlist" onClick={() => {}} />
          <Discover3BottomButton text="Apply as a creator intern" onClick={() => {}} />
          <p className="px-6 py-2 text-end">Partnerships, press, or investing</p>
        </div>
      </div>
    </div>
  );
}
