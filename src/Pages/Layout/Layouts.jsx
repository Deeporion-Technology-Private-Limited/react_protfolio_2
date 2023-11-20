import React from "react";
import LayoutContainer from "./container/LayoutContainerHome";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Quote from "../Quote/Quote";
import GetInTouch from "../ContactUs/GetInTouch";
import HeroImage from "../HeroImage/HeroImage";
import Categories from "../Categories/Categories";
import Philosphy from "../philosphy_section/Philosphy";

export default function Layouts() {
  return (
    <LayoutContainer>
      <Header />
      <HeroImage/>
      <Categories/>
      <Philosphy/>
      <Quote />
      <GetInTouch/>
      <Footer />
    </LayoutContainer>
  );
}
