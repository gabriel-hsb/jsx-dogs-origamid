import styled from "styled-components";

export const StyledDisplay = styled.h2`
  font-weight: 800;
  font-size: 3rem;
  color: var(--font-color-bg-light);
  position: relative;
  line-height: 1;
  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--primary-color);
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;
