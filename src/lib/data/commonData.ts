import React from "react";
import {
  IFacebook,
  IInstagram,
  ITelegram,
} from "../../components/svg/svg-list";

type socialLinksType = {
  icon?: React.ReactElement | null;
  name: string;
  link: string;
}[];

export const socialLinks: socialLinksType = [
  {
    icon: React.createElement(IFacebook),
    name: "Facebook",
    link: "https://www.facebook.com/brightgallery.uz/?paipv=0&eav=AfY81FN0tDb2WaUd-wxvfrhrX3PwifBrwT7W_6lsOfoj-mXtbNRgL7Sh6IbVCPLa7vw&_rdr",
  },
  {
    icon: React.createElement(IInstagram),
    name: "Instagram",
    link: "https://www.instagram.com/brightgallery.uz/",
  },
  {
    icon: React.createElement(ITelegram),
    name: "Telegram",
    link: "https://t.me/brightgallery_uz",
  },
];
