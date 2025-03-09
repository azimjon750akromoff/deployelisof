import ContactForm from "@/components/contactform/contactform";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Request() {
  const r = useTranslations("Request");

  return (
    <section id="contacts" className="mt-8 md:pt-[65px]">
      <div className="my-container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
          {/* Left Section - Image & Text */}
          <div className="w-full md:w-[60%] flex flex-col gap-4 md:gap-[25px] text-center md:text-start">
            <h2 className="font-federo text-2xl md:text-[42px] mb-3 font-normal md:leading-[0.856px]">
              {r("reqs")}
            </h2>

            <p className="font-gilroy text-base md:text-[26px] font-normal text-[#133240] md: leading-[0.52px]">
              {r("contactsoon")}
            </p>

            {/* Image Container */}
            <div className="w-full h-full">
              <Image
                loading="lazy"
                src="/imgs/uniform.png"
                layout="responsive"
                width={625}
                height={529}
                alt="kiyim"
                className="object-contain rounded-[8px]"
              />
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-[50%]">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="pb-[30px] md:pb-[46px]"></div>
    </section>
  );
}

export default Request;
