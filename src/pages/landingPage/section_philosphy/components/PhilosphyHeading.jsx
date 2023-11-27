import React from "react";
import "../philosphy.css";
import { philosphyHeadings } from "../../../../assets/content/philosphyContent"


export default function PhilosphyHeading() {
  return (
    <div className="heading-container flex flex-column items-center justify-start">
      <div className="w-full flex items-center mp-0">
        <h3 className="mp-0 philosphy-heading">{philosphyHeadings.heading}</h3>
      </div>
      <div className="flex items-center">
        <h5 className="philosphy-blurb mp-0">
          {philosphyHeadings.subHeading}
        </h5>
      </div>
    </div>
  );
}
