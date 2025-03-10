'use client';

import MiniShirts from "@/components/minishirts/minishirts";
import MyButton from "@/components/my-button/my-button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

function FamousProduct() {
  // State to track selected image
  const [selectedImage, setSelectedImage] = useState("/imgs/shirt1.png");
  const [isImageChanging, setIsImageChanging] = useState(false);

  // Array of mini shirt images
  const miniShirtImages = [
    "/imgs/shirt1.png",
    "/imgs/shirt2.png",
    "/imgs/shirt1.png",
    "/imgs/shirt2.png"
  ];
  const b = useTranslations("Buttons"); // Get translations

  const handleImageChange = (img:any) => {
    setIsImageChanging(true);
    setTimeout(() => {
      setSelectedImage(img);
      setIsImageChanging(false);
    }, 300); // Matches animation duration
  };

  return (
   <section className="pt-[30px] md:pt-[60px] ">
  <div className="test_wrapper  flex flex-col md:flex-row items-center justify-center gap-6 md:gap-[80px] bg-[url('/imgs/background.png')] bg-no-repeat bg-cover max-w-[100%] w-full h-auto md:h-[594px] p-6 md:p-[35px_48px] rounded-[20px] md:rounded-[377px_0px_0px_377px] shadow-lg mx-auto">
    
    {/* Image Container */}
    <div className="w-[200px] h-[200px] md:w-[543px] md:h-[523px] flex items-center justify-center rounded-full bg-white shadow-lg">
      <Image
        loading="lazy"
        src={selectedImage}
        width={319}
        height={377}
        alt="shirt"
        className={`object-contain transition-opacity duration-300 ease-in-out ${isImageChanging ? "opacity-0" : "opacity-100"} w-[150px] md:w-[319px] h-auto`}
      />
    </div>

    {/* Content Container */}
    <div className="flex flex-col gap-4 md:gap-6 items-start text-start w-full max-w-[450px]">
      <button className="bg-primaryColor rounded-[5px] text-white w-[200px] md:w-[238px] py-2 md:py-[9px] px-4 md:px-[41px] font-gilroy text-base md:text-lg font-medium">
        {b("fmsproduct")}
      </button>
      <p className="font-gilroy font-light text-base md:text-[20px] leading-[1.5] text-[#333]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
        hendrerit odio, non ultrices lorem. Donec vel vestibulum eros.
        Curabitur fringilla arcu varius.
      </p>
      <MyButton />
      <div className="flex gap-4 md:gap-[20px] mt-4 md:mt-[30px] justify-center">
        {miniShirtImages.map((img, index) => (
          <MiniShirts key={index} imgSrc={img} onClick={() => handleImageChange(img)} />
        ))}
      </div>
    </div>
  </div>
</section>

  );
}

export default FamousProduct;