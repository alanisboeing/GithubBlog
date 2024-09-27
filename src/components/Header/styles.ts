import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to bottom, ${props=> props.theme["base-background"]}, ${props=> props.theme["base-profile"]}, ${props=> props.theme["base-post"]}, ${props=> props.theme["base-border"]}) ;
  
  
`