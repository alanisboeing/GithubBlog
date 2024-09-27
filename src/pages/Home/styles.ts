import styled from "styled-components";

export const HomeContainer = styled.main`
  max-width: 56rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const PostsContainer = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const SearchPostsInput = styled.input`
  display: flex;
  flex: 1;

  padding: 0.785rem;

  background: ${(props) => props.theme["base-input"]};


  border: 0.5px solid ${(props) => props.theme["base-label"]};
  border-radius: 6px;

  &::placeholder{
    color: ${(props) => props.theme["base-label"]};
  }

`;
export const SearchPostsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1rem;

  form{
    display: flex;
    flex: 1;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: first baseline;

    h1 {
      font-size: 1.25rem;
      max-width: 70%;
    }

    span {
      font-size: 0.8rem;
      color: ${(props) => props.theme["base-span"]};
    }
  }
`;
export const PostCardContainer = styled.a`
  display: flex;
  flex-direction: column;

  height: 16.6rem;

  text-decoration: none;
  color: ${props=> props.theme["base-text"]};



  p{
    /* display: flex; */

    justify-content: first baseline;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  gap: 1rem;

  background: ${props=> props.theme["base-post"]};
  padding: 2rem;
  border-radius: 8px;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: first baseline;


    h1 {
      font-size: 1.25rem;
      max-width: 70%;
      color: ${props=> props.theme["base-subtitle"]};
    }

    span{
      font-size: 0.8rem;
      color: ${props=> props.theme["base-span"]};
    }
  }
`;
