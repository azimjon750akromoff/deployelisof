"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const b = useTranslations("Buttons");
  const f = useTranslations("Form");
  const [formData, setFormData] = useState({
    firstAndSecondName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center pt-8 md:pt-[92px] font-gilroy">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-[420px]">
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="firstAndSecondName"
              value={formData.firstAndSecondName}
              onChange={handleChange}
              placeholder="First and Second name"
              className="text-[#272727] disabled-input w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={f("lname")}
              className="text-[#272727] disabled-input w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={f("email")}
              className="text-[#272727] disabled-input w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal"
            />
          </div>

          <div className="relative">
            <PhoneInput
              country={"uz"}
              value={formData.phoneNumber}
              onChange={(phone) => setFormData((prev) => ({ ...prev, phoneNumber: phone }))}
              inputStyle={{ width: "100%", height: "50px", fontSize: "16px" }}
              buttonStyle={{ background: "transparent", border: "1px solid #CFD3D4" }}
            />
          </div>

          <div className="relative">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder={f("descript")}
              rows={4}
              className="text-[#272727] disabled-input w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primaryColor rounded-[12px] px-[16px] py-[17px] text-white hover:bg-green-700 transition-colors duration-200"
        >
          {b("sendrequest")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
