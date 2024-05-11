import Login404 from "../Login404";
import LoginCreate from "../LoginCreate";
import LoginLostPassword from "../LoginLostPassword";
import LoginResetPassword from "../LoginResetPassword";
import LoginWelcome from "../LoginWelcome";

import * as S from "./Login.Styles";

import { Route, Routes } from "react-router-dom";

const Login = () => {
  return (
    <S.LoginContainer>
      <S.LoginInfos className="animeLeft">
        <Routes>
          <Route path="" element={<LoginWelcome />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeusenha" element={<LoginLostPassword />} />
          <Route path="resetarsenha" element={<LoginResetPassword />} />
          <Route path="*" element={<Login404 />} />
        </Routes>
      </S.LoginInfos>
    </S.LoginContainer>
  );
};

export default Login;
