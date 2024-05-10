import { styled } from "styled-components";

export const PhotoModalContentContainer = styled.div`
  display: grid;
  grid-template-columns: 36rem 20rem;
  border-radius: var(--radius);
  overflow: hidden;
  height: auto;
  scroll-behavior: contain;

  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -48%);

  z-index: 999;
  background-color: #fff;

  img {
    object-fit: contain;
    max-width: 100%;
  }

  @media (width <= 920px) {
    grid-template-columns: 1fr;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    min-width: 80vw;
  }
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

