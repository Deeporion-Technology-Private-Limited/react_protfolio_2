import React from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi"
import { FaXTwitter } from "react-icons/fa6"
import "./Blurb.css"

export default function Blurb() {
  const iconNames = [
  {
    id: "1",
    icon: <BiLogoFacebook />,
  },
  {
    id: "2",
    icon: <BiLogoInstagram />,
  },
  {
    id: "3",
    icon: <BiLogoYoutube />,
  },
  {
    id: "4",
    icon: <FaXTwitter />,
  },
  ];

  return (
    <div className="list_container">
      <h5>Logo</h5>
      <p>
        Embark on a captivating visual journey with me, where each frame serves
        as a testament to the beauty inherent in both the world around us and
        within each individual.
      </p>
      <div className="icon_container_flex">
      {iconNames.map((item) => (
      <div key={item.id} className="icon-container">
        {item.icon}
      </div>
      ))}
    </div>
  </div>
  );
}
