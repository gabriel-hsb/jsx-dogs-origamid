import { NavLink } from "react-router-dom";

import ProfileLink from "../buttons/ProfileLink";
import DogsLogoSvg from "../../assets/images/icons/dogs.svg?react";

import * as S from "./Header.Syles";

const Header = () => {
  return (
    <S.Header>
      <S.NavBar>
        <NavLink to="/" end>
          <DogsLogoSvg />
        </NavLink>
        <NavLink to="login">
          <ProfileLink />
        </NavLink>
      </S.NavBar>
    </S.Header>
  );
};

export default Header;
