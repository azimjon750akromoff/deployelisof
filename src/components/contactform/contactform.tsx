"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

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
          {/* First and Second Name */}
          <div className="relative">
            <input
              type="text"
              name="firstAndSecondName"
              value={formData.firstAndSecondName}
              onChange={handleChange}
              placeholder=" "
              className="text-[#272727] w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal peer"
            />
            <label className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3.5 peer-focus:left-4">
              {f("name")}
            </label>
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder=" "
              className="text-[#272727] w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal peer"
            />
            <label className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3.5 peer-focus:left-4">
              {f("lname")}
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className="text-[#272727] w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal peer"
            />
            <label className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3.5 peer-focus:left-4">
              {f("email")}
            </label>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-[6px] items-center">
            <div className="relative w-full md:w-[100px]">
              <select className="text-[#272727] w-full h-[50px] py-3 px-4 text-base md:text-[16px] rounded-[8px] font-normal border border-[#CFD3D4] leading-normal">
                <option value="🇺🇿+998">998</option>
              </select>
            </div>

            <div className="relative w-full">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder=" "
                className="text-[#272727] w-full h-[50px] py-3 px-4 text-base md:text-[16px] rounded-[8px] font-normal border border-[#CFD3D4] leading-normal peer"
              />
              <label className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3.5 peer-focus:left-4">
                {f("number")}
              </label>
            </div>
          </div>

          {/* Description */}
          <div className="relative">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder=" "
              rows={4}
              className="text-[#272727] w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal peer resize-none"
            />
            <label className="absolute left-4 -top-3.5 text-sm text-gray-500 bg-white px-1 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-4 peer-focus:-top-3.5 peer-focus:left-4">
              {f("descript")}
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primaryColor rounded-[12px] px-[16px] py-[17px] text-white  hover:bg-green-700 transition-colors duration-200"
        >
          {b("sendrequest")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;