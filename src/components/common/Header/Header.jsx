import React from "react";
import HeaderContainer from "./HeaderContainer";
import "./header.css";
import { Link } from "react-router-dom";
import {commonContent,pageNavigation} from "../../../assets/content/commonContent"

export default function Header() {
  return (
    <HeaderContainer>
      {/* Left Container */}
      <div className="w-full h-full flex justify-center items-center">
        <p className="logo_heading">{commonContent.portfolio}</p>
      </div>
      {/* Right Container */}
      <nav className="w-full h-full flex items-center justify-center">
        {pageNavigation.map((data)=>(
        <Link key={data.id} to={data.to} className="flex fit_content">{data.linkName}</Link>
        ))}
      </nav>
    </HeaderContainer>
  );
}
