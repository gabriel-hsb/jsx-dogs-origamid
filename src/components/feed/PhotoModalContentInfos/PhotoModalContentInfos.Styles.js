import { styled } from "styled-components";

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
      box-shadow: 0px 0px 0px 5px rgba(255, 0, 0, 0.5);
      color: var(--danger-text);
      background-color: transparent;
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
