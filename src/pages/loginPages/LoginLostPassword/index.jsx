import React from "react";
import DisplayTextSquare from "../../../components/text/DisplayTextSquare";
import TextInput from "../../../components/form/Input";
import SimpleButton from "../../../components/form/SimpleButton";

import * as S from './LoginLostPassword.Styles'

const LoginLostPassword = () => {
  return (
    <S.LoginLostPasswordContainer className="animeLeft">
      <DisplayTextSquare>Perdeu a senha?</DisplayTextSquare>
      <form>
        <TextInput id={"mail"} label={"Digite o nome de usuário ou e-mail"} type={"text"} required />

        <SimpleButton> Recuperar senha </SimpleButton>
      </form>
    </S.LoginLostPasswordContainer>
  );
};

export default LoginLostPassword;
