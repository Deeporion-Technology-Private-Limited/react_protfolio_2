import React, { useState } from "react";
import "./LatestWork.css";
import PhilosphyHeading from "../section_philosphy/components/PhilosphyHeading";
import {
  Headings,
  ContactUs,
  TabArray,
} from "../../../assets/content/latestWorkContent";

export default function LatestWork() {
  const [currentCoverIndex, setCurrentCoverIndex] = useState(0);

  const handleImage = (index) => {
    setCurrentCoverIndex(index);
  };

  return (
    <div className="flex flex-column">
      <div className="philosphy-container">
        <PhilosphyHeading
          heading={Headings.heading}
          subheading={Headings.subheading}
        />
        <div className="work-container relative">
          <div className="latest-work">
            <img
              className="object-cover image-size"
              src={TabArray[currentCoverIndex].coverPhoto}
              alt="latest-work"
            />
          </div>
          <div className="img-container w-full mp-0 flex justify-center items-center">
            <h4 className="img-text w-full">
              {TabArray[currentCoverIndex].coverText}
            </h4>
          </div>
          <div className="tab-container flex items-center">
            {TabArray.map((data, index) => (
              <div
                onClick={() => handleImage(index)}
                key={data.id}
                className="button-container flex items-center"
              >
                <div className="l= w-full h-full">
                  <img src={data.imageName} alt="" />
                </div>
                <div className="w-full h-full">
                  <h4 className="tab-name mp-0">{data.name}</h4>
                  <h5 className="tab-author mp-0">{data.by} </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PhilosphyHeading
        heading={ContactUs.heading}
        subheading={ContactUs.subheading}
      />
    </div>
  );
}
