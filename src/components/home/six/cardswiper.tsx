'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const CardSwiper = () => {
  return (
    <Swiper
      spaceBetween={30} // Space between cards
      slidesPerView={3} // Show 3 cards per slide
      pagination={{ clickable: true }} // Enable pagination
      autoplay={{
        delay: 3000, // Autoplay delay of 3000ms
        disableOnInteraction: false, // Continue autoplay even after user interaction
      }}
      modules={[Pagination, Autoplay]} // Add Pagination and Autoplay modules
      className="mySwiper"
      breakpoints={{
        // Responsive breakpoints
        320: {
          slidesPerView: 1, // 1 card on small screens
        },
        768: {
          slidesPerView: 2, // 2 cards on medium screens
        },
        1024: {
          slidesPerView: 3, // 3 cards on large screens
        },
      }}
    >
      {/* Card 1 */}
      <>
      <div className="my-container flex justify-center items-center">
      <SwiperSlide>
        <div className="flex w-[338px]] h-[554px] flex-col items-center rounded-[8px] border border-[#E1E4ED] bg-[#FFF] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]">
          <Image
            loading="lazy"
            src="/imgs/gaz.png"
            width={338}
            height={228}
            alt="gaz"
            className="object-contain rounded-[8px]"
          />
          <p className="text-[#0F1E3D] mt-6 font-gilroy text-[18px] font-medium leading-[25px] w-[290px]">
            С 1 мая будут введены социальные нормы и изменены тарифы на
            электроэнергию и природный газ
          </p>
          <p className="font-gilroy text-[16px] text-[#6D758F] w-[290px] font-normal leading-6 mt-6">
            Согласно постановлению, определены новые цены на
            топливно-энергетические ресурсы, которые поэтапно будут меняться
            в ...
          </p>
          <hr className="w-[290px] border-t-2 border-[E1E4ED] my-4" />
          <p className="font-gilroy mt-6 text-[14px] text-[#6D758F] w-[290px] font-normal leading-6">
            Jan 16, 2025
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex w-[338px]] h-[554px] flex-col items-center rounded-[8px] border border-[#E1E4ED] bg-[#FFF] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]">
          <Image
            loading="lazy"
            src="/imgs/gaz.png"
            width={338}
            height={50}
            alt="gaz"
            className="object-contain rounded-[8px]"
          />
          <p className="text-[#0F1E3D] mt-6 font-gilroy text-[18px] font-medium leading-[25px] w-[290px]">
            С 1 мая будут введены социальные нормы и изменены тарифы на
            электроэнергию и природный газ
          </p>
          <p className="font-gilroy text-[16px] text-[#6D758F] w-[290px] font-normal leading-6 mt-6">
            Согласно постановлению, определены новые цены на
            топливно-энергетические ресурсы, которые поэтапно будут меняться
            в ...
          </p>
          <hr className="w-[290px] border-t-2 border-[E1E4ED] my-4" />
          <p className="font-gilroy mt-6 text-[14px] text-[#6D758F] w-[290px] font-normal leading-6">
            Jan 16, 2025
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex w-[338px]] h-[554px] flex-col items-center rounded-[8px] border border-[#E1E4ED] bg-[#FFF] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)]">
          <Image
            loading="lazy"
            src="/imgs/gaz.png"
            width={338}
            height={50}
            alt="gaz"
            className="object-contain w-[338px] h-[] rounded-[8px]"
          />
          <p className="text-[#0F1E3D] mt-6 font-gilroy text-[18px] font-medium leading-[25px] w-[290px]">
            С 1 мая будут введены социальные нормы и изменены тарифы на
            электроэнергию и природный газ
          </p>
          <p className="font-gilroy text-[16px] text-[#6D758F] w-[290px] font-normal leading-6 mt-6">
            Согласно постановлению, определены новые цены на
            топливно-энергетические ресурсы, которые поэтапно будут меняться
            в ...
          </p>
          <hr className="w-[290px] border-t-2 border-[E1E4ED] my-4" />
          <p className="font-gilroy mt-6 text-[14px] text-[#6D758F] w-[290px] font-normal leading-6">
            Jan 16, 2025
          </p>
        </div>
      </SwiperSlide>
      </div>
      </>
    </Swiper>
  );
};

export default CardSwiper;