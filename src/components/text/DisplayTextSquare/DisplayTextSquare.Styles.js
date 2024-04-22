import styled from "styled-components";

export const StyledDisplay = styled.h2`
  font-family: spectral;
  font-weight: 700;
  font-size: 3rem;
  color: var(--font-color-bg-light);
  position: relative;
  line-height: 1;
  padding-block: 0.75rem;
  &::after {
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: var(--primary-color);
    position: absolute;
    bottom: 15px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;
