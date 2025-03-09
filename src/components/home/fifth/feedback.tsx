'use client';

import { MarqueeDemo } from "@/components/products/comments";
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

function Feedback() {
  const f = useTranslations("Feedback");
  const b = useTranslations("Buttons");

  const totalCards = 3; // Adjust based on the total number of feedback cards
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(570); // Default width

  // Dynamically update card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth < 768 ? 320 : 570);
    };

    updateCardWidth(); // Set initial value
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const maxOffset = -(cardWidth * (totalCards - 1)); // Max left movement

  const handleNext = () => {
    setOffset((prev) => (prev - cardWidth < maxOffset ? 0 : prev - cardWidth));
  };

  const handlePrev = () => {
    setOffset((prev) => (prev + cardWidth > 0 ? maxOffset : prev + cardWidth));
  };

  return (
    <section id="clients" className="mt-8 md:pt-[65px]">
      <div className="my-container px-4">
        {/* Top Section - Heading and Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Section - Heading */}
          <div className="text-center md:text-left">
            <h2 className="font-federo text-2xl md:text-[42px] font-normal leading-[56px]">
              {f("feedback")}
            </h2>
            <p className="font-gilroy text-base md:text-[26px] font-normal text-[#133240]">
              {f("trust")}
            </p>
          </div>

          {/* Right Section - Buttons */}
          <div className="flex gap-2 md:gap-[10px]">
            <button
              onClick={handlePrev}
              className="border border-[var(--main,#1D5147)] w-[100px] md:w-[130px] h-[36px] md:h-[42px] rounded-[5px] text-black py-1 md:py-2 px-2 md:px-4 font-gilroy text-base md:text-lg font-medium text-center"
            >
              {b("prev")}
            </button>
            <button
              onClick={handleNext}
              className="bg-primaryColor w-[100px] md:w-[130px] h-[36px] md:h-[42px] rounded-[5px] text-white py-1 md:py-2 px-2 md:px-4 font-gilroy text-base md:text-lg font-medium text-center"
            >
              {b("next")}
            </button>
          </div>
        </div>

        {/* Marquee Section */}
        <div className="mt-6 md:mt-[40px] overflow-hidden">
          <MarqueeDemo offset={offset} />
        </div>
      </div>
      <div className="pb-[62px]"></div>
    </section>
  );
}

export default Feedback;
