import styled from "styled-components";

export const IssueContainer = styled.main`
  width: 56rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 3rem;

  & p{
    text-align: justify;
    line-height: 1.8;
    padding: 0 2rem;
  }  
`
export const ProfileCardContainer = styled.article`
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 8px;
  padding: 2rem;
  margin-top: -3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme["base-title"]};
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a {
      text-decoration: none;
      text-transform: uppercase;
      color: ${(props) => props.theme.blue};
      font-size: 0.785rem;

      display: flex;
      align-items: center;

      gap: 0.5rem;
    }
  }
`;

export const ProfileFeatures = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;

  li {
    display: flex;
    gap: 0.3rem;
    align-items: center;

    color: ${(props) => props.theme["base-label"]};

    span {
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`;