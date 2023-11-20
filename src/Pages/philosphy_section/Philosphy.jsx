import React from "react";
import PhilosphyHeading from "./components/PhilosphyHeading";
import PhilosphySectionContainer from "./containers/PhilosphySectionContainer";
import PhilosphyIntro from "./components/PhilsphyIntro"
import "./philosphy.css";

export default function Philosphy() {
  return (
    <PhilosphySectionContainer>
      <div className="flex-column items-center justify-start psContainer_width">
      <PhilosphyHeading />
      <PhilosphyIntro/>
      </div>
    </PhilosphySectionContainer>
  );
}
