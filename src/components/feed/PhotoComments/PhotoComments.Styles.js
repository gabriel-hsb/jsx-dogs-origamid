import { styled } from "styled-components";

export const CommentList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 0;
  /* overflow-y: auto; */
  /* TODO: FIX OVERFLOW Y SCROLL */

  @media (width <= 920px) {
    padding: 1.5rem 0;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const Comment = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--font-color-bg-light);
`;

export const Author = styled.span`
  font-weight: bold;
`;

export const Date = styled.span`
  color: var(--font-color-bg-light);
  color: #989898;
`;
