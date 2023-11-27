import React from "react";

export default function PhilosphySectionContainer(props) {
  return (
    <div className="w-fit h-fit flex-column items-center justify-center philosphy_container">
      {props.children}
    </div>
  );
}
