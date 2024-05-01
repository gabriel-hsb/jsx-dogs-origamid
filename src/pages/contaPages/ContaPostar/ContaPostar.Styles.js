import { styled } from "styled-components";

export const PostSection = styled.section`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (width<= 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
  }
`;

export const PostForm = styled.form`
  input[type="text"],
  input[type="number"] {
    width: 90%;
  }

  input[type="file"] {
    margin-top: .8rem;
    display: block;
    color: var(--font-color-bg-light);
  }

  button {
    margin-top: 1.6rem;
  }
`;

export const PhotoPreview = styled.div`
  padding-top: 1.5rem;
  text-align: center;

  h2 {
    margin-bottom: 0.5rem;
  }

  div {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: var(--radius-plus);
    margin: 0 auto;

    @media (width<= 768px) {
      max-width: 95dvw;
    }

    &::after {
      content: "";
      display: block;
      height: 0px;
      padding-bottom: 100%;
    }
  }
`;
