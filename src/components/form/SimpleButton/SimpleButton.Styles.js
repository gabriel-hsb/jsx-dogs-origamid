import styled from "styled-components";

export const SimpleButton = styled.button`
  background-color: var(--primary-color);
  border-radius: var(--radius);
  color: var(--font-color-bg-primary);

  padding: 0.75rem 2.5rem;
  display: inline-block;

  transition: var(--transition-fast);

  &:hover,
  &:focus,
  &:focus-visible {
    cursor: pointer;
  }

  &:disabled {
    color: var(--primary-color-darken);
    cursor: progress;
    box-shadow: none;
  }
`;
