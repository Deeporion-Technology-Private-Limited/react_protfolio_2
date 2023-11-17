import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="flex items_center justify_center">
      <Link className="flex fit_content">Home</Link>
      <Link className="flex fit_content">Portfolio</Link>
      <Link className="flex fit_content">Blog</Link>
      <Link className="flex fit_content">About</Link>
      <Link className="flex fit_content">Contact Us</Link>
    </nav>
  );
}
