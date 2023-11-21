import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";

export default function Index() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        {/* <Route path="/about" element={<GetInTouch/>}></Route>
        <Route path="/contactus" element={<Quote/>}></Route>
        <Route path="/blogs" element={<Layout/>}></Route> */}
      </Routes>
  );
}
