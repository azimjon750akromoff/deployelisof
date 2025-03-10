import React from "react";
import Hero from "../home/first/hero";
import BestSeller from "../home/second/bestselleritems";

const MainComponent = () => {
  return (
    <div className="relative">
      {/* Grey Background Image Section */}
      {/* <div
        className="absolute inset-0 w-full h-[500px] bg-contain bg-right px-12 z-0 hidden md:block"
        style={{ backgroundImage: "url('/imgs/grey.png')", position: "fixed", top: 0, left: 0, zIndex: -1 }}
      ></div> */}

      {/* Hero Component */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* BestSeller Component */}
      <div className="relative z-10">
        <BestSeller />
      </div>
    </div>
  );
};

export default MainComponent;
