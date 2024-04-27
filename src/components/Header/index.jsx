import { useContext } from "react";
import { UserContext } from "../../UserContext";

import { NavLink } from "react-router-dom";

import ButtonProfileLink from "../form/ButtonProfileLink";
import DogsLogoSvg from "../../assets/images/icons/dogs.svg?react";

import * as S from "./Header.Syles";

const Header = () => {
  const { data } = useContext(UserContext);

  return (
    <S.Header>
      <S.NavBar>
        <NavLink to="/" end>
          <DogsLogoSvg />
        </NavLink>
        {data ? (
          <NavLink to="conta">
            <ButtonProfileLink>{data.username}</ButtonProfileLink>
          </NavLink>
        ) : (
          <NavLink to="login">
            <ButtonProfileLink>Entrar / Cadastrar</ButtonProfileLink>
          </NavLink>
        )}
      </S.NavBar>
    </S.Header>
  );
};

export default Header;
