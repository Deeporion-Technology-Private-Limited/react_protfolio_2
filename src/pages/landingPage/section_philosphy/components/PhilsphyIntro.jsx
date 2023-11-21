import React, { useState } from "react";
import IntroImage from "../../../../assets/Images/philosphy_image.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function PhilsphyIntro() {
  const introData = [
    {
      id: "1",
      heading: "About",
      details:
        "Hello there! I'm Tabea, the eye behind the lens. Photography, for me, is more than just a profession—it's a passion that allows me to freeze moments in time and turn them into everlasting memories. With a camera in hand and creativity in my heart, I embark on a journey to capture the beauty that often goes unnoticed. I find inspiration in the simplest of things—sunsets that paint the sky in hues of warmth, candid moments that reveal genuine emotions, and the intricate details that make each subject unique. My lens is my storyteller, and I'm here to share tales through the art of photography.A",
    },
    {
      id: "2",
      heading: "My Approach",
      details:
        "What sets my work apart is the dedication to telling authentic stories. I believe in creating a comfortable and natural environment, allowing my subjects to be themselves. Whether it's a portrait session, an event, or a stroll through nature, I aim to capture the essence of the moment with a blend of artistry and sincerity. Every click is a heartbeat, a fraction of time that tells a story. From the subtle nuances of a smile to the grandeur of a landscape, I seek to encapsulate the magic that surrounds us.",
    },
    {
      id: "3",
      heading: "What do I do",
      details:
        "Photography, to me, is a celebration of life. It's about cherishing the fleeting moments, finding beauty in imperfections, and preserving memories that resonate with emotion. Through my lens, I strive to create a visual narrative that connects people, transcending words and speaking to the soul. Join me on this visual journey, where every frame is a testament to the beauty that exists in the world and in each of us.",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  const nextTab = () => {
    const next = activeTab < introData.length ? activeTab + 1 : 1;
    setActiveTab(next);
  };

  const prevTab = () => {
    const prev = activeTab > 1 ? activeTab - 1 : introData.length;
    setActiveTab(prev);
  };

  return (
    <div className="flex justify-start">
      <div className="flex ">
        <img className="" src={IntroImage} alt="irl_in_red" />
      </div>
      <div className="flex items-start justify-start">
        <div className="h-full flex-column items-start justify-between">
          <div className="flex-column " >
            <div className="flex items-start justify-start pb_4">
              {introData.map((data) => (
                <div key={data.id} className="">
                  <div className="flex items-start justify-start" style={{paddingRight:"2.5rem"}}>
                      <p onClick={() => changeTab(parseInt(data.id))}>
                        {data.heading}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
            <div className="flex justify-start h_full intro-text pr-1">
              <p className="pr-4">
                {
                  introData.find((data) => parseInt(data.id) === activeTab)
                    ?.details
                }
              </p>
            </div>
          </div>
          <div className="flex justify-end items-end">
            <button className="jusify-center" onClick={prevTab}>
              <FaChevronLeft />
            </button>
            <button onClick={nextTab}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
