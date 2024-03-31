import styled from "styled-components";

export const TextInput = styled.input`
  border-radius: var(--radius);
  background-color: #eee;
  height: 2.25rem;
  border: 10px solid #eec1;
  outline: 10px solid #eec1;
  transition: all 0.3s;
  color: var(--font-color-bg-light);
  &:hover,
  &:focus {
    background-color: #fff;
    box-shadow: 0px 0px 18px 9px rgba(255, 187, 17, 0.44),
      100px 6px 0px -189px rgba(255, 187, 17, 0.06);
  }
`;

export const TextLabelFor = styled.label`
  
`
