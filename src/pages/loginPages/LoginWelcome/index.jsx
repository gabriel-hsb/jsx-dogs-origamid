import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../../UserContext";
import useForm from "../../../scripts/hooks/useForm";

import DisplayTextSquare from "../../../components/text/DisplayTextSquare";
import SimpleButton from "../../../components/form/SimpleButton";
import TextUnderline from "../../../components/text/TextUnderline";
import DisplayTextRect from "../../../components/text/DisplayTextRect";
import TextInput from "../../../components/form/Input";
import DangerText from "../../../components/text/DangerText";

import * as S from "./LoginWelcome.Styles";

const LoginWelcome = () => {
  const userName = useForm();
  const userPassword = useForm();

  const { userLogin, error, isLoading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();

    // só vai fazer o post com fetch se campos estiverem validados
    if (userName.validate() && userPassword.validate()) {
      userLogin(userName.value, userPassword.value);
    }
  }

  return (
    <section className="animeLeft">
      <DisplayTextSquare>Login</DisplayTextSquare>

      <form action="" onSubmit={handleSubmit} noValidate>
        <TextInput
          id={"user"}
          label={"Nome de usuário"}
          type={"text"}
          required
          {...userName}
        />
        <TextInput
          id={"password"}
          label={"Senha"}
          type={"password"}
          required
          {...userPassword}
        />
        <S.LoginButonError>
          <SimpleButton disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
          </SimpleButton>
          {error && <DangerText>{error}</DangerText>}
        </S.LoginButonError>
      </form>

      <NavLink to="perdeusenha">
        <TextUnderline>Esqueceu a senha?</TextUnderline>
      </NavLink>
      <S.LoginRegister>
        <DisplayTextRect>Cadastre-se</DisplayTextRect>
        <p>Ainda não possui conta? Cadastre-se no site!</p>
        <NavLink to="criar">
          <SimpleButton>Cadastrar</SimpleButton>
        </NavLink>
      </S.LoginRegister>
    </section>
  );
};

export default LoginWelcome;
