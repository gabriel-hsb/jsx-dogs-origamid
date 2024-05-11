import { styled } from "styled-components";

export const FeedPhoto = styled.li`
  position: relative;
  cursor: pointer;
  display: grid;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  &:nth-child(2) {
    grid-column: 2 / 4;
    grid-row: span 2;

    @media (width <= 768px) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  img,
  div {
    grid-area: 1/1;
    object-fit: contain;

  }

  img {
    max-width: 100%;
  }

  span {
    grid-area: 1/1;
    z-index: 999;
    background: rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    color: #fff;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    display: none;
    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &:hover span {
    display: flex;
  }
`;
