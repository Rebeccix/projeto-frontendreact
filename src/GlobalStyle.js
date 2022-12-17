import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

footer {
    position: relative;
    bottom: 0;
    background-color: grey;
    text-align: center;
}

.center {
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 412px) {
  .center {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}
}
`;

export default GlobalStyle;
