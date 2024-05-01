import styled from "styled-components";

export const StyledDisplay = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--font-color-bg-light);
  line-height: 1;

  @media (width <= 768px) {
    font-size: 1.2rem;
  }
`;
