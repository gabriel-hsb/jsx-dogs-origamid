import { styled } from "styled-components";

export const HomeFeedContainer = styled.section`
  display: grid;
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 10px;
  ul + ul {
    margin-top: 1rem;
  }
`;

export const PostsEndText = styled.p`
  text-align: center;
  padding: 2rem 0;
  color: #888;
`;
