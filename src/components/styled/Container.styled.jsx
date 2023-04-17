import styled from "styled-components";
import bgImage from "../../assets/images/connect.svg";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: start;
  justify-content: center;
  height: 100vh;
`;

export const ImageBg = styled.div`
  height: 100vh;
  background: url("${bgImage}") no-repeat bottom right;
  background-size: 100%;
  text-align: center;
  padding: 50px 10px;
  & h1 {
    margin-bottom: 20px;
  }
`;
