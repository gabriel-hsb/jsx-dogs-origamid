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

export const PhotoModalContentInfos = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-rows: auto 1fr auto;

  h1,
  a {
    width: fit-content;
    display: block;
  }

  h1 {
    margin-block: 0.25rem;
  }

  @media (width <= 500px) {
    padding: 1rem;
  }
`;

export const PhotoDelete = styled.div`
  color: #989898;

  button {
    background: #eee;
    padding: 0.25rem;
    cursor: pointer;
    border-radius: var(--radius);

    border: 1px solid #eec1;
    border-color: #eec1;
    outline: transparent;
    transition: var(--transition-fast);

    &:hover,
    &:focus {
      box-shadow: 0px 0px 14px 2px rgba(255, 1, 1, 0.4);
      color: var(--danger-text);
    }

    &:disabled {
      cursor: progress;
      box-shadow: none;
      background: transparent;
      color: var(--danger-text);
    }
  }
`;

export const Views = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #989898;

  & > span {
    font-family: Arial, Helvetica, sans-serif;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      color: var(--font-color-bg-light);
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  svg {
    circle,
    path {
      stroke: #989898;
    }

    circle {
      fill: #989898;
    }
  }
`;

export const DogDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: bold;

  @media (width <= 920px) {
    margin-top: 0.5rem;
  }
`;

export const DogDataSpan = styled.span`
  font-size: 1.2rem;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 700;
  color: var(--font-color-bg-light);
  display: flex;
  align-items: center;

  &::before {
    content: "";
    background-color: var(--font-color-bg-light);
    height: 1rem;
    width: 2px;
    margin-right: 10px;
  }
`;
