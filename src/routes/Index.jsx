import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import AboutUs from "../pages/aboutUs/AboutUS";
import ContactUs from "../pages/contactUS/ContactUs";
import Blogs from "../pages/blogs/Blogs";
import AuthGuard from "../components/common/AuthGaurd";
import Page404 from "../components/common/Page404";
import LayoutMain from "../layout/LayoutMain";

export default function Index() {
  const unprotectedRoutes = [
    {
      path: "/",
      component: LandingPage,
      name: "home",
    },

    {
      path: "/aboutUs",
      component: AboutUs,
      name: "About Us",
    },

    {
      path: "/contactUs",
      component: ContactUs,
      name: "contact Us",
    },

    {
      path: "/blogs",
      component: Blogs,
      name: "Blogs",
    },

    {
      path: "*",
      component: Page404, // Add 404 component
      name: "404Page",
    },
  ];

  const protectedRoutes = [
    {
      path: "/dashboard",
      name: "dashboard",
      component: {
        admin: Page404,
        employee: Page404,
        client: Page404,
      },
      role: ["employee", "admin", "client"],
    },
  ];
  return (
    <BrowserRouter>
        <LayoutMain>
      <Routes>
          {unprotectedRoutes.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              name={obj.name}
              Component={obj.component}
            />
          ))}
          {protectedRoutes.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              name={obj.name}
              element={
                <AuthGuard Component={obj.component} roleList={obj.role} />
              }
            />
          ))}
      </Routes>
        </LayoutMain>
    </BrowserRouter>
  );
}
