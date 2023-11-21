import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./QuickLinks.css"
import { commonContent } from "../../../../assets/content/commonContent";

export default function QuicklinkNames() {
  const quickLinkNames = [
    {
      id: "1",
      to: "/home",
      linkName: "Home",
    },
    {
      id: "2",
      to: "/home",
      linkName: "Portfolio",
    },
    {
      id: "3",
      to: "/about",
      linkName: "About Us",
    },
    {
      id: "4",
      to: "/services",
      linkName: "Services",
    },
    {
      id: "5",
      to: "/contact",
      linkName: "Contact Us",
    },
  ];

  return (
    <div className="List_container">
      <h5>{commonContent.quickLinks}</h5>
      <nav>
        {quickLinkNames.map((links) => (
          <div className="flex items-center" key={links.id}>
            <BiChevronDown className="arrow" />
            <Link to={links.to}>{links.linkName}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
