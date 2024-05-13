import { styled } from "styled-components";

export const HomeFeedContainer = styled.section`
  display: grid;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1.5rem 10px calc(1.5rem - 10px) 10px;
  ul + ul {
    margin-top: 1rem;
  }
`;

export const PostsEndText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1.5rem 0;
  color: #888;
  a {
    font-weight: bold;
  }
  span {
    text-align: center;
  }

  button {
    padding: 0.8rem;
    background: transparent;
    cursor: pointer;
    position: relative;
    top: 0;
    transition: top ease 0.4s;
    &:hover {
      top: -7px;
    }
  }
`;
