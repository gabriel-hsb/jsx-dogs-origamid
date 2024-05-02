import { styled } from "styled-components";

export const CommentForm = styled.form`
  textarea {
    background-color: var(--secondary-color);
    color: var(--font-color-bg-light);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    transition: var(--transition-fast);
    color: var(--font-color-bg-light);
    border: 1px solid #eec1;
    border-color: #eec1;
    outline: transparent;
    resize: none;

    &:hover,
    &:focus {
      background-color: #fff;
      border-color: var(--primary-color);
    }
  }
`;
