import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import "../styles/global.css"
import "../styles/translate.css"
import PageContainer from "../components/shared/PageContainer";

export default function LayoutMain({children}) {
  return (
    <PageContainer>
      <Header />
      {children}
      <Footer />
    </PageContainer>
  );
}
