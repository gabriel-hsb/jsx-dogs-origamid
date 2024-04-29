import styled from "styled-components";

export const ContaContainer = styled.div`
  margin: 0 auto;
  width: 800px;
  padding: 10px;

  @media (width <= 768px) {
    width: 100dvw;
  }
`;

export const ContaHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (width <= 768px) {
    padding-inline: 2rem;
  }

  @media (width <= 500px) {
    margin-bottom: 2rem;

    padding-inline: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContaNavbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (width <= 500px) {
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
  }
`;
