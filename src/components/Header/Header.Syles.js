import styled from "styled-components";

export const Header = styled.div`
  box-shadow: 0 1px 1px #0000001a;
  z-index: 999;
  position: fixed;
  width: 100dvw;
  z-index: 100;
  background: white;
  top: 0px;
`;

export const NavBar = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 0 auto;

  text-decoration: none;

  > * {
    padding: 10px 0;
  }
`;
