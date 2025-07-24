"use client";
import Image from "next/image";
import IntroCard from "./intro-card";
import LearnMoreButton from "./learn-more-button";
import DiscoverActionButton from "./action-button";

export default function DiscoverSection3() {
  return (
    <div className=" pt-16">
      {/* title */}
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent inline-block">
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
        <ul className="space-y-6 text-base sm:text-2xl font-medium text-[#8F48FD] ml-[9%] w-[40%]">
          <li>300+ unique quests by launch</li>
          <li>
            100+ creator partners posting daily content and driving growth
          </li>
          <li>
            Strategic partnerships with educators, creators, and teen-focused
            communities
          </li>
        </ul>

        <div className="relative h-56 w-56 md:h-96 md:w-96">
          <Image
            src="/assets/exciting_fox.svg"
            alt="Happy fox"
            fill
            sizes="(max-width: 768px) 224px, 384px"
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
            Make financial literacy fun, accessible, and unforgettable for the
            next generation. Equip every teen with core money skills before they
            turn 18
            <br />
            Replace outdated finance lessons with gamified, habit-forming
            experiences
          </p>
        </IntroCard>

        <IntroCard>
          <h3 className="mb-6 text-2xl font-semibold">Who we Are</h3>
          <p className="text-base leading-relaxed">
            A team of student founders, engineers, designers, and creators
            <br />
            Working across time zones with a shared goal: to change how money is
            learned
          </p>
          <div className="flex justify-center">
            <LearnMoreButton />
          </div>
        </IntroCard>
      </div>

      {/* actions */}
      <div className="mt-20 bg-gradient-to-r from-[#F97216] to-[#F99F16] px-4 py-2 text-white">
        <div className="mx-auto flex max-w-6xl justify-center items-center gap-4 flex-col md:flex-row">
          <p className="px-6 py-2 text-white text-3xl font-light whitespace-nowrap">
            Get involved!
          </p>
          <DiscoverActionButton
            text="Join the waitlist"
            onClick={() => {
              window.open(
                "https://tally.so/r/mB5ex4",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          />
          <DiscoverActionButton
            text="Apply as a creator intern"
            onClick={() => {}}
          />
          <DiscoverActionButton
            text="Partnerships, press, or investing"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
