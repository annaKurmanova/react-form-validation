import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: all 0.4s ease;
}

body {
  font-family: 'Roboto', sans-serif;
  background: #171c21;
  color: #bec7d1;
  }

  h1,
  h2,
  h3,
  h4,
  a {
    font-family: 'Mulish', sans-serif;
    color: #dae0e5;
  }

  a {
  text-decoration: none;
  }

  ul li {
    list-style: none;
  }
}
`;

export default GlobalStyles;
