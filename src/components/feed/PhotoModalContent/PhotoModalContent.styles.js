import { styled } from "styled-components";

export const PhotoModalContentContainer = styled.div`
  display: grid;
  grid-template-columns: 36rem 20rem;
  border-radius: var(--radius);
  overflow: hidden;
  height: auto;
  max-height: 90dvh;

  scroll-behavior: contain;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -48%);

  z-index: 99999 !important;
  background-color: #fff;

  img {
    object-fit: contain;
    max-width: 100%;
  }
  max-height: calc(100vh - 4rem);

  width: auto;
  @media (width <= 920px) {
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Photo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-height: 90dvh;
  }
`;
