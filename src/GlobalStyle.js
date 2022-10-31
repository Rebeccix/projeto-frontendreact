import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    min-height: 100vh;
    background-color: rebeccapurple;
}

footer {
    position: relative;
    bottom: 0;
    background-color: grey;
    text-align: center;
}

.teste {
  display: flex;
}

@media screen and (max-width: 412px) {
  body {
    background-color: lightgreen;
  }
}
`;

export default GlobalStyle;
