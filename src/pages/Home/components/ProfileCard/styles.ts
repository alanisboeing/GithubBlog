import styled from "styled-components";

export const ProfileCardContainer = styled.article`
  display: flex;
  gap: 1rem;
  background-color: ${props=> props.theme["base-profile"]};
  border-radius: 8px;
  padding: 2rem;
  margin-top: -3rem;

  img{
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`
export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h1{
    color: ${props => props.theme["base-title"]};
  }

  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    nav a{
      text-decoration: none;
      text-transform: uppercase;
      color: ${props => props.theme.blue};
      font-size: 0.785rem;

      display: flex;
      align-items: center;

      gap: 0.5rem;
    }
  }
`

export const ProfileFeatures = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  list-style: none;

  li{
    display: flex;
    gap: 0.3rem;
    align-items: center;

    color: ${props => props.theme["base-label"]};

    span{
      color: ${props => props.theme["base-subtitle"]};
    }
  }
`