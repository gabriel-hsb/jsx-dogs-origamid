import { NavLink } from "react-router-dom";

import DisplayTextSquare from "../../../components/text/DisplayTextSquare";
import SimpleButton from "../../../components/form/SimpleButton";
import TextUnderline from "../../../components/text/TextUnderline";
import DisplayTextRect from "../../../components/text/DisplayTextRect";
import TextInput from "../../../components/form/Input";

import * as S from "./LoginWelcome.Styles";

const LoginWelcome = () => {
  return (
    <>
      <DisplayTextSquare>Login</DisplayTextSquare>
      <form>
        <TextInput
          id={"user"}
          label={"Nome de usuário"}
          type={"text"}
          required
        />
        <TextInput id={"password"} label={"Senha"} type={"password"} required />
        <SimpleButton> Entrar </SimpleButton>
      </form>
      <NavLink to="perdeusenha" >
        <TextUnderline>Esqueceu a senha?</TextUnderline>
      </NavLink>
      <S.LoginRegister>
        <DisplayTextRect>Cadastre-se</DisplayTextRect>
        <p>Ainda não possui conta? Cadastre-se no site!</p>
        <NavLink to="criar">
          <SimpleButton>Cadastrar</SimpleButton>
        </NavLink>
      </S.LoginRegister>
    </>
  );
};

export default LoginWelcome;
