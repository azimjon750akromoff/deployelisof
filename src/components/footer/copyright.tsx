import { useTranslations } from "next-intl";
import React from "react";

function Copyright() {
  const t = useTranslations("Footer");

  return (
    <>
      <div className="bg-white"></div>
      <div className="bg-white bg-contain text-center font-sans py-4 z-20 ">
        <p className="text-[#7A7A7A] text-[16px] font-sans md:text-[20px]">
          &copy;{t("Copyright")} 2025 | Dynamic Soft | {t("AllRights")}
        </p>
      </div>
    </>
  );
}

export default Copyright;
