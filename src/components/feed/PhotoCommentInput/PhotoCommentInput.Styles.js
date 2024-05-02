import { styled } from "styled-components";

export const CommentInputContainer = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
  }

  textarea {
    background-color: var(--secondary-color);
    color: var(--font-color-bg-light);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    transition: var(--transition-fast);
    color: var(--font-color-bg-light);
    border: 1px solid #eee;
    outline: transparent;
    resize: none;

    &:hover,
    &:focus {
      background-color: #fff;
      border-color: var(--primary-color);
    }
  }

  button {
    height: 100%;
    cursor: pointer;
    background-color: transparent;
    color: #333;
    padding: 0.5rem;

    outline: none;

    &:hover svg,
    &:focus svg {
      path {
        fill: var(--primary-color);
      }
      g {
        animation: bark 0.6s infinite;
      }
    }
  }

  @keyframes bark {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
