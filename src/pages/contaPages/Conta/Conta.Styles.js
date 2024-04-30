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
  position: relative;

  @media (width <= 768px) {
    padding-inline: 2rem;
  }

  @media (width <= 500px) {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;

    padding-inline: 0.25rem;
  }
`;

export const ContaNavbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    display: block;
    color: var(--font-color-bg-light);
    box-shadow: none !important;
  }

  /* className applyed only when screen width matches mobile */
  &.mobileContaNavBar {
    width: 15rem;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: #fff;
    box-shadow: 0 1 2px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    transform: translateX(-10px);
    opacity: 0;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: none;

    & a,
    & button {
      display: flex;
      align-items: center;
      border: none;
      padding: 0 0.5rem 0;
      cursor: pointer;
    }

    span {
      margin-left: 0.5rem;
    }
  }

  /* className only when nav bar is showing (burguer menu) */
  &.mobileContaNavBarActive {
    pointer-events: initial;

    z-index: 999;
    opacity: 1;
    transition: var(--transition-fast);
    transform: initial;
  }

  @media (width <= 500px) {
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

export const BurguerMenu = styled.button`
  background-color: var(--secondary-color);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: var(--radius);
  color: var(--font-color-bg-primary);

  width: 2.5rem;
  height: 2.5rem;

  transition: var(--transition-fast);

  &:hover,
  &:focus,
  &:focus-visible {
    cursor: pointer;
  }

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: #333;
    box-shadow: 0 6px #333, 0 -6px #333;
    transition: 0.25s;
  }

  &.burguerMenuActive {
    box-shadow: 0px 0px 0px 5px rgba(255, 187, 17, 0.4);
    background: #fff;
  }

  &.burguerMenuActive::after {
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;

    background: var(--primary-color);
    box-shadow: 0 8px var(--primary-color), 0 -8px var(--primary-color);
  }

  @media (width <= 500px) {
    margin-right: 10px;
  }
`;
