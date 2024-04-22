import styled from "styled-components";

export const TextLabelFor = styled.label`
  display: block;
  font-size: 1.125 rem;
  padding-block: 0.8rem;
  color: var(--font-color-bg-light);
`;

export const TextInput = styled.input`
  border-radius: var(--radius);
  background-color: #eee;
  height: 2.6rem;
  padding-inline: 1rem;
  width: 28rem;
  border: 1px solid #eec1;
  border-color: #eec1;
  outline: transparent;
  transition: var(--transition-fast);
  color: var(--font-color-bg-light);
  &:hover,
  &:focus {
    background-color: #fff;
    border-color: var(--primary-color);
  }

  @media (width <= 768px) {
    width: 20rem;
  }
`;
