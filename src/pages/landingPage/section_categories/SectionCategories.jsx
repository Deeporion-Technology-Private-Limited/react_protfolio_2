import React from "react";
import CategoriesGrid from "./components/CategoriesGrid";
import GridHeading from "./components/GridHeading";

export default function SectionCategories() {
  return (
    <div className="h-fit w-full flex justify-center categories-container">
      <div>
        <GridHeading />
        <CategoriesGrid />
      </div>
    </div>
  );
}
