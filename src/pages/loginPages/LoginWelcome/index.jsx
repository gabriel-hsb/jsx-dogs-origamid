import { useState } from "react";
import { NavLink } from "react-router-dom";

import useForm from "../../../scripts/hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../../scripts/apiBackend";

import DisplayTextSquare from "../../../components/text/DisplayTextSquare";
import SimpleButton from "../../../components/form/SimpleButton";
import TextUnderline from "../../../components/text/TextUnderline";
import DisplayTextRect from "../../../components/text/DisplayTextRect";
import TextInput from "../../../components/form/Input";

import * as S from "./LoginWelcome.Styles";

const LoginWelcome = () => {
  const [isLoading, setIsLoading] = useState(false);

  const userName = useForm();
  const userPassword = useForm();

  async function handleSubmit(e) {
    e.preventDefault();

    // só vai fazer o post com fetch se campos estiverem validados
    if (userName.validate() && userPassword.validate()) {
      try {
        setIsLoading(true);

        const { url, options } = TOKEN_POST({
          userName: userName.value,
          userPassword: userPassword.value,
        });

        const res = await fetch(url, options);
        const json = await res.json();

        console.log(json);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
  }

  if (isLoading) console.log("isLoading");
  if (!isLoading) console.log("is not loading");

  return (
    <section>
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
        <SimpleButton> Entrar </SimpleButton>
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
