import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import GetInTouch from "../Pages/ContactUs/index"

export default function Index() {
  return (
    <Routes>
        <Route path="/" element={<Footer/>}></Route>
        <Route path="/get" element={<GetInTouch/>}></Route>
      </Routes>
  );
}
