import React from "react";
import { HeaderStyled } from "./styled/Header.styled";

const Header = () => {
  return (
    <HeaderStyled>
      <h1>This is a react form</h1>
      <a
        href="https://github.com/annaKurmanova/react-form-validation"
        target="_blank"
      >
        See code on GitHub
      </a>
    </HeaderStyled>
  );
};

export default Header;
