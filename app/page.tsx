import "./globals.css";
import React from "react";
import Herosection1 from "@/components/Herosection1";
import Herosection2 from "@/components/Herosection2";

const page: React.FC = () => {
  return (
    <div>
      <Herosection1 />
      <Herosection2 />
    </div>
  );
};

export default page;
