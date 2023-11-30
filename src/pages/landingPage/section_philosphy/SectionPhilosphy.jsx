import React from "react";
import PhilosphyHeading from "./components/PhilosphyHeading";
import PhilosphySectionContainer from "./PhilosphySectionContainer";
import PhilosphyIntro from "./components/PhilsphyIntro";
import { philosphyHeadings } from "../../../assets/content/philosphyContent";
import "./philosphy.css";

export default function SectionPhilosphy() {
  return (
    <PhilosphySectionContainer>
      <div className="flex-column items-center justify-start">
        <PhilosphyHeading
          heading={philosphyHeadings.heading}
          subheading={philosphyHeadings.subHeading}
        />
        <PhilosphyIntro />
      </div>
    </PhilosphySectionContainer>
  );
}
