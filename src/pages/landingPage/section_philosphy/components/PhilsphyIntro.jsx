import React, { useState } from "react";
import IntroImage from "../../../../assets/Images/TabeaImage.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {introData } from "../../../../assets/content/philosphyContent"

export default function PhilsphyIntro() {

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
    <div className="mt-5rem flex justify-start intro-tab gap-30">
      <div className="image-container flex ">
        <img className="" src={IntroImage} alt="girl_in_red" />
      </div>
      <div className="flex items-start justify-start">
        <div className="flex-column items-start justify-between">
          <div className="h-full w-full flex-column gap-30" >
            <div className="w-full flex items-start justify-start gap-40">
              {introData.map((data) => (
                <div key={data.id}>
                  <div className="flex items-start justify-start ">
                      <h3 onClick={() => changeTab(parseInt(data.id))}>
                        {data.heading}
                      </h3>
                    </div>
                  </div>
              ))}
            </div>

            <div className="h-full intro-text intro-tab gap-30 flex justify-start ">
              <p className="mp-0" >
                {
                  introData.find((data) => parseInt(data.id) === activeTab)
                    ?.details
                }
              </p>
            </div>
          </div>
          {/* Button Section */}
          <div className="w-full h-full self-end ">
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
