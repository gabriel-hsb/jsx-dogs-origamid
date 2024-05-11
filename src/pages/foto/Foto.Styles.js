import styled from "styled-components";

export const SinglePhotoContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem 10px;
  min-height: 100vh;
  img {
    object-fit: contain;
    max-width: 100%;
    border-radius: var(--radius)
  }
`;
