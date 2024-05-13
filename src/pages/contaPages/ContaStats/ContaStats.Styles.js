import styled from "styled-components";

export const ContaStatsContainer = styled.section`
  min-height: 100vh;
  width: 800px;
  margin: 0 auto;
  padding: 1.5rem 0 calc(1.5rem - 10px) 0;
  color: var(--font-color-bg-light);
`;

export const AccessTotal = styled.header`
  box-shadow: 0px 0px 59px -28px rgba(0, 0, 0, 0.61);
  padding: 1.5rem 1rem;
  border-radius: var(--radius);

  h2 {
    font-size: 1.8rem;
  }
`;

export const GraphsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  border-radius: var(--radius);
  margin-top: 2rem;
`;

export const Graph = styled.div`
  background: #caf;
  border-radius: var(--radius);
  /* box-shadow: 0px 0px 59px -28px rgba(0, 0, 0, 0.61); */
`;
