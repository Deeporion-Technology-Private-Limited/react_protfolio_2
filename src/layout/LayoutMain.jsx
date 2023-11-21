import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import "../styles/global.css"
import PageContainer from "../components/shared/PageContainer";
import LandingPage from "../pages/landingPage/LandingPage";

export default function LayoutMain() {
  return (
    <PageContainer>
      <Header />
      <LandingPage/>
      <Footer />
    </PageContainer>
  );
}
