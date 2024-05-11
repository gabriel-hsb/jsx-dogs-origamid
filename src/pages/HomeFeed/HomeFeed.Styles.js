import { styled } from "styled-components";

export const HomeFeedContainer = styled.section`
  display: grid;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem 10px;
  ul + ul {
    margin-top: 1rem;
  }
`;

export const PostsEndText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  padding: 2rem 0;
  color: #888;
  a {
    font-weight: bold;
  }
`;
