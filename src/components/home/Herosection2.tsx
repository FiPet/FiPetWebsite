"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-[#FFF8EC] pointer-events-none"></div>

      {/* Text block */}
      <div className="relative container mx-auto px-6 pt-16 pb-12 text-center md:pb-16">
        <h1
          className="text-white font-extrabold leading-tight 
                       text-5xl md:text-9xl sm:text-9xl lg:text-9xl"
        >
          Learn. Battle. Evolve.
        </h1>
        <p className="mt-4 text-white text-3xl md:text-5xl">
          All the finance. None of the stress.
        </p>
      </div>

      {/* Combined phones image */}
      {/* FIGURE OUT WHICH DIV BELOW TO KEEP */}
      <div className="flex justify-center px-6 pb-16 md:pb-24">
        {/* <div className="relative flex justify-center px-6 pb-16 md:pb-24"> */}
        {/* mobile phones */}
        <div className="relative w-full md:hidden">
          <Image
            src="/assets/landing/phones.png"
            alt="FiPet app screens on phones (mobile view)"
            layout="responsive"
            width={imgWidth}
            height={imgHeight}
            className="drop-shadow-2xl"
            priority
          />
        </div>
        {/* desktop phones */}
        <div className="hidden relative w-full md:block">
          <Image
            src="/assets/landing/phones.svg"
            alt="FiPet app screens on phones (desktop view)"
            layout="responsive"
            width={imgWidth}
            height={imgHeight}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Section 3 - Updated layout */}
      <div className="relative max-w-screen-xl mx-auto py-4">
        {/* Desktop layout - side by side */}
        <div className="hidden md:flex md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 space-y-6 text-start">
            <h2 className="md:text-2xl lg:text-[32px] font-semibold text-gray-900">
              Real world knowledge, accessible anywhere.
            </h2>
            <p className="text-gray-700 md:text-[13px] lg:text-lg ">
              Complete quests, upgrade your FiPet, battle
              <br />
              against your friends and learn real finance skills <br /> all from
              your fingertips.
            </p>
            <div
              className=" sm:h-auto md:w-[300px] mt-10 px-8 py-3 flex items-center justify-center text-white rounded-full transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #AB4AFB 0%, #8350F5 100%)",
                boxShadow: `
                  0px 4px 8px 0px #FFFFFF66 inset,
                  0px -3px 8px 0px #FFFFFF40 inset,
                  0px 4px 4px 0px #7A40D8
                `,
              }}
            >
              <Link href="/">Join the Waitlist</Link>
            </div>
          </div>

          {/* Desktop Image block */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-96 lg:w-[28rem]">
              <Image
                src="/assets/landing/3D-Icon.svg"
                alt="Icon desktop"
                width={400}
                height={400}
                layout="responsive"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile layout - stacked with button under image */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Text content */}
          <div className="space-y-6 text-left">
            <h2 className="text-[24px] font-semibold text-gray-900">
              Real world knowledge, accessible anywhere.
            </h2>
            <p className="text-gray-700 text-lg">
              Complete quests, upgrade your FiPet, battle against your friends
              and learn real finance skills all from your fingertips.
            </p>
          </div>

          {/* Mobile Image */}
          <div className="w-80">
            <Image
              src="/assets/landing/3D-Icon.png"
              alt="Icon mobile"
              width={400}
              height={400}
              layout="responsive"
              className="object-contain"
              priority
            />
          </div>

          {/* Button under image for mobile */}

          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </a>
        </div>

        {/* — Image block — */}
        {/* <div className="w-full md:w-1/2 flex justify-center"> */}
        {/* mobile icon */}
        {/* <div className="w-64 sm:w-80 md:hidden">
            <Image
              src="/assets/landing/3D-Icon.png"
              alt="Icon mobile"
              width={400}
              height={400}
              layout="responsive"
              className="object-contain"
              priority
            />
          </div> */}
        {/* desktop icon */}
        {/* <div className="hidden w-96 lg:w-[28rem] md:block">
            <Image
              src="/assets/landing/3D-Icon.svg"
              alt="Icon desktop"
              width={400}
              height={400}
              layout="responsive"
              className="object-contain"
              priority
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Herosection2;
