import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import useForm from "../../../scripts/hooks/useForm";
import useFetch from "../../../scripts/hooks/useFetch";

import { USER_POST } from "../../../scripts/apiBackend";

import DisplayTextSquare from "../../../components/text/DisplayTextSquare";
import SimpleButton from "../../../components/form/SimpleButton";
import TextInput from "../../../components/form/Input";
import DangerText from "../../../components/text/DangerText";

import * as S from "./LoginCreate.Styles";

const LoginCreate = () => {
  const userName = useForm();
  const userEmail = useForm("email");
  const userPassword = useForm();

  const { userLogin } = useContext(UserContext);
  const { isFetching, error, request } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
 
    const { url, options } = USER_POST({
      username: userName.value,
      email: userEmail.value,
      password: userPassword.value,
    });

    const { response } = await request(url, options);
    if (response.ok) userLogin(userName.value, userPassword.value);
  }

  return (
    <S.LoginCreate className="animeLeft">
      <DisplayTextSquare>Cadastre-se</DisplayTextSquare>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          id={"user"}
          label={"Nome de usuário"}
          type={"text"}
          required
          {...userName}
        />
        <TextInput
          id={"mail"}
          label={"E-mail"}
          type={"email"}
          required
          {...userEmail}
        />
        <TextInput
          id={"password"}
          label={"Senha"}
          type={"password"}
          required
          {...userPassword}
        />
        <SimpleButton disabled={isFetching}>
          {isFetching ? "Cadastrando..." : "Cadastrar"}
        </SimpleButton>
        {error && <DangerText>{error}</DangerText>}
      </form>
    </S.LoginCreate>
  );
};

export default LoginCreate;
