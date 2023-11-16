import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import GetInTouch from "../Pages/ContactUs/index"
import Quote from "../Pages/Quote/Quote";
import Layout from "../Pages/Layout/Layouts"

export default function Index() {
  return (
    <Routes>
        <Route path="/" element={<Footer/>}></Route>
        <Route path="/get" element={<GetInTouch/>}></Route>
        <Route path="/quote" element={<Quote/>}></Route>
        <Route path="/layout" element={<Layout/>}></Route>


      </Routes>
  );
}
