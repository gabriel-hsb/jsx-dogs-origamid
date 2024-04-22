import styled from "styled-components";

export const StyledDisplay = styled.h2`
  font-weight: 800;
  font-size: 2.25rem;
  color: var(--font-color-bg-light);
  line-height: 1;
  margin-block: 2rem;

  &::after {
    content: "";
    display: block;
    width: 2rem;
    height: 0.5rem;
    background: var(--secondary-color);
    position: absolute;
    border-radius: 0.2rem;
    z-index: -1;
  }

  @media (width <= 768px) {
    font-size: 2.5rem;
  }
`;
