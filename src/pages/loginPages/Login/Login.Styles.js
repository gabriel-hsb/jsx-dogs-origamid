import styled from "styled-components";
import DogLoginImg from "../../../assets/images/photos/login.jpg";

export const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2.5rem;
  min-height: 100dvh;

  &::before {
    display: block;
    content: "";
    background: url(${DogLoginImg}) no-repeat center center;
    background-size: cover;
    height: 100%;
    width: 100%;
  }

  @media (width <= 768px) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

export const LoginInfos = styled.div`
  padding-block: 5rem;

  @media (width <= 768px) {
    padding: 2rem 10px;
    input {
      width: 100%;
    }
  }
`;
