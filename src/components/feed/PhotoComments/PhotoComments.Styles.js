import { styled } from "styled-components";

export const CommentList = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 0.5rem;
  padding-top: 2rem;
  /* overflow-y: auto; */
  /* TODO: FIX OVERFLOW Y SCROLL */

  @media (width <= 920px) {
    padding-top: 1.5rem;
  }
`;

export const CommentContainer = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 10rem;
`;

export const Comment = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--font-color-bg-light);
`;

export const Author = styled.span`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    text-decoration-color: currentColor;
  }
`;

export const Date = styled.span`
  color: #989898;
`;

export const LoginToComment = styled.p`
  color: #989898 !important;
  a,
  span {
    font-weight: bold;
    display: inline-block !important;
  }
`;
