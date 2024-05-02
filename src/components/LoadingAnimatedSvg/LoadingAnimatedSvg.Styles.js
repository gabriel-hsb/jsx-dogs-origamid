import { styled } from "styled-components";

export const LoadingContainer = styled.div`
  display: grid;
  place-content: center;

  position: fixed;
  width: 100dvw;
  height: 100dvh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.45);
  z-index: 1000;

  div {
    background-color: #eee;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 2rem;
    display: grid;
    place-content: center;
    svg {
      padding-left: 5px;
    }
  }
`;
