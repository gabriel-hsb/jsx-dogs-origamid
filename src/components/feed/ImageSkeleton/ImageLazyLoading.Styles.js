import { styled } from "styled-components";

export const LazyLoadingContainer = styled.div`
  display: grid;
  justify-items: center;

  img {
    display: grid;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.3s;
  }
`;

export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200px;
    }
  }
`;
