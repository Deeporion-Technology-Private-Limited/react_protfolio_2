import React from "react";
import "./Footer.css";
import FooterContainer from "./FooterContainer";
import { commonContent } from "../../../assets/content/commonContent";
import {
  blogNames,
  iconNames,
  pageNavigation,
  footerText,
} from "../../../assets/content/footerContent";
import { BiChevronDown } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footer-grid">
        {/* Owner Blurb block */}
        <div className="w-full flex flex-column gap-18">
          <h5 className="footer-heading">{commonContent.logo}</h5>
          <p className="footer-text">{footerText.blurb}</p>
          <div className="flex items-center justify-start">
            {iconNames.map((item) => (
              <div key={item.id} className="icon-container">
                {item.icon}
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Links/Quick Links */}
        <div className="w-full flex flex-column items-start ml-4 gap-18">
          <h5 className="footer-heading">{commonContent.quickLinks}</h5>
          <nav className="w-fit flex flex-column gap-8">
            {pageNavigation.map((links) => (
              <div className="flex items-center" key={links.id}>
                <BiChevronDown className="arrow rotate-90deg" />
                <Link className="link-margin" to={links.to}><p className="footer-text">{links.linkName}</p></Link>
              </div>
            ))}
          </nav>
        </div>
        {/* Blogs Block */}
        <div className="w-full flex flex-column gap-18">
          <h5 className="w-full footer-heading">{commonContent.blogs}</h5>
          <nav className="w-full flex flex-column gap-8">
            {blogNames.map((data) => (
              <div className="w-full flex flex-column items-start" key={data.id}>
                <div className=" w-full flex justify-center">
                  <div className="w-fit h-full flex items-start justify-center">
                    <BiChevronDown className="arrow" />
                  </div>
                  <div className="w-full flex flex-column items-start">
                    <Link className="link-margin" to={data.to}><p className="footer-text flex w-full">{data.linkName}</p></Link>
                    <div className="flex link-margin">
                      <p className="footer-text text-md">{data.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
        {/* newsletter block */}
        <div className="w-full flex flex-column gap-18">
          <h5 className="footer-heading">{commonContent.newsletter}</h5>
          <div className="w-full flex flex-column gap-8">
            <form className="email_cotainer flex">
              <input type="email" />
              <button type="submit" id="mail_list" className="mail_button">
                <IoIosMail className="mail-icon"/>
              </button>
            </form>
            <div>
              <p className="footer-text text-md">{footerText.newsletter}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="footer-text">{footerText.copyright}</p>
      </div>
    </FooterContainer>
  );
}
