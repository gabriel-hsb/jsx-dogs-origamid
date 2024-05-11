import { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import TextInput from "../../../components/form/Input";
import SimpleButton from "../../../components/form/SimpleButton";
import DangerText from "../../../components/text/DangerText";
import DisplayTextSquare from "../../../components/text/DisplayTextSquare";

import { PASSWORD_RESET } from "../../../scripts/apiBackend";
import useFetch from "../../../scripts/hooks/useFetch";
import useForm from "../../../scripts/hooks/useForm";

import * as S from "./LoginResetPassword.Styles";

const LoginResetPassword = () => {
  const [key, setKey] = useState("");
  const [login, setLogin] = useState("");
  const newPassword = useForm("password");
  const { isFetching, error, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (newPassword.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: newPassword.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <S.LoginResetPasswordContainer className="animeLeft">
      <DisplayTextSquare>Resetar senha</DisplayTextSquare>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          id={"email"}
          label={"Digite sua nova senha"}
          type={"password"}
          required
          {...newPassword}
        />
        <SimpleButton disabled={isFetching}>
          {isFetching ? "Resetando..." : "Resetar senha"}{" "}
        </SimpleButton>
        {error && <DangerText>{error}</DangerText>}
      </form>
    </S.LoginResetPasswordContainer>
  );
};

export default LoginResetPassword;
