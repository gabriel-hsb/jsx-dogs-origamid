import { styled } from "styled-components";

export const PostSection = styled.section`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 800px;
  margin: 0 auto;
  padding: 10px 10px 0 10px;

  @media (width<= 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
    width: auto;
  }
`;

export const PostForm = styled.form`
  input[type="file"] {
    margin-top: 0.8rem;
    display: block;
    color: var(--font-color-bg-light);
    @media (width <= 768px) {
      font-size: 0.8rem;
    }
  }

  button {
    margin-top: 1.6rem;
  }

  input[type="text"],
  input[type="number"] {
    width: 100%;
  }
`;

export const PhotoPreview = styled.div`
  padding-top: 1.5rem;
  text-align: center;

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
