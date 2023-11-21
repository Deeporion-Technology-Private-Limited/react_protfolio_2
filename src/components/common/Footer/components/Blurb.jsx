import React from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"
import "./Blurb.css"
import { commonContent } from "../../../../assets/content/commonContent";

export default function Blurb() {
  const iconNames = [
  {
    id: "1",
    icon: <BiLogoFacebook className="icon_size" />,
  },
  {
    id: "2",
    icon: <BiLogoInstagram className="icon_size" />,
  },
  {
    id: "3",
    icon: <BiLogoYoutube className="icon_size" />,
  },
  {
    id: "4",
    icon: <FaXTwitter className="icon_size" />,
  },
  ];

  return (
    <div className="w-full flex flex-column">
      <h5 className="blurb_heading">{commonContent.logo}</h5>
      <p className="blurb_text">
        Embark on a captivating visual journey with me, where each frame serves
        as a testament to the beauty inherent in both the world around us and
        within each individual.
      </p>
      <div className="flex items-center justify-start">
      {iconNames.map((item) => (
      <div key={item.id} className="icon-container">
        {item.icon}
      </div>
      ))}
    </div>
  </div>
  );
}
