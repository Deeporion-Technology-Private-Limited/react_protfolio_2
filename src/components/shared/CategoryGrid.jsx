import React from "react";
import "./CategoryGrid.css";
import { gridInfo } from "../../assets/content/gridContent"

export default function CategoryGrid({gridWrapper}) {
  return (
    <div className={`w-full flex justify-center items-center ${gridWrapper}`}>
      <div className="grid-container">
        {gridInfo.map((data) => (
          <div key={data.id} className="grid-element relative">
            <img className="" src={data.imageName} alt={data.imageName.replace(" ","_")} />
            <div className="centered-text w-full image-heading z-99">{data.title}</div>
            <div className="hover-text w-full h-full flex justify-center items-end">
              <p className="w-full text-translate">{data.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
