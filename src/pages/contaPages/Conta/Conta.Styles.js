import styled from "styled-components";

export const ContaContainer = styled.header`
  margin: 0 auto;
  width: 800px;
  padding: 10px 10px 0 10px;
  z-index: 100;
  position: relative;

  section {
    padding: 0;
    margin-bottom: 1rem;
  }

  @media (width <= 820px) {
    width: 100%;
  }
`;

export const ContaHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media (width <= 820px) {
    padding-left: 7px;
  }

  @media (width <= 500px) {
    margin-bottom: 0.5rem;
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
    width: 13rem;
    top: 70px;
    right: 10px;
    padding: .8rem;
    background: #fff;
    box-shadow: 0 0 1px 1px #0000001a;
    border-radius: var(--radius);
    opacity: 0;
    flex-direction: column;
    align-items: flex-start;
    pointer-events: none;
    position: absolute;
    z-index: 100;

    & > * {
      z-index: 999;
    }

    a,
    button {
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

    z-index: 100;
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

  @media (width <= 820px >= 768px) {
    margin-right: 1rem;
  }
`;
