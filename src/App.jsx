import { useState } from "react";
import GlobalStyles from "./components/styled/Global";
import { Container } from "./components/styled/Container.styled";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <Form />
      </Container>
    </>
  );
}

export default App;
