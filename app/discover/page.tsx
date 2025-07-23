import React from "react";
import "../globals.css";
import DiscoverSection1 from "@/components/discover/Discoversection1";
import DiscoverSection2 from "@/components/discover/Discoversection2";
import DiscoverSection3 from "@/components/discover/Discoversection3";

export default function DiscoverPage() {
  return (
    <div className=" w-full bg-[#FFF8EC]  ">
      <DiscoverSection1 />
      <DiscoverSection2 />
      <DiscoverSection3 />
    </div>
  );
}
