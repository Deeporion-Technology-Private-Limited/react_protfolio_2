import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Blogs.css"

export default function Blogs() {
  const blogNames = [
    {
      id: "1",
      to: "/home",
      linkName: "How a photographer looks like",
      date:"17 Nov 2018"
    },
    {
      id: "2",
      to: "/home",
      linkName: "People saying about Tabea",
      date:"17,Nov,2018"
    },
  ];

  return (
    <div className="List_container">
      <h5>Blogs</h5>
      <nav className="List_container">
        {blogNames.map((blogs) => (
          <div className="link_container flex_start" key={blogs.id}>
            <div className="flex_start">
              <BiChevronDown className="icon" />
              <Link to={blogs.to}>{blogs.linkName}</Link>
            </div>
            <p>{blogs.date}</p>
          </div>
        ))}
      </nav>
    </div>
  );
}
