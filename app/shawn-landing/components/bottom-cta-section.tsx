// import Image from "next/image";
import WaitlistButton from "./waitlist-button";

export default function BottomCtaSection() {
  return (
    <div className="w-full flex justify-center items-center px-[10%] pt-16 pb-36 relative overflow-hidden bg-[#FFF8EC] ">
      <div className="w-1/2 flex flex-col h-[300px] items-start">
        <h5 className="font-medium text-3xl mt-12">
          Real world knowledge, accessible anywhere.
        </h5>
        <p>[Copy about the production of FiPet]</p>
        <WaitlistButton className="mt-auto" />
      </div>

      <div className="w-1/2 h-[300px]">
        {/* <Image src="/assets/landing/sec4.png" alt="app" width={300} height={300} /> */}
        <div className={`w-full h-full bg-[#404041]`} />
      </div>
    </div>
  );
}
