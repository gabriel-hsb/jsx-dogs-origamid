import { useContext, useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";

import { UserContext } from "../../../UserContext";
import useMedia from "../../../scripts/hooks/useMedia";

import ContaPostar from "../ContaPostar";
import SquareButtonIcon from "../../../components/form/SquareButtonIcon";
import DisplayTextSquare from "../../../components/text/DisplayTextSquare";

import Homefeed from "../../../pages/HomeFeed";

import Stats from "../../../assets/images/icons/estatisticas.svg?react";
import Blocks from "../../../assets/images/icons/feed.svg?react";
import Add from "../../../assets/images/icons/adicionar.svg?react";
import LogOut from "../../../assets/images/icons/sair.svg?react";

import * as S from "./Conta.Styles";

const Conta = () => {
  const [title, setTitle] = useState("");
  const [burguerMenuActive, setBurguerMenuActive] = useState(false);

  const { userLogout, data: userData } = useContext(UserContext);
  const mobileWidth = useMedia("(width <= 820px)");

  let location = useLocation();
  location = location.pathname.split("/");
  location = location[location.length - 1];

  useEffect(() => {
    // changes the title based on the current URl
    switch (location) {
      case "conta":
        setTitle("Minhas Fotos");
        break;
      case "estatisticas":
        setTitle("Estatísticas");
        break;
      case "postar":
        setTitle("Postar Foto");
        break;
    }

    setBurguerMenuActive(false);
  }, [location]);

  return (
    <>
      <S.ContaContainer className="animeLeft">
        <S.ContaHeader>
          <DisplayTextSquare>{title}</DisplayTextSquare>

          {mobileWidth && (
            <S.BurguerMenu
              className={burguerMenuActive && "burguerMenuActive"}
              aria-label="Menu"
              onClick={() => setBurguerMenuActive(!burguerMenuActive)}
            ></S.BurguerMenu>
          )}
          <S.ContaNavbar
            className={`${mobileWidth && "mobileContaNavBar"} 
          ${burguerMenuActive && "mobileContaNavBarActive"}
            `}
          >
            <NavLink to="" end>
              <SquareButtonIcon>
                <Blocks />
              </SquareButtonIcon>
              {mobileWidth && <span>Minha Conta</span>}
            </NavLink>

            <NavLink to="estatisticas">
              <SquareButtonIcon>
                <Stats />
              </SquareButtonIcon>
              {mobileWidth && <span>Estatísticas</span>}
            </NavLink>

            <NavLink to="postar">
              <SquareButtonIcon>
                <Add />
              </SquareButtonIcon>
              {mobileWidth && <span>Postar Foto</span>}
            </NavLink>

            <button onClick={userLogout} style={{ background: "none" }}>
              <SquareButtonIcon>
                <LogOut />
              </SquareButtonIcon>
              {mobileWidth && <span>Sair</span>}
            </button>
          </S.ContaNavbar>
        </S.ContaHeader>
      </S.ContaContainer>
      <Routes>
        {/* FIXME: hover and modal totally out of place (something to do with css) */}
        <Route path="" element={<Homefeed userId={userData.id} />} />

        {/* <Route path="estatisticas" /> */}
        <Route path="postar" element={<ContaPostar />} />
      </Routes>
    </>
  );
};

export default Conta;
