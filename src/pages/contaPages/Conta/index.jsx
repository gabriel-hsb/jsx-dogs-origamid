import { useContext } from "react";
import { UserContext } from "../../../UserContext";

import SquareButtonIcon from "../../../components/form/SquareButtonIcon";
import DisplayTextSquare from "../../../components/text/DisplayTextSquare";

import Stats from "../../../assets/images/icons/estatisticas.svg?react";
import Blocks from "../../../assets/images/icons/feed.svg?react";
import Add from "../../../assets/images/icons/adicionar.svg?react";
import LogOut from "../../../assets/images/icons/sair.svg?react";

import * as S from "./Conta.Styles";
import { Routes, Route, NavLink } from "react-router-dom";
import ContaPostar from "../ContaPostar";

const Conta = () => {
  const { userLogout } = useContext(UserContext);

  return (
    <S.ContaContainer className="animeLeft">
      <S.ContaHeader>
        <DisplayTextSquare>Minha Conta</DisplayTextSquare>
        <S.ContaNavbar>
          <NavLink to="">
            <SquareButtonIcon>
              <Blocks />
            </SquareButtonIcon>
          </NavLink>

          <NavLink to="estatisticas">
            <SquareButtonIcon>
              <Stats />
            </SquareButtonIcon>
          </NavLink>

          <NavLink to="postar">
            <SquareButtonIcon>
              <Add />
            </SquareButtonIcon>
          </NavLink>

          <SquareButtonIcon onClick={userLogout} >
            <LogOut />
          </SquareButtonIcon>
        </S.ContaNavbar>
      </S.ContaHeader>

      <Routes>
        {/* <Route path="" /> */}
        {/* <Route path="estatisticas" /> */}
        <Route path="postar" element={<ContaPostar />} />
      </Routes>
    </S.ContaContainer>
  );
};

export default Conta;
