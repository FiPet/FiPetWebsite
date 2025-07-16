"use client";
import React from "react";
import Image from "next/image";

const DiscoverSection1: React.FC = () => {
  return (
    <>
      {" "}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#BB48FD] to-[#0A61E4] min-h-[500px] md:min-h-[600px] lg:h-[728px] flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-26 pt-12 lg:pt-0">
          <h1 className="text-white font-semibold leading-[108%] tracking-normal font-poppins text-5xl md:text-7xl xl:text-[118px] max-w-[600px] text-center lg:text-left">
            Level up
            <br />
            for life.
          </h1>
        </div>

        {/* Image Section stuck to bottom */}
        <div className="w-full lg:w-1/2 relative mt-auto ">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex justify-center">
            <Image
              src="/levelupchar.png"
              alt="FiPet Character"
              width={695}
              height={695}
              priority
            />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center px-6 sm:px-12 md:px-16 lg:px-26 py-16 gap-12 text-black">
        {/* Top Text */}
        <h2 className="text-center font-poppins font-medium text-[32px] sm:text-[36px] md:text-[42px] leading-[142%]   max-w-4xl">
          82% of teens want to learn about money, but most tools are boring or
          built for adults
        </h2>

        {/* Bottom Grid: Left box + Right text */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-20">
          {/* Left Gray Box */}
          <div className="w-[300px] h-[180px] sm:w-[400px] sm:h-[200px] lg:w-[472px] lg:h-[228px] bg-[#D9D9D9]" />

          {/* Right Text */}
          <p className=" text-2xl md:text-[32px] leading-[142%] max-w-xl text-left">
            Financial illiteracy creates <br />
            lifelong consequences and <br /> stress. Schools are slow to adapt
            <br />
            <span className="font-semibold"> — FiPet</span> is fast, fun, and
            made for how teens actually learn today.
          </p>
        </div>
      </section>
    </>
  );
};

export default DiscoverSection1;
