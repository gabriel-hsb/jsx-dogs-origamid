import styled from "styled-components";

export const ContaStatsContainer = styled.section`
  min-height: 100vh;
  display: grid;
  width: 800px;
  margin: 0 auto;
  padding: 1.5rem 0 1.5rem 0;
  color: var(--font-color-bg-light);

  @media (width <= 820px) {
    width: auto;
  }
`;

export const NoAccess = styled.h2`
  color: var(--font-color-bg-light);
  min-height: 100dvh;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  padding-top: 15rem;
`;

export const AccessTotal = styled.header`
  box-shadow: 0px 0px 59px -28px rgba(0, 0, 0, 0.61);
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  display: flex;
  align-items: center;

  h2 {
    font-size: 1.8rem;
  }

  @media (width <= 820px) {
    margin-inline: 10px;
    font-size: 1.25rem;
  }
`;

export const GraphsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border-radius: var(--radius);
  margin-top: 2rem;

  @media (width <= 820px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const Graph = styled.div`
  border-radius: var(--radius);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: grid;
  place-content: center;

  &.bar {
    padding: 1rem;
  }

  @media (width <= 820px) {
    margin-inline: 10px;
  }
`;

export const NotPostedYet = styled.p`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 0;
  color: #888;
  a {
    font-weight: bold;
  }
`;
