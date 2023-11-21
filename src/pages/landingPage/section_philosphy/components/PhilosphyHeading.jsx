import React from "react";
import "../philosphy.css";
export default function PhilosphyHeading() {
  return (
    <div className="flex-column items-start justify-center psContainer_width pb_4">
      <div className="flex items-center pb_2">
        <p className="philosphy_heading">About my Photography Philosophy</p>
      </div>
      <div className="flex items-center pt_8">
        <p className="philosphy_blurb">
          Join me on this visual journey, where every frame is a testament to
          the beauty that exists in the world and in each of us.
        </p>
      </div>
    </div>
  );
}
