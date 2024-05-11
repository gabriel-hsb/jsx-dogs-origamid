import { styled } from "styled-components";

export const PhotoModalVh = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  z-index: 1000;
  z-index: 99999 !important;

  padding: 2rem calc(4rem + 15px) 2rem 4rem;
`;
