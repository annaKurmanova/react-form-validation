import React from "react";
import { HeaderStyled } from "./styled/Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <h1>This is a react form</h1>
      <a href="/">See code on GitHub</a>
    </HeaderStyled>
  );
};

export default Header;
