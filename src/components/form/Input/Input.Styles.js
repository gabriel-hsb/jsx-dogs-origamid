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
  padding-inline: 0.5rem;
  width: 100%;
  border: 1px solid #eec1;
  border-color: #eec1;
  outline: transparent;
  transition: var(--transition-fast);
  color: var(--font-color-bg-light);
  &:hover,
  &:focus {
    background-color: #fff;
    border-color: var(--primary-color);
    /* box-shadow: 0px 0px 18px 9px rgba(255, 187, 17, 0.44),
      100px 6px 0px -189px rgba(255, 187, 17, 0.06); */
  }
`;
