import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./QuickLinks.css"

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
      <h5>Quick Links</h5>
      <nav>
        {quickLinkNames.map((links) => (
          <div className=" flex_start" key={links.id}>
            <BiChevronDown className="icon" />
            <Link to={links.to}>{links.linkName}</Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
