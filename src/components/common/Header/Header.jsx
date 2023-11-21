import React from "react";
import HeaderContainer from "./container/HeaderContainer";
import "./header.css";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  );
}
