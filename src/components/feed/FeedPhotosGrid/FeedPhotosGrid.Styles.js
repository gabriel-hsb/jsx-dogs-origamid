import { styled } from "styled-components";

export const FeedPhotosGridContainer = styled.ul`
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 1rem;
  align-items: start;
  place-content: center;

  @media (width <= 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (width <= 500px) {
    grid-template-columns: 1fr;
  }
`;
