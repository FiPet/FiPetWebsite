import React from "react";
import "../globals.css";
import DiscoverSection1 from "@/components/Discoversection1";
import DiscoverSection2 from "@/components/Discoversection2";
import DiscoverSection3 from "./components/discover3";

export default function DiscoverPage() {
  return (
    <div className=" w-full bg-[#FFF8EC]  ">
      <DiscoverSection1 />
      <DiscoverSection2 />
      <DiscoverSection3 />
    </div>
  );
}
