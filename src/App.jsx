import { useState } from "react";
import GlobalStyles from "./components/styled/Global";
import { Container } from "./components/styled/Container.styled";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
    </Container>
  );
}

export default App;
