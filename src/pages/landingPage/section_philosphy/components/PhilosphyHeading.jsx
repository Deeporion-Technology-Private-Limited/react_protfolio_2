import React from "react";
import "../philosphy.css";


export default function PhilosphyHeading({heading,subheading}) {
  return (
    <div className="heading-container flex flex-column items-center justify-start">
      <div className="heading-translate w-full flex items-center mp-0">
        <h3 className="mp-0 philosphy-heading">{heading}</h3>
      </div>
      <div className="subheading-translate flex items-center">
        <h5 className="philosphy-blurb mp-0">
          {subheading}
        </h5>
      </div>
    </div>
  );
}
