import React from "react";
import LayoutContainer from "./container/LayoutContainerHome";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Quote from "../Quote/Quote";
import GetInTouch from "../ContactUs/GetInTouch";
import HeroImage from "../HeroImage/HeroImage";
import Categories from "../Categories/Categories";

export default function Layouts() {
  return (
    <LayoutContainer>
      <Header />
      <HeroImage/>
      <Categories/>
      <Quote />
      <GetInTouch/>
      <Footer />
    </LayoutContainer>
  );
}
