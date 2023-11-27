import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import "../styles/global.css"
import PageContainer from "../components/shared/PageContainer";
import LandingPage from "../pages/landingPage/LandingPage";
import Index from "../routes/Index";

export default function LayoutMain({children}) {
  return (
    <PageContainer>
      <Header />
      {children}
      <Footer />
    </PageContainer>
  );
}
