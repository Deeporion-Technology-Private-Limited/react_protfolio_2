import React from "react";
import CategoriesGrid from "../../../components/shared/CategoryGrid";
import GridHeading from "./components/GridHeading";
import { Headings } from "../../../assets/content/gridContent"


export default function SectionCategories() {
  return (
    <div className="h-fit w-full flex justify-center categories-container">
      <div>
        <GridHeading heading={Headings.heading} subheading={Headings.subHeading} />
        <CategoriesGrid gridWrapper={"grid-wrapper"} />
      </div>
    </div>
  );
}
