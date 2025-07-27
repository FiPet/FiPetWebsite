"use client";
import React from "react";
import Image from "next/image";

const DiscoverSection1: React.FC = () => {
  return (
    <>
      {" "}
     <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#BB48FD] to-[#0A61E4] min-h-[500px] md:min-h-[600px] lg:h-[728px] flex flex-col sm:flex-row">
      
      {/* Text Section */}
      <div className="w-full flex items-start pt-20 sm:pt-0 sm:items-center justify-left  px-6 sm:px-12 md:px-16 lg:px-26  ">
        <h1 className="text-white font-semibold leading-[108%] tracking-normal font-poppins text-[54px] md:text-7xl xl:text-[128px] max-w-[600px] text-left">
          Level up
          <br /> 
          for life.
        </h1>
      </div>

      {/* Image Section stuck to bottom */}
      <div className="w-full lg:w-1/2 flex ">
        <div className="absolute bottom-0 right-0 flex justify-right w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]  ">
          <Image
            src="/levelupchar.png"
            alt="FiPet Character"
             fill 
            className=" object-cover"  
            priority
          />
        </div>
      </div>
    </section>
      <section className="w-full flex flex-col items-center px-6 sm:px-12 md:px-16 lg:px-26 py-16 gap-5 text-black font-poppins bg-white sm:bg-[#FFF8ECBF]">
        {/* Top Text */}
        <h2 className="text-center font-poppins font-medium text-[32px] sm:text-[36px] md:text-[42px] leading-[142%]  max-w-4xl ">
          82% of teens want to learn about money, but most tools are boring or
          built for adults
        </h2>

        {/* Bottom Grid: Left box + Right text FOR bigscreens */}
        <div className="hidden sm:flex w-full  flex-col xl:flex-row justify-center items-center xl:items-end  gap-20 
        ">
          {/* Left Gray Box */}
          <Image
            src={"/assets/discover/cat_image_left.png"}
            alt="FiPet Character"
            width={200}
            height={100}
            className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] lg:w-[569px] lg:h-[320px] object-contain"
          />
          {/* <div className="w-[300px] h-[180px] sm:w-[400px] sm:h-[200px] lg:w-[472px] lg:h-[228px] bg-[#D9D9D9]" /> */}

          {/* Right Text */}
          <p className=" font-normal text-2xl md:text-[32px] leading-[142%] max-w-xl text-left">
            Financial illiteracy creates <br />
            lifelong consequences and <br /> stress. Schools are slow to adapt
            <br />
            — FiPet is fast, fun, and
            made for how teens actually learn today.
          </p>
        </div>
        {/* Bottom Grid: Left box + Right text FOR mobilescreens */}
        <div className="sm:hidden flex w-full  flex-row justify-center items-center  gap-10 
        ">
          {/* Left Gray Box */}
          <Image
            src={"/assets/discover/cat_image_left_2x.png"}
            alt="FiPet Character"
            width={325}
            height={183}
            className="-left-60 object-contain bg-gradient-to-r from-[#BB48FD] to-[#0A61E4] "
          />
 

          {/* Right Text */}
          <p className=" font-normal text-[16px] leading-[142%] max-w-xl text-left">
            Financial illiteracy creates 
            lifelong consequences and  stress. Schools are slow to adapt — 
            <br />
           FiPet is fast, fun, and
            made for how teens actually learn today.
          </p>
        </div>
      </section>
    </>
  );
};

export default DiscoverSection1;
