import styled from "styled-components";

export const TextUnderline = styled.p`
  color: rgba(51, 51, 51, 0.85);
  font-size: 1.025rem;
  display: inline-block;
  position: relative;
  transition: var(--transition-fast);
  padding-bottom: 0.2rem;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #33333355;
    transition: var(--transition-fast);
  }

  &:hover::after,
  &:focus::after {
    width: 0;
  }
`;
