import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;

    box-sizing: border-box;
  }

  body, button, input, ::placeholder, textarea{
    font-size: 1rem;
    font-family: "Nunito", sans-serif;
    font-weight: 400;

    color: ${props=> props.theme["base-text"]};
  }
  body{
    background-color: ${props=> props.theme["base-background"]};
  }
`
