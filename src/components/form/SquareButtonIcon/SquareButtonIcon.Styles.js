import styled from "styled-components";

export const SquareButtonIcon = styled.button`
  background-color: var(--secondary-color);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--radius);
  color: var(--font-color-bg-primary);

  width: 2.5rem;
  height: 2.5rem;
  display: inline-block;

  transition: var(--transition-fast);

  &:hover,
  &:focus,
  &:focus-visible {
    cursor: pointer;
  }
`;
